// import './assets/styles.css';
// import { useState } from 'react';
// import React from 'react';

// const MainTask = () => {

//   const [formData, setFormData] = useState({
//     taskName: '',
//     taskDescription: '',
//     assignee: '',
//     assignedTo: '',
//   });
  
//   const [list, setList] = useState([]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddTask = (e) => {
//     e.preventDefault();
//     const { taskName, taskDescription, assignee, assignedTo } = formData;
//     if (taskName.trim() && taskDescription.trim() && assignee.trim() && assignedTo.trim()) {
//       const newTask = {
//         id: list.length + 1,
//         taskName,
//         taskDescription,
//         assignee,
//         assignedTo,
//       };

//       setList([...list, newTask]);
//       setFormData({
//         taskName: '',
//         taskDescription: '',
//         assignee: '',
//         assignedTo: '',
//       });
//     }
//   };

//   return (
//     <>
//       <div className='Container'>
//         <div className="Row">
//           <h2>Task Dashboard</h2>
//           <form onSubmit={handleAddTask}>
//             <div>
//               <label htmlFor="taskName" className="form-label">Task Name:</label>
//               <input
//                 name="taskName"
//                 value={formData.taskName}
//                 onChange={handleInputChange}
//                 type="text"
//                 className="form-control"
//                 id="taskName"
//               />
//             </div>
//             <div><br/>
//               <label htmlFor="taskDescription" className="form-label">Task Description:</label>
//               <input
//                 name="taskDescription"
//                 value={formData.taskDescription}
//                 onChange={handleInputChange}
//                 type="text"
//                 className="form-control"
//                 id="taskDescription"
//               />
//             </div>
//             <div><br/>
//               <label htmlFor="assignee" className="form-label">Assignee:</label>
//               <input
//                 name="assignee"
//                 value={formData.assignee}
//                 onChange={handleInputChange}
//                 type="text"
//                 className="form-control"
//                 id="assignee"
//               />
//             </div><br/>
//             <div className="row">
//               <div className="col">
//                 <label htmlFor="assignedTo" className="form-label">Assigned To:</label>
//                 <input
//                   name="assignedTo"
//                   value={formData.assignedTo}
//                   onChange={handleInputChange}
//                   type="text"
//                   className="form-control"
//                   id="assignedTo"
//                 />
//               </div>
//             </div>
//             <br />
//             <button type="submit" className="btn btn-primary">Add Task</button>
//           </form>
//           <div>
//             <h3>Task List</h3>
//             <ul>
//               {list.map(task => (
//                 <li key={task.id}>
//                   {`Task: ${task.taskName}, Description: ${task.taskDescription}, Assignee: ${task.assignee}, Assigned To: ${task.assignedTo}`}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainTask;
