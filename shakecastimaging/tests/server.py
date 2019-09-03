import unittest

from ..api import app
test_client = app.test_client()

class TestServer(unittest.TestCase):
    def test_serverRoot(self):
        test_client.get('/')
    
    def test_screenshot(self):
        test_client.get('/screenshot')

if __name__ == '__main__':
    unittest.main()