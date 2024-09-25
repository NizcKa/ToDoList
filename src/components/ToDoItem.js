import React, { useState } from 'react';

function ToDoItem({ taskIndex, toDo, completeToDo, editToDo, saveToDo, removeToDo }) {
  const [editText, setEditText] = useState(toDo.text);
  const [isComplete, setIsComplete] = useState(false);

  const handleSave = () => {
    saveToDo(taskIndex, editText);
  };

  return (
    <li>
      {toDo.isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: toDo.isComplete ? 'line-through' : 'none' }}
          >
            {toDo.text}
          </span>
          <button onClick={() => completeToDo(taskIndex)}>
            {toDo.isComplete ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => editToDo(taskIndex)}>Edit</button>
          <button onClick={() => removeToDo(taskIndex)}>Remove</button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
