import unittest

from ..server import app
test_client = app.test_client()

class TestServer(unittest.TestCase):
    def test_serverRoot(self):
        test_client.get('/')
    
    def test_screenshot(self):
        test_client.get('/screenshot')

    def test_render(self):
        test_client.get('/render')

if __name__ == '__main__':
    unittest.main()