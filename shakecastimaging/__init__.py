import os

from .app.util import HTML_DIR, IMAGES_DIR, make_html_dir, make_images_dir

if not os.path.isdir(HTML_DIR):
    make_html_dir()

if not os.path.isdir(IMAGES_DIR):
    make_images_dir()
