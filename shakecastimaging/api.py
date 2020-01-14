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
    file_path = request.args.get('file_path', None)
    element_id = request.args.get('element_id', 'html')

    if file_path is None:
        return '<h1>No file specified</h1>'

    driver = get_driver()
    screenshot = get_screenshot(driver, file_path, element_id)
    driver.quit()

    return send_file(screenshot, mimetype='image/gif')


def start(port=config['port'], debug=False):
    app.run(host='0.0.0.0', port=port, debug=debug, threaded=True)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == '-d':
            # run in debug mode
            start(port=config['port'], debug=True)
    else:
        start()