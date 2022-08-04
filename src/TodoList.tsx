import React from "react";
import { Button, ListGroup } from "react-bootstrap";

type TodoItem = {
  Id: number;
  Title: String;
};
type TodoProps = {
  todos: TodoItem[];
  onDeleteClick: DeleteFunction;
};
type DeleteFunction = (id: Number) => void;

function TodoList(props: TodoProps) {
  return (
    <ListGroup>
      {props.todos.map((x) => (
        <ListGroup.Item>
          {x.Title}
          <Button
            variant="danger"
            size="sm"
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
