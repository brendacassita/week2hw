import { useState } from "react"

const NewUser = (props)=>{
  const[email, setEmail] = useState('')
  const[first_name, set_first_name] = useState('')
  const[last_name, set_last_name] = useState('')
  const[foo, bar] = useState('')
  const handleSubmit = (e) =>{
    // prevent refresh
    e.preventDefault()
    console.log('email input value', email)
    console.log('first name value', foo)

    // if key and value are same you can short hand ex: email:email =>email
    let newUser ={id:Math.random(), first_name, last_name, avatar:foo, email}
    console.log(newUser)

    // add to users state
    props.addUserCB(newUser)
    setEmail('')
    set_first_name('')
    set_last_name('')
    bar('')
  }


  return(
    <div style={{border:"4px solid hotpink", margin:'40px', padding: '20px'}}>
      <h1>New User Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Email: </p>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <p>First Name: </p>
        <input value={first_name} onChange={(e)=>{set_first_name(e.target.value)}} />
        <p>Last Name: </p>
        <input value={last_name} onChange={(e)=>{set_last_name(e.target.value)}} />
        <p>Avatar: </p>
        <input value={foo} onChange={(e)=>{bar(e.target.value)}} />
        <br/>
        <br/>
        <button>Add User</button>
        <br/>
      </form>
    </div>
  )
}

export default NewUser