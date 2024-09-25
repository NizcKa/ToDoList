import React, { useState } from 'react';

function ToDoItem({taskIndex,toDo,completeToDo,editToDo,removeToDo }) {

  return (
    <li>
      <span>{toDo.text}</span>
      <button onClick={() => completeToDo(taskIndex)}>Complete</button>
      <button onClick={() => editToDo(taskIndex)}>Edit</button>
      <button onClick={() => removeToDo(taskIndex)}>Remove</button>
  
    </li>
  );
}

export default ToDoItem;