import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Todo from "./Pages/Todo";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/todo">Todo</Link> | <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
