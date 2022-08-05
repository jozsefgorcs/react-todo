import React from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

type TodoItem = {
  Id: number;
  Title: String;
};
type TodoProps = {
  todos: TodoItem[];
  onDeleteClick: DeleteFunction;
};
type DeleteFunction = (id: Number) => void;

function onCheckboxChange(e: any, id: Number) {
  console.log(e.target.checked, id);
}

function TodoList(props: TodoProps) {
  return (
    <ListGroup>
      {props.todos.map((x) => (
        <ListGroup.Item key={x.Id}>
          <Form.Check
            className="form-check-inline"
            type="checkbox"
            label={x.Title}
            onChange={(e: any) => {
              onCheckboxChange(e, x.Id);
            }}
          />

          <Button
            variant="danger"
            size="sm"
            className="ml-5"
            onClick={() => props.onDeleteClick(x.Id)}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
export type { TodoItem };
