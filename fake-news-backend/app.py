from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

@app.route("/")
def home():
    return "Backend Running"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    news_text = data["text"]

    transformed = vectorizer.transform([news_text])
    prediction = int(model.predict(transformed)[0])

    print("Prediction Value:", prediction)   # terminal me check karna

    if prediction == 1:
        result = "Fake News 🔴"
    else:
        result = "Real News 🟢"

    print("Result Sent:", result)

    return jsonify({"prediction": result})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
