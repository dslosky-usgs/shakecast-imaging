import io
import os
import sys 
import time

from flask import Flask, send_file, request, render_template_string, send_from_directory

from app.driver import get_driver
from app.imaging import get_screenshot
from app.util import Config, VIEW_DIR


reload(sys)
sys.setdefaultencoding('utf8')

app = Flask(__name__)
config = Config()

@app.route('/')
def root():
    return '<h1>Shakecast Imaging Server</h1>'

@app.route('/screenshot')
def screenshot():

    driver = get_driver()
    screenshot = get_screenshot(driver)
    driver.quit()

    return send_file(screenshot, mimetype='image/gif')

@app.route('/screenshot/impact/<shakemap_id>')
def screenshot_impact(shakemap_id):

    driver = get_driver()
    screenshot = get_screenshot(driver)
    driver.quit()

    return send_file(screenshot, mimetype='image/gif')

# serve angular files
@app.route('/<path:filename>')
def view_files(filename):
    return send_from_directory(VIEW_DIR, filename)

@app.route('/view/<path>')
def test(path):
    index = os.path.join(VIEW_DIR, 'index.html')
    with open(index, 'r') as file_:
        return file_.read()

def start(port=config['port'], debug=False):
    app.run(host='0.0.0.0', port=port, debug=debug, threaded=True)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == '-d':
            # run in debug mode
            start(port=config['port'], debug=True)
    else:
        start()