import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import './assets/styles.css'



const MainTask = () => {
    const [formData , setFormData] =useState({
      taskName:'',
      taskDescription:'',
      assignee:'',
      assignedTo:'',
    })
    
    const [list, setList] = useState([]);

    const handleInputChange = (e)=>{
      const {name, value} = e.target;
      setFormData({...formData, [name]:value});
    };

    const handleAddTask = (e)=>{
      e.preventDefault();
      const {taskName, taskDescription, assignee, assignedTo} = formData;
      if(taskName.trim() && taskDescription.trim() && assignee.trim() && assignedTo.trim()){
          const newTask = {
            id: list.length + 1,
            taskName,
            taskDescription,
            assignee,
            assignedTo,
          };

          setList([...list, newTask]);
          setFormData({
            taskName:'',
            taskDescription:'',
            assignee:'',
            assignedTo:'',
          })
      }
    };

  return (
    <>
    <br/><br/><br/>
    <div className="Container">
    <div className="Row">
    <div className='Col md={6}'>
      <h2>Task Dashboard</h2>
      <form onSubmit={handleAddTask}>
        <div>
          <label htmlFor="taskName" className="form-label">Task Name:</label>
          <input
            name="taskName"
            value={formData.taskName}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="taskName"
          />
        </div>
        <div><br/>
          <label htmlFor="taskDescription" className="form-label">Task Description:</label>
          <textarea
            name="taskDescription"
            value={formData.taskDescription}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="taskDescription"
          />
        </div>
        <div><br/>
          <label htmlFor="assignee" className="form-label">Assignee:</label>
          <input
            name="assignee"
            value={formData.assignee}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="assignee"
          />
        </div><br/>
        <div className="row">
          <div className="col">
            <label htmlFor="assignedTo" className="form-label">Assigned To:</label>
            <input
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="assignedTo"
            />
          </div>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">Add Task</button>
      </form>
    </div>
    </div>
    <div className="col-md-6" style={{ marginLeft: '5%' }}>
            <h3>Task List</h3>
            <ul style={{ listStyleType: 'none', paddingRight: '15%' }}>
              {list.map(task => (
                <li key={task.id} style={{ marginBottom: '10px' }}>
                  <strong>Task:</strong> {task.taskName}, 
                  <span style={{ display: 'block', marginTop: '5px' }}>
                    <strong>Description:</strong> {task.taskDescription}
                  </span>
                  <span style={{ display: 'block', marginTop: '2px' }}>
                    <strong>Assignee:</strong> {task.assignee}
                  </span>
                  <span style={{ display: 'block', marginTop: '2px' }}>
                    <strong>Assigned To:</strong> {task.assignedTo}
                  </span>
                </li>
            ))}
          </ul>
        </div>
        </div>
   
  </>
  )
}

export default MainTask

