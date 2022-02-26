import React from "react"
import axios from "axios"
import { useState } from "react"
import BooksList from "../Pages/BooksList"

// createContext HERE this is doing alot
// create Context/Provider - gets & sets data
export const DataContext = React.createContext()

const DataProvider = (props) => {
  const [books,setBooks] = useState([{id: 1, name:'Anne Frank: The Diary of a Young Girl'}])
  const [error,setError] = useState(null)

  // async
  const getBooks = async () => {
    try {
      let res = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
    setBooks(res.data.data)
  } catch (err){
    setError('ERROR')
  }
}
  const addBook = (newBookFromForm) =>{
    let newBooks = [...books, newBookFromForm]
    setBooks(newBooks)
  }

  const updateBook = (updatedBookFromForm) =>{
    let updatedBooks = books.map(b => b.id === updatedBookFromForm.id ? updatedBookFromForm : b)
    setBooks(updatedBooks)
  }

  const deleteBook =(idOfBookClicked) => {
  let filteredBooks = books.filter(book => book.id !== idOfBookClicked)
  setBooks(deleteBook)
  }

  



// creating object that will be 'global state'
const dataProviderThing = {books, addBook, updateBook, deleteBook, getBooks}
  // return provider which will wrap my app
  return(
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  )
}
export default DataProvider