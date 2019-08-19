import os

IMAGES_DIR = '{}/images'.format(os.getcwd())
HTML_DIR = '{}/html'.format(os.getcwd())

def make_images_dir():
    if not os.path.isdir(IMAGES_DIR):
        os.mkdir(IMAGES_DIR)

def make_html_dir():
    if not os.path.isdir(HTML_DIR):
        os.mkdir(HTML_DIR)
