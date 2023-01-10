
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import numpy as np
import joblib


# Create the application.
app = Flask(__name__, template_folder='../client/build', static_folder='../client/build/static')
CORS(app)

@app.route('/')
def main():
    """ Displays the main page accessible at '/'
    """
    return render_template("index.html", token="Hello React+Flask")

@app.route('/predict', methods=['POST'])
def predict():
    """ Predict whether news is fake or real """
    
    news = request.json["news"]
    news_transformed = tfidf_transformer.transform(np.array([news]))
    prediction = model.predict(news_transformed)

    return jsonify({"prediction" : list(prediction)})



if __name__ == '__main__':
    
    model = joblib.load('./model.pkl')
    tfidf_transformer = joblib.load('./tfidf.pkl')
    
    app.run(debug=True)
    

