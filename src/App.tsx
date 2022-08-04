import React from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  function onDeleteClick(id: Number) {
    alert("delete from app");
  }
  return (
    <div className="App">
      <TodoList
        todos={[
          { Id: 1, Title: "hello" },
          { Id: 2, Title: "bello" },
        ]}
        onDeleteClick={onDeleteClick}
      ></TodoList>
    </div>
  );
}

export default App;
