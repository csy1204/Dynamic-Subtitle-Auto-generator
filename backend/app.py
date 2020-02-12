from flask import Flask
from flask import request
from download import download_from_url
import os

app = Flask(__name__)

@app.route('/download')
def hello_world():
    result = download_from_url(request.args.get('url'), request.args.get('name'))
    if result:
        return {"filename": f"{request.args.get('name')}.mp4", "path": os.path.join('static', request.args.get('name')+'.mp4'), "result": "success"}
    else:
        return {"result": "error"}

if __name__ == "__main__":
    app.run(debug=True)