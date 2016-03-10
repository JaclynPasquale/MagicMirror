from flask import Flask, render_template
import json
def getApiKeys():
    with open('apikeys.json') as key_file:  
        apiKeyDict = {}  
        keys = json.load(key_file)
        apiKeyDict['wuApiKey'] = keys['wuApiKey']
        return apiKeyDict

app = Flask(__name__, static_url_path="/static")
@app.route("/")
def index():
    apiKeyDict = getApiKeys()
    wuApiKey = apiKeyDict['wuApiKey']
    return render_template('index.html', wuApiKey = wuApiKey)

if __name__ == "__main__":
    app.run(port=8080)
    
