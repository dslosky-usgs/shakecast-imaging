import unittest

from ..app.driver import get_driver
from ..app.imaging import *

driver = get_driver()

class TestImaging(unittest.TestCase):
    def test_takeScreenshot(self):
        driver.get('https://google.com')
        result = save_screenshot(driver, 'google_logo.png', 'hplogo')

    def test_getImage(self):
        driver.get('https://google.com')
        result = get_image(driver, 'hplogo')


if __name__ == '__main__':
    unittest.main()