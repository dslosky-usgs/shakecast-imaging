import json
import os

CWD = os.getcwd()
IMAGES_DIR = os.path.join(CWD, 'images')
HTML_DIR = os.path.join(CWD, 'html')
BASE_DIR = os.path.join(os.path.dirname(__file__), '../')

class Config(dict):
    def __init__(self):
        self.load_configs()

    def load_configs(self):
        configs = self.open_configs()
        for config in configs.keys():
            self[config] = configs[config]

    @staticmethod
    def open_configs():
        config_file = os.path.join(BASE_DIR, 'conf.json')
        with open(config_file, 'r') as file_:
            configs = json.loads(file_.read())
        return configs

def make_images_dir():
    if not os.path.isdir(IMAGES_DIR):
        os.mkdir(IMAGES_DIR)

def make_html_dir():
    if not os.path.isdir(HTML_DIR):
        os.mkdir(HTML_DIR)

def get_base_dir():
    cwd = os.getcwd()
    os.path.join(cwd, '../')

    return 

