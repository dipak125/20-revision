import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
const Students=(props)=>{
    const {students}=props;

    return(
        <>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">age</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {students.map(student=>
         <tr>
         <th scope="row">{student.id}</th>
         <td>{student.name}</td>
         <td>{student.age}</td>
         <td>
             <Link to={`/student/${student.id}`}>view</Link><br/>
             <Link to={`/edit/${student.id}`}>edit</Link>
         </td>
       </tr>
    )}
   
  </tbody>
</table>
        </>
    )
}
export default Students;