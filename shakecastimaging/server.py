import io
import os
import sys 
import time

from flask import Flask, send_file, request, render_template_string

from app.driver import get_driver
from app.imaging import get_screenshot
from app.util import HTML_DIR, Config, TEMPLATE_DIR


reload(sys)
sys.setdefaultencoding('utf8')

app = Flask(__name__)
config = Config()

@app.route('/')
def root():
    return '<h1>Shakecast Imaging Server</h1>'

@app.route('/screenshot/<template_name>')
def screenshot(template_name):
    # append all screenshot content
    full_template_name = os.path.join(TEMPLATE_DIR, template_name)

    if os.path.isfile(full_template_name):

        with open(full_template_name, 'r') as file_:
            template = file_.read()
        
        name = 'screenshot_{}.html'.format(int(time.time() * 100))

        save_html(name, render_template_string(template.decode('utf-8'), **request.args))

        driver = get_driver()
        screenshot = get_screenshot(driver, name)
        driver.quit()

        return send_file(screenshot, mimetype='image/gif')
    
    return '<h1>No Template {}</h1>'.format(template_name)


@app.route('/render/<name>')
def render(name):
    html_file = os.path.join(HTML_DIR, name)

    if os.path.isfile(html_file):
        with open(html_file, 'r') as file_:
            return file_.read()
    
    return ''

def save_html(name, content):
    full_name = os.path.join(HTML_DIR, name)
    with open(full_name, 'w') as file_:
        file_.write(content)
    
    return True

def start(port=config['port'], debug=False):
    app.run(host='0.0.0.0', port=port, debug=debug, threaded=True)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == '-d':
            # run in debug mode
            start(port=config['port'], debug=True)
    else:
        start()