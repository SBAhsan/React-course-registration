import './App.css'
import Blogs from './components/Blogs/Blogs'
import CourseName from './components/CourseName/CourseName'
import Header from './components/Header/Header'

function App() {



  return (
    <>

      <Header></Header>
      <div className='md:flex justify-between'>
        <Blogs></Blogs>
        <CourseName></CourseName>
      </div>

    </>
  )
}

export default App
