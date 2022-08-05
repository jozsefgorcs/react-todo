import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import "./App.css";
import TodoList, { TodoItem } from "./TodoList";

function App() {
  let [data, setData] = useState([
    { Id: 1, Title: "helloo", Checked: false },
    { Id: 2, Title: "bello", Checked: false },
  ]);
  function onDeleteClick(id: Number) {
    setData(data.filter((x) => x.Id !== id));
  }

  function onCheckChange(id: Number, checked: boolean) {
    let modified = data.filter((x) => x.Id === id)[0];
    modified.Checked = checked;
    let newArray = [...data.filter((x) => x.Id !== id), modified];
    setData(newArray);
  }
  function onNewTodoAdd() {
    if (inputValue.trim().length === 0) {
      return;
    }
    setData((prev) => [
      ...prev,
      { Id: Date.now(), Title: inputValue, Checked: false },
    ]);
    setInputValue("");
  }
  let [inputValue, setInputValue] = useState("");

  function handleInputChange(e: any) {
    console.log(e);
    setInputValue(e.target.value);
  }
  return (
    <div className="App">
      <TodoList
        todos={data}
        onDeleteClick={onDeleteClick}
        onCheckChange={onCheckChange}
      ></TodoList>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add new TODO element"
          aria-label="Add new TODO element"
          aria-describedby="basic-addon2"
          onChange={handleInputChange}
          value={inputValue}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            onNewTodoAdd();
          }}
        >
          Add
        </Button>
      </InputGroup>
    </div>
  );
}

export default App;
