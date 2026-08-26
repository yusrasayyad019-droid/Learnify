import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar' 
import Footer from './Components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Get from './pages/Get'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Cards from './pages/Cards'
import View from'./pages/View'
import CourseDetail from './pages/CourseDetail'
import ViewCourse from './pages/ViewCourse'
import Coursecarddetail from './pages/Coursecarddetail'

const App = () => {
  return (
    <div className='h-screen bg-amber-50 text-black '>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/get' element={<Get/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/home/Cards' element={<Cards/>}/>
        <Route path='/View' element={<View/>}/>
        <Route path='/ViewCourse' element={<ViewCourse/>}/>
        <Route path='/Courses/:id' element={<CourseDetail/>}/>
        <Route path='/Coursecarddetail' element={<Coursecarddetail/>}/>
<Route path='*'  element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
