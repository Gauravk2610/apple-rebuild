import React, { useState } from 'react'
import styled from 'styled-components'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import logo from './components/apple_logo.png'

function Header() {

    const[BurgerStatus, setBurgerStatus] = useState(false)
    console.log(BurgerStatus)
    return (
        <MainContainer show={BurgerStatus}>      
            <Container show={BurgerStatus}>
            
                <ThreeLines>

                    {BurgerStatus?(
                        <IconButton onClick={()=>setBurgerStatus(false)}>
                            <CloseIcon />
                        </IconButton>

                    ):(
                        <IconButton onClick={()=>setBurgerStatus(true)}>
                            <DehazeIcon />
                        </IconButton>
                    )}

                    
                </ThreeLines>
                
                <AppleIcon>
                    <a href="#"><img src={logo} alt="" /></a>
                </AppleIcon>
                
                <Menu>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Support</a></li>
                </Menu>

                <RightButton>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <LocalMallIcon />
                    </IconButton>
                </RightButton>


            </Container>
            <BurgerNav show={BurgerStatus}>
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
            </BurgerNav>
        </MainContainer>
    )
}

export default Header

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    // height: 100%;
    color: white;
    z-index: ${props => props.show ? '5':'3'};
`

const Container = styled.div`
    display: flex;
    min-height: 60px;
    background-color: ${props => props.show ?'#000000':'#313131'};
    // background-color: ${props => props.show ?'#000000':'#000000'};
    padding: 0px 16px;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
    // flex: 1;
    img {
        width: 30px;
    }

`

const ThreeLines = styled.div`
    .MuiSvgIcon-root {
        color: white;
    }
    @media(min-width: 800px){
        display: none;
    }    
`

const AppleIcon = styled.div`
    
    @media(max-width: 800px){
        flex: 1;
        display: flex;
        justify-content: center;
    }
`

const Menu = styled.div`
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    flex:1;
    a {
        padding: 6px 26px;
        color: #c0c0c0;
        font-weight: 600;
    }

    @media(max-width: 800px){
        display: none;
    }
`

const RightButton = styled.div`
    display: flex;
    flex: 0.1;
    margin-left: auto;
    justify-content: space-evenly;
    .MuiSvgIcon-root {
        color: white;
    }
`

const BurgerNav = styled.div`
    display: none;
    transform: translateY(-100%);
    z-index: 5;
    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        list-style: none;
        text-align: start;
        overflow: hidden;
        // z-index: -1;
        background-color: ${props => props.show ? '#000':'#313131'};
        transform: ${props => props.show ? 'translateY(0)':'translateY(-200%)'};
        transition: transform 0.4s ease-out;
        li {
            margin: 0px 40px;
            margin-top: 10px;
            display: flex;
            padding: 12px 1px;
            border-bottom: 0.3px solid gray;
            transition: ease-in 0.2s;       
            cursor: pointer;

            a {
                font-weight: 600;
            }

        }
    }  
`

const SearchContainer = styled.div`
    padding-bottom: 16px;
    border-bottom: 0.5px solid white;
`

const SearchBar = styled.div`
    margin: 0px 20px;
    display: flex;
    background-color: #1d1d1f;
    padding: 10px;
    border-radius: 10px;

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