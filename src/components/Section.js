import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
       <Fade bottom>
       <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>   
      </ItemText>
        </Fade>
     
      <ActionGroup>
        <Fade bottom>
        <ButtonGroup>
            <LeftButton>{props.leftBtnText}</LeftButton>
            {props.rightBtnText && <RightButton>{props.rightBtnText}</RightButton>}
            
        </ButtonGroup>
        </Fade>
        <DownArrow src='/images/down-arrow.svg'/>
      </ActionGroup>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background:orange;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size:cover;
    background-position:center;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    background-repeat: no-repeat
`

const ItemText=styled.div`
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 226px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 50px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
    font-weight:600;
`
const RightButton = styled(LeftButton)`
    background-color:white;
    opacity: 0.65;
    color: #000;
`
const DownArrow = styled.img`
margin-top: 20px;
height:40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`

const ActionGroup = styled.div` 
text-align:center;
`
