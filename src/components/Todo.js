import React, { useState } from 'react'

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
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo])
    setText('')
  }

  const toggleTodo = (todo) => {
    if (todo.checked) {
      // uncheck
    } else {
      // check
    }
  }

  return (
    <TodoContainer>
      <TodoInputWrapper>
        <TodoInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) =>
            e.key === 'Enter' && addTodo({ text, checked: false })
          }
        />
        <Button onClick={() => addTodo({ text, checked: false })} />
      </TodoInputWrapper>
      <TodoList>
        {todos.map((todo) => (
          <Todo checked={todo.checked} onClick={() => toggleTodo(todo)}>
            {todo.text}
          </Todo>
        ))}
      </TodoList>
    </TodoContainer>
  )
}

// 📪  Leave your email for an invite
