from flask import Flask
from flask_cors import CORS, cross_origin

from flask import request
from download import download_from_url
import os

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/download')
def downalod_video():
    result = download_from_url(request.args.get('url'), request.args.get('name'))
    if result:
        return {"filename": f"{request.args.get('name')}.mp4", "path": os.path.join('static', request.args.get('name')+'.mp4'), "result": "success"}
    else:
        return {"result": "error"}

@app.route('/vtt')
def serve_vtt_file():





if __name__ == "__main__":
    app.run(debug=True)