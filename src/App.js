import React from "react";
import "./App.css";
import { usePushNotification } from "./hooks/usePushNotification";

function App() {
  const { loading, error, setContent, handleSubmit } = usePushNotification();

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="input text..."
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
