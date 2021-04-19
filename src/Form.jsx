import React,{useState} from "react";

const Form=(props)=>{
    const{student}=props;
    const[state,setState]=useState({
        s:student,
    });
    const change=(e)=>{
          const{name,value}=e.target;
          setState({
            ...state,
            s:{
              ...state.s,
              [name]:value
            }

          })
    }
    const submit=()=>{
      props.add(state.s);
    }


    return(
        <>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">id</label>
    <input type="text" class="form-control" name="id" value={state.s.id} onChange={change}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" name="name" value={state.s.name} onChange={change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">age</label>
    <input type="text" class="form-control" name="age" value={state.s.age} onChange={change}/>
  </div>
 
  <button type="button" class="btn btn-primary" onClick={()=> submit()}>Submit</button>
</form>
        </>
    )
}
export default Form;