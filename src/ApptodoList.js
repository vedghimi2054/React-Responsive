
import React,{useState,useEffect}from 'react'
import Todolist from './CrudtodoList/Todolist'
const ApptodoList = () => {
    const [userInput,setuserInput]=useState('');

    const [items,setItems]=useState([]);
   const LOCAL_STORAGE_KEY="items";
    //show list of items
    const listOfItems=()=>{
        setItems((oldItems)=>{
            return [...oldItems,userInput];
        });
        setuserInput("");

    }
      // //get tasks from localstorage
      useEffect(()=>{
        const retrieveTask=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(retrieveTask) setItems(retrieveTask);
    },[])
    // set task into localstorage
    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(items))
    },[items]);
  
    //validate user inputs
    const validate=()=>{
        if(userInput===""){
            alert("Please fill the task");
        }
        else{
            listOfItems();
        }
    }
    //set the userInput and uodate the state
    const itemEvent=(e)=>{
        e.preventDefault();
        console.log("come value",e.target.value)
        setuserInput(e.target.value);
    }
    //delete the task/items
    const deleteItems=(id)=>{
        console.log("deleted");
        // given id is match with the oldItems id , then deleted this items
        // and return the remaining items which doesnot match index!==id
        setItems((oldItems)=>{
            return oldItems.filter((arrEmelent,index)=>{
                return index!==id;
            })
        })
    }
    return (
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder="Add a items" value={userInput} onChange={itemEvent}/>
                <button onClick={listOfItems,validate}>+</button>
                <ol>
                    {items.map((itemval,index)=>{
                        return <Todolist id={index} key={index} text={itemval} onSelect={deleteItems}/>;
                       
                    })}
                </ol>
            </div>
            
        </div>
    )
}

export default ApptodoList
