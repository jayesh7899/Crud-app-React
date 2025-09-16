import React, { useEffect , useState} from 'react'
import { useNavigate, useParams } from 'react-router'

function UserEdit() {

    const {id}=useParams()
    
        const [name, setName]=useState('')
        const [age, setAge]=useState('')
        const [username, setUsername]=useState('')
        const [email, setEmail]=useState('')

        const navigate=useNavigate();

        

    useEffect(()=>{
        setUserData()
    },[])

    const setUserData=async()=>{
        const url="http://localhost:8000/users/"+id;
        let response= await fetch(url);
        response= await response.json();
        console.log(response);
        setName(response.name);
        setAge(response.age);
        setUsername(response.username);
        setEmail(response.email);


    }

    const updateUserData=async()=>{

        const url1="http://localhost:8000/users/"+id;

        let response= await fetch(url1,{
            method:'put',
            body:JSON.stringify({name, age, username, email})
        });

        response=await response.json();

        if(response){
            alert("User Data Updated");
            navigate("/")
            
        }




    }


  return (
    <div style={{textAlign:'center'}}>
        <h1>Edit User Details</h1>

        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter name'/><br /><br />

        <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder='Enter age'/><br /><br />

        <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)} placeholder='Enter username'/><br /><br />

        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter email'/><br /><br />

        <button onClick={updateUserData}>Update user</button>
      
    </div>
  )
}

export default UserEdit
