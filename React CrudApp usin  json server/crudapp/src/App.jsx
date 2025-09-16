
import { Routes, Route, NavLink } from 'react-router'
import './App.css'
import { useEffect, useState } from 'react'
import UserList from './UserList'
import UserAdd from './UserAdd'
import UserEdit from './UserEdit'

function App() {

  return (
    <div>
    <h1>Make Routes and Pages for Add User and User List UI</h1>
    <br /><br />
    

    <ul className='nav-list'>
      <li>
        <NavLink to='/'>User List</NavLink>
      </li>

       <li>
        <NavLink to='/add'>Add User</NavLink>
      </li>

    </ul>
    <br /><br />
    
    <Routes>
      <Route path='/' element={<UserList/>}></Route>
      <Route path='/add' element={<UserAdd/>}></Route>
      <Route path='/edit/:id' element={<UserEdit />}></Route>

    </Routes>
      
        
    </div>
  )
}

export default App



