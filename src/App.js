import './App.css';
import React, { useState } from 'react';
import ToDoItem from './components/ToDoItem.js'; 

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  //adds a new item to the list
  const addToDo = () => {
    if (newToDo.trim()) { //checks if input task is empty
      setToDos([...toDos, {text: newToDo, isComplete: false, isEditing: false }]); 
      setNewToDo("");
    }
  }

  const completeToDo = (taskIndex) => {
    const updatedToDos = toDos.map((toDo, index) =>
      index === taskIndex ? { ...toDo, isComplete: !toDo.isComplete } : toDo
    );
    setToDos(updatedToDos);
  };

  const editToDo = (taskIndex) => {
    const updatedToDos = toDos.map((toDo, index) =>
      index === taskIndex ? { ...toDo, isEditing: true } : toDo
    );
    setToDos(updatedToDos);
  };

  const saveToDo = (taskIndex, newText) => {
    const updatedToDos = toDos.map((toDo, index) =>
      index === taskIndex ? { ...toDo, text: newText, isEditing: false } : toDo
    );
    setToDos(updatedToDos);
  };

  const removeToDo = (taskIndex) => {
    setToDos(toDos.filter((_, index) => index !== taskIndex));
  };


  return (

    <div className="App">
      <div>
        <h1>To Do List</h1>

        {toDos.length === 0 ? (
          <p>No to-dos available. Add one and get started!</p>
        ) : (
          <ul>
            {toDos.map((toDo, taskIndex) => (
              <ToDoItem
                key={taskIndex}
                toDo={toDo}
                taskIndex={taskIndex}
                completeToDo={completeToDo}
                editToDo={editToDo}
                saveToDo={saveToDo}  // Pass saveToDo function
                removeToDo={removeToDo}
              />
            ))}
          </ul>
        )}

        
        <input
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          placeholder="Enter a new to do"
        />
        <button onClick={addToDo}>Add</button>
        
      </div>

    </div>
  );
}

export default App;
