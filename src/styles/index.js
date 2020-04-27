import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

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

  ${(props) => props.notAllowed && `cursor: not-allowed;`}
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

export const Play = styled(Button)`
  background: #56ad89;
  border-radius: 20px;
`

export const Tip = styled.span`
  position: fixed;
  top: calc(50vh + 350px);

  font-family: 'Muli';
  color: #a9a9b1;
  letter-spacing: 0.5px;

  opacity: 0;
  transition: 0.5s;
  transition-delay: 0.2s;

  ${(props) =>
    props.show &&
    `
    transition-delay: 0s;
    opacity: 1;
    top: calc(50vh + 320px);
  `}
`

export const AnimationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #373737;
  display: flex;
  justify-content: center;
  align-items: center;
`
