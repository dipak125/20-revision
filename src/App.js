
import React,{useState} from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import Students from "./Students";
import Student from "./Student";
import Form from "./Form";
import Nav from "./Nav";
import Home from "./Home";

const App=()=>{
  const[state,setState]=useState({
    students: [
      {
        id:1,
        name: "dipak",
        age: 24
      },
      {
        id:2,
        name: "sahil",
        age: 23,
      },
      {
        id: 3,
        name: "mrinal",
        age: 24,
      },
      {
        id:4,
        name: "dipankar",
        age: 25,
      }
    ]
  });
  const add=(student)=>{
    const s=state.students.filter(s=>s.id!==student.id);
    setState({
      ...state,
      students:[
        ...s,
        student
      ]
    })
  }
  return(
    <>
      <BrowserRouter>
      <Nav/>
        <Route exact path="/" component={()=> <Home/>}/>
        <Route path="/students" component={()=> <Students students={state.students}/>}/>
        <Route path="/student/:id"  component={(props)=> <Student   student={state.students.find(student=>student.id==props.match.params.id)}/>}/>
        <Route exact path="/edit/:id" component={(props)=> <Form add={add} student={state.students.find(student=>student.id==props.match.params.id)}/>}/>
        <Route exact path="/edit" component={()=> <Form add={add} student={
          {
            id:"",
            name:"",
            age:""
          }
        }/>}/>
      </BrowserRouter>
    </>
  )
}
export default App;