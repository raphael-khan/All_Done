import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Dental Appointment',
        day: 'April 22nd at 4:15pm',
        reminder: true,
    },
    {
        id:2,
        text:'Workout with Jim',
        day: 'April 24th at 11:00am',
        reminder: false,
    },
    {
        id:3,
        text:'Complete & submit reporting',
        day:'May 1st at 8:00am',
        reminder: true,
    }
])
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  } 
  // Toggle Reminder 
  
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: 
        !task.reminder } : task
        )
      )
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        <p className='task'>Great Work. You're ALL DONE !'</p>
      )
      }
    </div>
  )
}


export default App


// class App extends React.Component {
//   render() {
//     return <Header />
//   }
// }


