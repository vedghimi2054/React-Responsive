import React, { useState } from 'react'
import './App.css';
import Header from './Components/Header';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';
import data from './data.json'
function App() {
  const [toDoList, settoDoList] = useState(data);

  const handleToggle=(id)=>{
    let mapped=toDoList.map(task=>{
      return task.id===Number(id)?{...task,complete:!task.complete}:{...task};
    })
    if(mapped){
      console.log("success to strike")
    }
    settoDoList(mapped)
  }
  const handleFilter=()=>{
    let filtered= toDoList.filter(task=>{
      return !task.complete;
    })
    if(filtered)
    settoDoList(filtered)
  }
  const addTask=(userInput)=>{
    let copy=[...toDoList];
    console.log("copy",copy)
    // copy=[...copy,{id:toDoList.length+1,task:userInput,complete:false}]
    copy.push({id:toDoList.length+1,task:userInput,complete:false})
    settoDoList(copy)
  }
  return (
    <>
      <div className="App">
        <Header />
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
        <ToDoForm addTask={addTask}/>
      </div>
    </>
  );
}
export default App;
