import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function Index() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!text) {
      alert("Please enter news text");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        text: text,
      });

      setResult(response.data.prediction);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🔎 Fake News Detection</h1>
      <p className="subtitle">
        Enter a news article below to check whether it is Real or Fake.
      </p>

      <textarea
        placeholder="Paste your news content here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleCheck}>
        {loading ? "Checking..." : "Check News"}
      </button>
<p>Devloped by Vartika</p>


      {result !== "" && (
        <div className={`result ${result === 1 ? "real" : "fake"}`}>
         {result !== "" && (
  <div className={`result ${result.includes("Real") ? "real" : "fake"}`}>
    {result}
  </div>
)}
        </div>
      )}
    </div>
  );
}

export default Index;
