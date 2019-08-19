from io import BytesIO
import os
import time

from PIL import Image

from .util import IMAGES_DIR

def get_screenshot(driver, name, div=None):
    driver.get('http://localhost:5000/render/' + name)

    name = 'screenshot_{}.png'.format(int(time.time() * 100))
    full_name = os.path.join(IMAGES_DIR, name)

    time.sleep(5)
    screenshot_image = get_image(driver)
    screenshot_image.save(full_name)

    return full_name

def get_image(driver):
    # Find the pixel positions of the screenshot element
    element = driver.find_element_by_id('screenshot')
    location = element.location
    size = element.size
    left = location['x']
    top = location['y']
    right = location['x'] + size['width']
    bottom = location['y'] + size['height']

    # Save only the the screenshot element
    png = driver.get_screenshot_as_png()
    im = Image.open(BytesIO(png))
    im = im.crop((left, top, right, bottom))
    return im
