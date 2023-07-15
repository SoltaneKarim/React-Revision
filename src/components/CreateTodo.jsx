import React, { useState } from "react";
import todoList from "../data/dummyData.js";

const CreateTodo = () => {
  const [title,setTitle] = useState("")
  const [id, setId] = useState(0)
  const confirm = () => {
    var obj = {}
    obj.title = title
    obj.id = todoList[todoList.length-1].id+1
    todoList.push(obj)

  }
  return <div>
    <input type="text" onChange={(e)=>{
        setTitle(e.target.value)
    }}/>
    <button onClick={confirm}>confirm</button>
  </div>;
};

export default CreateTodo;