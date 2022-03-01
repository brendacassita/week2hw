import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../Providers/DataProvider"

const BooksList = () => {
  const bookData = useContext(DataContext)
  return (
    <div className="App" style={{border:'5px solid hotpink', margin:'10px', padding:'10px'}}>
      <h1>Books List: </h1>
      <Link to='/newbooks'>New Books</Link>
      
      {bookData.books.map(b=>{
        return(
          <div key={b.id}>
            <h1>{b.bookName}</h1>
            </div>
          
        )
      })}

      {/* <button onClick={()=>bookData.addBook({id:Math.random(), name: 'ADDING test book'})}>add book</button>
      <button onClick={()=>bookData.updateBook({id:1, name: 'UPDATED test book name'})}>update book 1</button> */}
      <button onClick={()=>bookData.deleteBook(1)}>delete book</button>
      <button onClick={()=>bookData.getBooks(1)}>get books</button>
      {JSON.stringify(bookData)}
    </div>
  )
}

export default BooksList