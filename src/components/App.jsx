import React, { useState } from "react";

function App() {

const [inputText, setinputText] = useState("");
const [items , setitems] = useState([]);



 function handleChange(event){
    const newValue = event.target.value;
    setinputText(newValue);
 }
function addItem(){
  setitems(previousItems => {
    return [...previousItems, inputText];
    
  });
  setinputText("");
}



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         { items.map((toDoItem) => {
            return <li> {toDoItem} </li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
