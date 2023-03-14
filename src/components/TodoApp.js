import React, { useEffect } from "react";
import pencil from "../images/pencil.png";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./styles.scss";

export default function TodoApp() {
  const [isListHidden, setIsListHidden] = useState(false);
  const [numTodos, setNumTodos] = useState(0);

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setNumTodos(todos.length);
  }, [todos]);

  function handleHideList() {
    setIsListHidden(true);
  }

  function handleRemoveAll() {
    setTodos([]);
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.target.value = "";
      console.log(inputValue);
      setTodos((prevTodos) => [
        ...prevTodos,
        { text: inputValue, id: uuidv4() },
      ]);
      setIsListHidden(false);
    }
  }

  function handleRemoveTodo(RemovedTodoId) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== RemovedTodoId)
    );
  }
  return (
    <div className="wrapper">
      <div className="todoApp">
        <div id="header">
          <h1 id="title">Todo List</h1>
          <input
            onKeyDown={handleKeyDown}
            onChange={(event) => setInputValue(event.target.value)}
            id="input"
            type="text"
          />
          <img id="pencil" src={pencil} alt="pencilImage" />
        </div>
        <div id="middle">
          {!isListHidden && (
            <button id="hide" onClick={handleHideList}>
              Hide List
            </button>
          )}
          {isListHidden && (
            <button id="show" onClick={() => setIsListHidden(false)}>
              Show List
            </button>
          )}
        </div>
        <div id="footer">
          {!isListHidden && (
            <div id="completed-tasks">
              {todos.map((todo) => (
                <div id="Tasks" key={todo.id}>
                  <div id="task">{todo.text}</div>
                  <button
                    id="removeBtn"
                    onClick={() => handleRemoveTodo(todo.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          {isListHidden && (
            <div id="num-todos">
              <p
                style={{
                  fontSize: "30px",
                  color: "orange",
                  paddingLeft: "5px",
                }}
              >
                <i>{numTodos}</i> todos
              </p>
            </div>
          )}
          <button id="removeAllBtn" onClick={handleRemoveAll}>
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
}
