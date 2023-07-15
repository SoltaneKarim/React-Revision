import React from "react";

const ListTodo = (props) => {
    const handleDelete = () => {
        props.delete(props.id)
    }
    
  return <div>
    <span>title: {props.title} <br/> id: {props.id}</span> <br/>
    <button onClick={handleDelete}>delete</button>
  </div>;
};

export default ListTodo;