import React, { useState, useRef } from 'react'

import {
  TodoContainer,
  TodoInputWrapper,
  TodoInput,
  TodoList,
  Todo,
  Button
} from 'styles/Todo'

// Todo = {
//   id: id,
//   text: string,
//   checked: boolean
// }

export default () => {
  const inputEl = useRef(null)
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo])
    setText('')
  }

  const toggleTodo = (todo) => {
    if (todo.checked) {
      setTodos(
        todos.map((i) =>
          i.text === todo.text ? { ...todo, checked: false } : i
        )
      )
    } else {
      setTodos(
        todos.map((i) =>
          i.text === todo.text ? { ...todo, checked: true } : i
        )
      )
    }
  }

  return (
    <TodoContainer>
      <TodoInputWrapper>
        <TodoInput
          id="input"
          ref={inputEl}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) =>
            e.key === 'Enter' && addTodo({ text, checked: false })
          }
        />
        <Button
          onClick={() =>
            addTodo({ text: inputEl.current.value, checked: false })
          }
        >
          Add
        </Button>
      </TodoInputWrapper>
      <TodoList>
        {todos.map((todo, index) => (
          <Todo
            key={`${index}-${todo.text}`}
            checked={todo.checked}
            onClick={() => toggleTodo(todo)}
          >
            {todo.text}
          </Todo>
        ))}
      </TodoList>
    </TodoContainer>
  )
}

// 📪  Leave your email for an invite
