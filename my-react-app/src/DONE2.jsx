import React, { useState } from 'react'

const DONE2 = () => {
  
  const [todo, setTodo] = useState({
      taskName:'',
      taskDesc:'',
      assignee:'',
      assigneeTo:''
  }) 

  const [list, setList] = useState([])

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setTodo({ ...todo, [name]: value})
  }
  
  const AddTask=(e)=>{
    e.preventDefault();
    const {taskName,taskDesc, assignee, assigneeTo} = todo;
    if(taskName.trim() && taskDesc.trim() && assignee.trim() && assigneeTo.trim()){
      const NewTask = {
        id: list.length + 1,
        taskName,
        taskDesc,
        assignee,
        assigneeTo
      }
      setList({...NewTask, todo});
      setTodo({
      taskName:'',
      taskDesc:'',
      assignee:'',
      assigneeTo:''
      }) 
    }
  }


  return (
    <>
    <div>
      <h1>List of Task</h1>
    </div>
    <form onSubmit={AddTask}>
    <div>
      <label>Enter task: </label>
      <input name="taskName" value={todo.taskName} onChange={handleInputChange}></input>
    </div>

    <div>
      <label>Enter Task Description: </label>
      <input name="taskDesc" value={todo.taskDesc} onChange={handleInputChange}></input>
    </div>

    <div>
      <label>Assignee: </label>
      <input name='assignee' value={todo.assignee} onChange={handleInputChange}></input>
    </div>

    <div>
      <label>AssignedTo: </label>
      <input name='assigneeTo' value={todo.assigneeTo} onChange={handleInputChange}></input>
    </div>

    <button> Add</button>
    </form>
    </>
  )
}

export default DONE2
