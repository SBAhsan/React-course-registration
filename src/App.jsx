import './App.css'
import Blogs from './components/Blogs/Blogs'
import CourseName from './components/SelectedCourse/SelectedCourse'
import Header from './components/Header/Header'
import { useState } from 'react'
import SelectedCourses from './components/SelectedCourses/SelectedCourses'

function App() {

  const[selectedCourse, setSelectedCourse] = useState([]);

  const handleAddSelectedCourse = blog => {
    console.log('Course will be added soon.')
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddSelectedCourse={handleAddSelectedCourse}></Blogs>
        <SelectedCourses></SelectedCourses>
      </div>

    </>
  )
}

export default App
