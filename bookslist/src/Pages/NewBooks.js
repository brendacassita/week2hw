import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import DataProvider, { DataContext } from "../Providers/DataProvider"


const NewBooks = () =>{
  const navigate = useNavigate()
  const data = useContext(DataContext)
  let[bookName, setBookName] = useState('')
  let[authorName, setAuthorName] = useState('')
  let[id, setId] = useState('')


  const handleSubmit = (e) =>{
    e.preventDefault()
    let newBook ={id,bookName, authorName}
    console.log(newBook)
    data.addBook(newBook)
    navigate('/bookslist')
  }

  return(
    <div className="App" style={{border:'3px solid hotpink', margin:'10px', padding:'10px'}}>
      <h1>Add New Books: </h1>
      <Link to='/bookslist'>Books List</Link>
      <form onSubmit={handleSubmit}>
        <p>Book Name:</p>
        <input value={bookName} onChange={(e)=>setBookName(e.target.value)}/>
        <p>Author Name:</p>
          <input value={authorName} onChange={(e)=>setAuthorName(e.target.value)}/>
          <p>Book ID: </p>
          <input value={id} onChange={(e)=>setId(e.target.value)}/>
          <button>Add</button>
      </form>
    </div>
  )
}

export default NewBooks