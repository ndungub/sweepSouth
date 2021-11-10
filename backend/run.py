# run.py

import os

from app import init_app

config_name = os.getenv('FLASK_CONFIG')
app = init_app(config_name)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)