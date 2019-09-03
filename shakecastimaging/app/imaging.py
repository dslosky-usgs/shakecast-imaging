from io import BytesIO
import os
import time

from PIL import Image

from .util import IMAGES_DIR, Config


def get_screenshot(driver, element_id='screenshot'):
    config = Config()
    driver.get('{}:{}/view/impact'.format(config['dns'], config['port']))
    time.sleep(5)

    name = time.time() * 100
    full_name = save_screenshot(driver, name, element_id)

    return full_name

def get_image(driver, element_id):
    # Find the pixel positions of the screenshot element
    element = driver.find_element_by_id(element_id)
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

def save_screenshot(driver, name, element_id):
    name = 'screenshot_{}.png'.format(int(time.time() * 100))
    full_name = os.path.join(IMAGES_DIR, name)

    screenshot_image = get_image(driver, element_id)
    screenshot_image.save(full_name)

    return full_name
