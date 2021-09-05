import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

function Intro() {
    return (
        <MainContainer>
            <Container>
                <Introtext>
                    <Text>
                        <Typewriter 
                        options={{
                            strings: ['Think Different'],
                            autoStart: true,
                            loop: true,
                            }}
                        />
                    </Text>
                </Introtext>

                <Arrow>
                    <DownArrow src="images/down-arrow.svg" alt='down arrow'></DownArrow>
                </Arrow>
            </Container>
        </MainContainer>   
    )
}

export default Intro

const MainContainer = styled.div`
    // display: flex;
    clip-path: circle(180vh at 50% -81vh);
    
    @media(max-width: 810px) {
        clip-path: circle(162vh at 0% -80vh);
    
    }
    background-color: black;
    color: black;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    // width: 100vw;
    background-image: url('/images/apple.webp');
    background-attachment: fixed;
    background-position: center;
    // background-position: 0px 14px;
    background-repeat: no-repeat;
    background-size: contain; 
    background-color: #000000eb;

    @media(max-width: 1000px){
        background-position: 0px 80px;
    // height: 80vh;\
    }
`

const Introtext = styled.div`

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;

`

const Text = styled.div`
    display: flex;
    font-size: xx-large;
    color: black;
    background-color: white;
    padding: 4px 16px;
    align-items: center;
    opacity: 0.75;
    @media(max-width: 760px){
        margin-top: 0px;
        background-color: white;
    }

    
    img {
        width: 40px;
        margin-right: 10px;
    }

    .Typewriter {
        
    }
`

const Arrow = styled.div`
    display: flex;
    flex: 1;
    cursor: pointer;
    align-items: center;
    @media(max-width: 810px) {
        align-items: flex-start;
    }
`

const DownArrow = styled.img`
    // display: none;
    margin-top: 100px;
    height: 56px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    cursor: pointer;
    @media(max-width: 810px) {
        flex:1;
        display: flex;
        // width: 10px;
        align-items: bottom;
        height: 40px;
        // margin-top: 100px;
    }
`