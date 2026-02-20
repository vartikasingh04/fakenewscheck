# fakenewscheck
📰 Fake News Detection Web App

A simple and interactive Fake News Detection Web Application built using React (Frontend) and Python Flask (Backend) with a Machine Learning model to classify news as Real or Fake.

🚀 Features

📝 Enter any news article text

🤖 Machine Learning based prediction

⚡ Fast API response using Flask

🎨 Clean and responsive UI

🔴 Displays result as Real News or Fake News


🛠️ Tech Stack
Frontend

React.js

Axios

CSS

Backend

Python

Flask

Scikit-learn

Pickle (for model loading)


⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/fake-news-detection.git
cd fake-news-detection
🔹 Backend Setup (Flask)

Navigate to backend folder:

cd fake-news-backend

Create virtual environment (optional but recommended):

python -m venv venv
venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Run the server:

python app.py

Backend will run on:

http://127.0.0.1:5000
🔹 Frontend Setup (React)

Navigate to frontend folder:

cd fake-news-frontend

Install dependencies:

npm install

Start React app:

npm start

Frontend will run on:

http://localhost:3000
🧠 How It Works

User enters news text in the input box.

React sends the text to Flask API using Axios.

Flask loads the trained ML model (model.pkl).

Model predicts whether news is Real or Fake.

Result is sent back and displayed on the UI.


📸 Screenshot

<img width="1404" height="776" alt="Screenshot 2026-02-20 102648" src="https://github.com/user-attachments/assets/5e4c982c-ebb1-4fb2-b419-07e597b85877" />










📌 Future Improvements

🔍 Add confidence percentage

📊 Show prediction probability graph

🌐 Deploy using Render / Railway / Vercel

🗂 Add database to store past predictions

🧪 Improve model accuracy

