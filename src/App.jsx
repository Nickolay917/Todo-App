import './App.css';

import TodoButtonItem from './components/TodoButtonItem/TodoButtonItem';
import TodoButtons from './components/TodoButtons/TodoButtons';
import TodoButton from './components/TodoButton/TodoButton';
import TodoForm from './components/TodoForm/TodoForm';
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import Logo from './components/Logo/Logo';
import { data } from "./scripts/data";
import { useState } from 'react';

function App() {
  const [ addData, setAddData ] = useState(data);

  const addItem = item => {
    setAddData(prevData => [...prevData, {
      id: prevData.length > 0 ? Math.max(...prevData.map(i => i.id)) + 1 : 1,
      title: item.title,
      date: new Date(item.date),
      description: item.description,
    }]);
  };

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      <Header>
          <Logo />
  
          <TodoButton cl='addTodo'>
            + Задача
          </TodoButton>
  
          <TodoButtons>
            {addData.length > 0 ? addData.sort(sortItems).map(el => (
              <TodoButton
                cl="todo-button-item"
                key={el.id}
              >
                <TodoButtonItem
                  title={el.title}
                  date={el.date}
                  description={el.description}
                />
              </TodoButton>
            )) : <>Задач нет. Создайте новую ↑↑</>}
          </TodoButtons>
      </Header>
      <Main>
        <TodoForm onSubmit={addItem} />
      </Main>
    </>
  );
}

export default App;
