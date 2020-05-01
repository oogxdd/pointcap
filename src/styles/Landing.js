import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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
