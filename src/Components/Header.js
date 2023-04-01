import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {
  const cars = ["Model S", "Model Y", "Model 3", "Model X"];
  const [closeState, setCloseState] = useState(false);

  function handleClick() {
    console.log(closeState);
    setCloseState(!closeState);

  }

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg"></img>
      </a>
      <Menu>
        {cars.map((car, index) => (<a key={index} href="#">{car}</a>))};
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={handleClick}/>
      </RightMenu>
      <BurgerNav show={closeState}>
        <CloseWrapper>
          <CustomClose onClick={handleClick}/>
        </CloseWrapper>
        
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
      </BurgerNav>
    </Container>
    
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // It will make container of full width
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; // making it less so that rightmenu bar can show up above all
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  flex: 1; // This will become of full width

  a {
    font-size: 17px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    text-decoration: none;
  }

  @media(max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
  a {
    font-size: 17px;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    text-decoration: none;
  }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 100; // to show above all when it opens
  diplay: flex;
  text-align: start;
  padding: 20px;

   ${'' /* to hide and show right menu bar on click */}
  transform: ${props => props.show? "translateX(0)":"translate(100%)"};
  transition: transform, 0.2s; 
  li {
    padding: 10px 0;
    list-style: none;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{ 
      text-decoration: none;
      font-weight: 600;
      font-size: 17px;
    }
  }

  
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`