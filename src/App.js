import "./App.css";
import { usePushNotification } from "./hooks/usePushNotification";

function App() {
  let input;
  const { formPushNotif, loading, error } = usePushNotification();

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formPushNotif({ variables: { type: input.value } });
          input.value = "";
        }}
      >
        <input
          className="form-control"
          ref={(node) => {
            input = node;
          }}
          placeholder="input text..."
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
