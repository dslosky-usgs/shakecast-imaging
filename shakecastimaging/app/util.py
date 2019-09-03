import json
import os

APP_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../'))
IMAGES_DIR = os.path.join(APP_DIR, 'images')
VIEW_DIR = os.path.join(APP_DIR, 'view')

class Config(dict):
    def __init__(self):
        self.load_configs()

    def load_configs(self):
        configs = self.open_configs()
        for config in configs.keys():
            self[config] = configs[config]

    @staticmethod
    def open_configs():
        config_file = os.path.join(APP_DIR, 'conf.json')
        with open(config_file, 'r') as file_:
            configs = json.loads(file_.read())
        return configs

def make_images_dir():
    if not os.path.isdir(IMAGES_DIR):
        os.mkdir(IMAGES_DIR)
