import { useState } from "react"

const ShowsList = (props) =>{
  const [watch, setWatch] = useState(props.initialShowsToWatch || [])
  
  // READ
  const renderToWatch=()=>{
    return watch.map((x)=>{
      return (
        <div key={x.id} style={{textDecoration: x.seen ? 'line-through': ''}}>
        <p>{x.watch}</p>
        </div>
      )
    })
  }
  
  
  return (
    <div>
      <h1>{props.name}</h1>

      <div>{renderToWatch()}</div>
     
      </div>
  )
}

export default ShowsList