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
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App


// class App extends React.Component {
//   render() {
//     return <Header />
//   }
// }


