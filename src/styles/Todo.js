import styled from 'styled-components'

export const TodoContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TodoInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const TodoInput = styled.input``
export const TodoList = styled.ul``
export const Todo = styled.li`
  ${(props) => props.checked && 'text-decoration: line-through;'}
`
export const Button = styled.button``
