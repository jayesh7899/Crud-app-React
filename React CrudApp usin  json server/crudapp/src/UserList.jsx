
import { Routes, Route, useNavigate } from 'react-router'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [userData, setUserData]=useState([])
  const [loading, setLoading]=useState(false)
  const navigate=useNavigate();
  const url="http://localhost:8000/users";

  useEffect(()=>{
    setLoading(true)

      getUserData();

    },[])

    console.log(userData)

    const getUserData=async()=>{

   
    let response= await fetch(url);
    response= await response.json();
    console.log(response);
    setUserData(response);
    
    setLoading(false)

  }
  const deleteUser=async(id)=>{
    let response= await fetch(url+"/"+id,{
      method:'delete'
    });
    response= await response.json();
    
    if(response){
      alert("Record Deleted");
      getUserData()
    }
    
  };
  const editUser=(id)=>{
    navigate("/edit/"+id)
  }

  return (
    <div>
    

    <ul className='userlist userlist-head'>
            
            <li>Name</li>
            <li>Age</li>
            <li>Username</li>
            <li>Email</li>
            <li>Action</li>
          
          </ul>
    

     {
      !loading ?

      userData.map((element, index) => {
        return (
          
          <ul key={index} className='userlist'>
            
            <li>{element.name}</li>
            <li>{element.age}</li>
            <li>{element.username}</li>
            <li>{element.email}</li>
            <li>

              <button onClick={()=>deleteUser(element.id)}>Delete</button>
              <button onClick={()=>editUser(element.id)}>Edit</button>
              
            </li>

           
          
          </ul>
        );
      })
      : <h1>Data Loading....</h1>
      }
      
    
        
    </div>
  )
}

export default App



