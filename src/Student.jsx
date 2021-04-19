import React from "react";

const Student=(props)=>{
    const{student}=props;

    return(
        <>
             <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">age</th>
     
    </tr>
  </thead>
  <tbody>
 
         <tr>
         <th scope="row">{student.id}</th>
         <td>{student.name}</td>
         <td>{student.age}</td>
        
       </tr>
 
   
  </tbody>
</table>
        </>
    )
}
export default Student;