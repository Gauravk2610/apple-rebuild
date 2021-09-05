import React, { useState } from 'react'
import styled from 'styled-components'
import logo from './components/apple_logo.png'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';

function Navbar() {
    const[BurgerStatus, setBurgerStatus] = useState(false)


    return (
        <Nav>
            <Main show={BurgerStatus}>
                <LeftButton>
                    {BurgerStatus?(
                        <IconButton onClick={()=>setBurgerStatus(false)}>
                            <CloseIcon />
                        </IconButton>

                    ):(
                        <IconButton onClick={()=>setBurgerStatus(true)}>
                            <DehazeIcon />
                        </IconButton>
                    )}
                </LeftButton>

                <Logo>
                    <a href="#"><img src={logo} alt="" /></a>
                </Logo>

                <NavMenu>
                    <li><a href="/mac">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Support</a></li>
                </NavMenu>

                <RightButton>
                    <IconButton>
                        <SearchIcon className='Search'/>
                    </IconButton>
                    <IconButton>
                        <LocalMallIcon />
                    </IconButton>
                </RightButton>
            </Main>
            <SubMenu show={BurgerStatus}>
                <SearchContainer>
                    <SearchBar>
                        <SearchIcon />
                        <input type="text" placeholder="Search apple.com"/>
                    </SearchBar>
                </SearchContainer>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Support</a></li>
            </SubMenu>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
//   bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
//   align-items: center;
    z-index: 3;
`;

const Main = styled.div`
    min-height: 60px;
    display: flex;
    flex: 1;
    padding: 0 20px;
    // background-color: #313131;
    background-color: ${props => props.show ?'#000000':'#313131'};
    justify-content: space-between;
    align-items: center;
`

const SubMenu = styled.div`
    // display: none;

    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(-200%);

    @media(max-width: 840px){
        // display: ${props => props.show?'flex':'none'};
        display: flex;
        height: 100vh;
        // flex: 1;
        flex-direction: column;
        background-color: black;
        
        transform: ${props => props.show?'translateY(0)':'translateY(-200%)'};
        transition: transform 0.6s;
        // transition: display 3s;
        .MuiSvgIcon-root {
            color: inherit;
        }
        li {
            margin: 0px 40px;
            margin-top: 10px;
            display: flex;
            color: white;
            padding: 12px 1px;
            border-bottom: 0.3px solid gray;
            transition: ease-in 0.2s;       
            cursor: pointer;

            a {
                color: white;
                font-weight: 600;
            }

        }
    }
`

const SearchContainer = styled.div`
    padding: 16px 0px;
    border-bottom: 0.5px solid white;
`

const SearchBar = styled.div`
    margin: 0px 20px;
    display: flex;
    background-color: #1d1d1f;
    padding: 10px;
    align-items: center;
    border-radius: 10px;
    .MuiSvgIcon-root {
        font-size: 20px;
        color: gray;
    }
    input {
        background-color: inherit;
        border: none;
        outline-width: 0;
        color: white;
        margin-left: 8px;
        font-weight: 600;
        flex: 1;
        font-size: 16px;
    }
`

const LeftButton = styled.div`
    display: none;
    @media(max-width: 840px){
        display: flex;
    }
    .MuiSvgIcon-root {
        color: white;
    }
`

const Logo = styled.a`
    width: 30px;

    img {
        display: block;
        width: 100%;
    }
`

const NavMenu = styled.div`
    aling-items: center;
    display: flex;
    list-style: none;
    a {
        padding: 6px 26px;
        color: #c0c0c0;
        font-weight: 600;
    }

    a:hover {
        color: white;
    }

    
    @media(max-width: 840px){
        display: none;
    }
`

const RightButton = styled.div`

    @media(max-width: 840px){
        .Search{
            display: none;
        }
    }
    .MuiSvgIcon-root {
        color: white;
    }
`