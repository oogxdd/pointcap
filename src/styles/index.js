import styled from 'styled-components'

export const RecordButton = styled.button`
  width: 100px;
  height: 100px;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;

  background: hsl(10, 60%, 50%);
  border-radius: 50px;
  transition: background-color 0.05s ease-in, border-radius 0.2s ease-in-out;

  ${(props) =>
    props.recording &&
    `
    background: hsl(210, 49%, 47%);
    border-radius: 20px;
  `}
`

const Button = styled.button`
  width: 100px;
  height: 100px;
  outline: none;
  border: none;
  cursor: pointer;
`

export const Record = styled(Button)`
  background: #cc4c33;
  border-radius: 100%;
`

export const Stop = styled(Button)`
  background: #3e78b3;
  border-radius: 12px;
`

export const Play = styled(Button)``
