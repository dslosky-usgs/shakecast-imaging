import os

from .app.util import IMAGES_DIR, make_images_dir

if not os.path.isdir(IMAGES_DIR):
    make_images_dir()
