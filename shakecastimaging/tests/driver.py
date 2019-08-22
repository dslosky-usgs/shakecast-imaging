import unittest

from ..app.driver import get_driver

class TestDriver(unittest.TestCase):
    def test_createDriver(self):
        driver = get_driver()

if __name__ == '__main__':
    unittest.main()