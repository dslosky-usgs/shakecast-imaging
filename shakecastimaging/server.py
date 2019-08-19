import io
import os
import sys 
import time

from flask import Flask, send_file, request

from app.driver import get_driver
from app.imaging import get_screenshot
from app.util import HTML_DIR

app = Flask(__name__)
driver = get_driver()

@app.route('/')
def root():
    return '<h1>Shakecast Imaging Server</h1>'

@app.route('/screenshot')
def screenshot():
    # append all screenshot content
    content = ''

    for key in request.args.keys():
        if content:
            content = '{}&{}={}'.format(content, key, request.args[key])
        else:
            content = request.args[key]

    if content:
        name = 'screenshot_{}.html'.format(int(time.time() * 100))

        if content:
            save_html(name, content)
            screenshot = get_screenshot(driver, name)

            return send_file(screenshot, mimetype='image/gif')

    return ''

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

def start(port=5000, debug=False):
    app.run(host='0.0.0.0', port=port, debug=debug, threaded=True)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == '-d':
            # run in debug mode
            start(port=5000, debug=True)
    else:
        start()