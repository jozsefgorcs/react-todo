import React, { useEffect } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

type TodoItem = {
  Checked: boolean;
  Id: number;
  Title: String;
};
type TodoProps = {
  todos: TodoItem[];
  onDeleteClick: DeleteFunction;
  onCheckChange: CheckedFunction;
};
type DeleteFunction = (id: Number) => void;
type CheckedFunction = (id: Number, checked: boolean) => void;

function TodoList(props: TodoProps) {
  useEffect(() => {
    console.log("use effect");
  });

  return (
    <ListGroup>
      {props.todos.map((x) => (
        <ListGroup.Item key={x.Id}>
          <Form.Check
            className={
              "form-check-inline " + (x.Checked ? "checked-listelement" : "")
            }
            type="checkbox"
            label={x.Title}
            onChange={(e: any) => {
              props.onCheckChange(x.Id, e.target.checked);
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
