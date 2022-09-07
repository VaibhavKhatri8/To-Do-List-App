import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

  function handleClick(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={handleClick} />
      <div>
        <ul>
          {items.map((todoItems, index) => (
            <ToDoItem
              text={todoItems}
              onChecked={deleteItem}
              id={index}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
