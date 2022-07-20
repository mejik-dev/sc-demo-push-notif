import OneSignal from "react-onesignal";
import React, { useEffect } from "react";
import "./App.css";
import { usePushNotification } from "./hooks/usePushNotification";

function App() {
  const { loading, error, content, setContent, handleSubmit } =
    usePushNotification();

  useEffect(() => {
    OneSignal.init({
      appId: "82a08a59-6b98-41f5-8464-525d1193faf6",
    });
  }, []);

  if (error) return `Submission error! ${error.message}`;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="input text..."
          onChange={(e) => setContent(e.target.value)}
          value={content}
          required
        />

        {loading ? (
          <button className="button" type="submit" disabled>
            Loading...
          </button>
        ) : (
          <button className="button" type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default App;
