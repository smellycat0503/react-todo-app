import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");

  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo, "투두");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChangeInput} placeholder="뭐라도적어봐"></input>
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
