import './App.css';

import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import TodoButton from './components/TodoButton/TodoButton';
import TodoButtonItem from './components/TodoButtonItem/TodoButtonItem';
import TodoButtons from './components/TodoButtons/TodoButtons';
import Logo from './components/Logo/Logo';
import { date, addDateItem } from "./scripts/date";
import { useState } from 'react';

function App() {
  const [ addDate, setAddDate ] = useState(date);


  const addTodoItem = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
    formProps = Object.fromEntries(formData);

    let newDateItem = addDateItem( formProps.title, formProps.data, formProps.description );

    setAddDate(prevState => [...prevState, newDateItem]);

    console.log("1: ", formProps, "2: ", date, "3: ", addDate);
  };

  return (
    <>
      <Header>
          <Logo />
  
          <TodoButton cl='addTodo'>
            + Задача
          </TodoButton>
  
          <TodoButtons>
            {addDate.map(el => (
              <TodoButton cl="todo-button-item">
                <TodoButtonItem
                  title={el.title}
                  data={el.data}
                  description={el.description}
                />
              </TodoButton>
            ))}
          </TodoButtons>
      </Header>
      <Main>
        <form className="todo-form" onSubmit={addTodoItem}>
          <input type="text" name="title" />
          <input type="date" name="date" />
          <input type="text" name="tag" />
          <textarea name="description" cols="30" rows="10"></textarea>
          <TodoButton cl="new-todo">
              Сохранить
          </TodoButton>
        </form>
      </Main>
    </>
  )
}

export default App
