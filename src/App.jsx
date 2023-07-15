import React, {useState} from "react";
import CreateTodo from "./components/CreateTodo.jsx";
import ListTodos from "./components/ListTodos.jsx";

const App = () => {
  const [View, setView] = useState("ListTodos")
  const changeView = (view) => {
    setView(view)
  }
  const renderView = () => {
    if(View === "ListTodos") return <ListTodos />
    else if(View === "CreateTodo") return <CreateTodo /> 
  }
  return <div className="todo-list main">
       <nav className=" nav">
      <div
        onClick={() => {
          changeView("CreateTodo");
        }}
      >
        Create Todo
      </div>
      <div
        onClick={() => changeView("ListTodos")}
      >
        List Todos 
      </div>
      <div></div>
    </nav>
    {renderView()}
  </div>;
};

export default App;
