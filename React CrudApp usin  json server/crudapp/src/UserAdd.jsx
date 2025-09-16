import { useState } from "react"
import { useNavigate } from 'react-router'

function UserAdd(){

    const [name, setName]=useState('')
    const [age, setAge]=useState('')
    const [username, setUsername]=useState('')
    const [email, setEmail]=useState('')
    const navigate=useNavigate()    

    const createuser=async()=>{
        console.log(name, age,username,email)
        setName(name)
        setAge(age)
        setUsername(username)
        setEmail(email)
    

        const url="http://localhost:8000/users";
        let response= await fetch(url,{
            method:'Post',
            body:JSON.stringify({name,age,username, email})
        });

        response= await response.json();
        if(response){
            alert("New User added...")
            navigate("/")
            


        }
        

    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Add New User</h1>

            <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter your name"/><br /><br />

           <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="Enter your age"/><br /><br />
            <input type="text" onChange={(event)=>setUsername(event.target.value)} placeholder="Enter your username"/><br /><br />
            <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your email"/><br /><br />

            <button onClick={createuser}>Add User</button>
        </div>
    )
}
export default UserAdd