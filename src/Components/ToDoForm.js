import React ,{useState}from 'react'

const ToDoForm = ({addTask}) => {
    const [userInput, setuserInput] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTask(userInput);
        setuserInput("");
       

    }
    const handleChange=(e)=>{
        console.log(e.target.value)
        setuserInput(e.target.value);
        

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userInput} onChange={handleChange} placeholder="enter a task..."/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ToDoForm
