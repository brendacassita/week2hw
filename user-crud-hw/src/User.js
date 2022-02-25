import { useState } from "react";
import EditUser from "./EditUser";

const User = (props) => {
  const [showForm, setShowForm] = useState(false);
  console.log("props:", props);
  const renderUser = () => {
    return (
      <>
        <h1>
          {props.first_name} {props.last_name}
        </h1>
        <p>Email: {props.email}</p>
        <p>ID: {props.id}</p>
        <p>Avatar: {props.avatar}</p>
        <button onClick={() => props.deleteUser(props.id)}>delete</button>
        <br/>
        <br/>
    </>
      
    );
  };

  return (
    <div style={{ border: "4px solid hotpink", margin: "20px" }}>
      <br/>
        <button onClick={()=>setShowForm(!showForm)}>{showForm ? 'cancel' : 'edit'}</button>
        {showForm ? <EditUser {...props} /> : renderUser()}
      
    </div>
  );
};
export default User;