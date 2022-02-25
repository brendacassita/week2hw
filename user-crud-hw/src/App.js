import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react'
import axios from "axios";
import User from "./User";
import NewUser from "./NewUser"

function App() {
  const [users, setUsers] = useState([])
  // const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const getUsers = () => {
    setLoading(true)
    setError(null)
    axios
      .get("https://reqres.in/api/users?delay=1")
      .then((res) => {
        console.log('res:', res)
        // the json we see in browser converted to js object
        console.log('res.data', res.data)
        console.log('res.data.data', res.data.data)
        setUsers(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
         setError('Error!!!!')
         setLoading(false)
      });
  };

  const addUser = (user)=>{
    let newUsers = [user,...users]
    setUsers(newUsers)
  }

  const deleteUser = (id)=>{
    console.log('in app js')
    console.log('deleting item with id:', id)
    // TODO: delete from DB
    // UPDATE UI
    let newUsers =users.filter(u=> u.id !==id)
    setUsers(newUsers)
  }

  const updateUser = (user)=>{
    console.log('is app.js id is:', user)
    //user..i want to update user with user updated
    let updatedUser = users.map(u=>{
      if(u.id === user.id){
        return user
      }
      return u
    })
    setUsers(updatedUser)
}
  const renderUsers = ()=>{
  return users.map((user)=>{
    return <User key={user.id} {...user} updateUser={updateUser} deleteUser={()=> deleteUser(user.id)}/>
  })
}

  
  return (
    <div className="App" style={{border:'5px solid white', margin:'10px', padding:'10px'}}>
      <h1>CRUD USER HW</h1>
      <NewUser addUserCB={addUser}/>
      <button disabled={loading} onClick={getUsers}>{loading ? 'loading':'get users'}</button>
      <div>{renderUsers()}</div>
      <hr />
      

      {error && <p style={{color:'red'}}>ERROR: {error}</p>}
    </div>
  );
}

export default App;

    
