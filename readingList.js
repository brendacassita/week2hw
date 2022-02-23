// CRUD Create Read(display) Update Destroy
// readingList = [{id: number, name:string, read:boolean}]

const originalReadingList = [
  {id:1, name: 'Anne Frank: The Diary of a Young Girl', read: false},
  {id:2, name: 'Pride and Prejudice', read: true},
]


// CREATE: add a book to reading list
// DO NOT mutate reading list
const addedToReadingList = {id:3, name: 'To Kill a Mockingbird', read: false}

let newReadingList = [...originalReadingList, addedToReadingList]
// console.log('original reading list:', readingList)
// console.log('new reading list', newReadingList)


// READ: SKIP (NEED REACT)


// UPDATE: 
// a new updated list (toggle read)

let updatedReadingList = originalReadingList.map((list)=>{
  if(list.id === 2){
    return{...list, read: !list.read}
  }
  return list
})
console.log('original reading list:', originalReadingList)
console.log('updated reading list', updatedReadingList)
