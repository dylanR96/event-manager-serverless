import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Hello there</h1>
        <button onClick={() => navigate("/events")}>Events</button>
        <button onClick={() => navigate("/ticket")}>Ticket</button>
        <button onClick={() => navigate("/verify")}>Verify</button>
      </div>
    </>
  );
}

export default App;
