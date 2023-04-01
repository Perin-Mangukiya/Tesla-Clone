import React from 'react'
import styled from 'styled-components'
import Section from './Section';
function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        content="Order Online for Touchless Delievery"
        bgImg="model-s.jpg"
        leftButtonTxt="Custom Order"
        rightButtonTxt="Existing Inventory"
      />
      <Section 
        title="Model Y"
        content="Order Online for Touchless Delievery"
        bgImg="model-y.jpg"
        leftButtonTxt="Custom Order"
        rightButtonTxt="Existing Inventory"
      />
      <Section 
        title="Model 3"
        content="Order Online for Touchless Delievery"
        bgImg="model-3.jpg"
        leftButtonTxt="Custom Order"
        rightButtonTxt="Existing Inventory"
      />
      <Section 
        title="Model X"
        content="Order Online for Touchless Delievery"
        bgImg="model-x.jpg"
        leftButtonTxt="Custom Order"
        rightButtonTxt="Existing Inventory"
      />
      <Section 
        title="Lowest Cost Solar Panels in America"
        content="Money-back gurarantee"
        bgImg="solar-panel.jpg"
        leftButtonTxt="Order now"
        rightButtonTxt="Learn more"
      />
      <Section 
        title="Accessories"
        content=""
        bgImg="accessories.jpg"
        leftButtonTxt="Shop now"
      />
    </Container>
  )
}

const Container = styled.div`


`

export default Home
