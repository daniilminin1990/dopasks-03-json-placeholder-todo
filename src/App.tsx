import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './components/Input';
import { Button } from './components/Button';

type TodosType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

function App() {


  const [todos, setTodos] = useState<TodosType[]>([]);
  console.log(todos)

  const fetchFoo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setTodos(json))
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, []);

  const onClickHandler = () => {
    fetchFoo()
  }

  const hideHandler = () => {
    setTodos([])
  }

  // const [title, setTitle] = useState('')
  const title = useRef<HTMLInputElement | null>(null)

  const addTask = () => {
    if (title.current) {
      const newTask = {
        userId: 666,
        id: todos.length + 1,
        title: title.current.value,
        completed: true
      }
      setTodos([newTask, ...todos])
      title.current.value = ''
    }
    // setTitle('')
  }

  return (
    <div className="App">
      <div>
        <div>
          <Button name={'Reveal'} onClick={onClickHandler} />
          <Button name={'Hide me'} onClick={hideHandler} />
        </div>
        <div>
          {/* <Input value={'ddd'} /> */}
          <Input title={title}
          // setTitle={setTitle}
          />
          <Button name={'Send'} onClick={addTask} />
        </div>
      </div>
      <ul>
        {todos.map((el) => {
          return (
            <li key={el.id}>
              <span>{el.id} - </span>
              <span>{el.title}</span>
              <input type="checkbox" checked={el.completed} />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
