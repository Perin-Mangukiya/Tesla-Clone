import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, content, bgImg, leftButtonTxt, rightButtonTxt }) {
  return (
    <Wrap bImg={bgImg}>
      <Fade bottom>
        <ItemText>
          <h1>
              {title}
          </h1>
          <p>
              {content}
          </p>
        </ItemText>
      </Fade>
      {/* Another group is created because justify-content is also giving space between arrow and buttons so now it will consider buttons and arrow as one component and heading as other and space will given between them */}
      <Buttons> 
      <Fade bottom>
        <ButtonGroup>
            <LeftButton>
                {leftButtonTxt}
            </LeftButton>
            {rightButtonTxt && 
              <RightButton>
                {rightButtonTxt}
              </RightButton>
            }
            
          </ButtonGroup>
      </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div `
    ${'' /* View Width (vw) and View Height (vh) */}
    width: 100vw; 
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    ${'' /* background-image: url('/images/model-s.jpg'); */}
    // setting up buttons at right position
    display: flex; // to push buttons away from h1
    flex-direction: column; // It sends buttons from top to bottom
    // because of changing the direction of flex to column justify-content and align-content functionality will be reversed
    justify-content: space-between;  // Vertical alignment
    align-items: center; // Horizontal alignment
    background-image: ${props => `url("/images/${props.bImg}")`}

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
  display: flex; // stacks from left to right
  margin-bottom: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center; // Horizontal centering
    align-items: center; // Vertical centering
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)` // It will Inherit LeftButton css
  background: white;
  opacity: 0.65;
  color: black;
`
const DownArrow = styled.img`
  height: 40px; 
  animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``;