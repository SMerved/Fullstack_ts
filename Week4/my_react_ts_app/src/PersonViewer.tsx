import { useEffect, useState } from "react"
import { person } from "./App"

const PersonViewer = () => {
    const [people, setPeople] = useState<person[]>([])
    
    useEffect(()=>{
      fetch("http://localhost:3008/person")
      .then((res)=> res.json())
      .then((person) => setPeople(person))
    })
    return (
      <div>
        <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
    {people.map((person:person)=>
    <tr>
      <td>{person.name}</td>
      <td>{person.age}</td>
      <td>{person.city}</td>
    </tr>
    )}
  </table>
      </div>
    )
  }
  export default PersonViewer