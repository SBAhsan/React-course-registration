import './App.css'
import Blogs from './components/Blogs/Blogs'
import CourseName from './components/SelectedCourse/SelectedCourse'
import Header from './components/Header/Header'
import SelectedCourse from './components/SelectedCourse/SelectedCourse'

function App() {



  return (
    <>

      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <SelectedCourse></SelectedCourse>
      </div>

    </>
  )
}

export default App
