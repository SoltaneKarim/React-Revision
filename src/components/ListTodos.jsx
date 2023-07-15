import React, {useState} from "react";
import todoList from "../data/dummyData.js";
import ListTodo from "./ListTodo.jsx";


const ListTodos = () => {
  const [list, setList] = useState(todoList)
  const remove = (id) => {
   setList(list.filter(todo => todo.id !== id))
  }
  
  return <div>
    {list.map((el,index) => (
      <ListTodo key={index} title={el.title} id={el.id} delete={remove}/>
    ))}
  </div>;
};

export default ListTodos;