import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");
  const [gender,setGender] = useState("Male");

  function eventHandler(e){
    setFirstName(e.target.value);
    console.log(firstName);
  }

  return (
    <>
      <form action="">
        <label htmlFor="firstname">First Name</label>
        <br />
        <input type="text" name='firstname' id='firstname' value={firstName} onChange={eventHandler}/>
        <br />
        <label htmlFor="lastname">Last Name</label>
        <br />
        <input type="text" name='lastname' id='lastname' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label htmlFor="contact">Contact</label>
        <br />
        <input type="number" name='contact' id='contact' value={contact} onChange={(e) => setContact(e.target.value)}/>
        <br />
        <label htmlFor="gender">Gender</label>

        <label htmlFor="male">Male</label>
        <input type="radio" name='gender' value="male" id="male" checked={gender==='male'} onChange={(e)=> setGender(e.target.value)}/>
        <label htmlFor="female">Female</label>
        <input type="radio" name='gender' value="female" id="female" checked={gender==='female'} onChange={(e)=> setGender(e.target.value)}/>



      </form>
    </>
  )
}

export default App
