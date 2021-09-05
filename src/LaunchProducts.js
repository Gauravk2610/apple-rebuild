import React, { useRef, useState } from 'react'
import styled from 'styled-components'

function LaunchProducts() {

    const [change, setChange] = useState(false)
    const videoPlayer = useRef();
    
    const play = () => {
        videoPlayer.current.play();
      };

    const stop = () => {
        videoPlayer.current.pause();
        videoPlayer.current.currentTime = 0;
    };

    return (
        <Container>
            <Wrap change={change}>
                <TextWrap change={change}>
                    <h1>iPhone 12</h1>
                    <p>Blast past fast</p>
                    <ButtonWrap>
                        <a href="#">Learn More &gt;</a>
                        <a href="#">Buy &gt;</a>
                    </ButtonWrap>
                </TextWrap>
                <ImgWrap>
                    <img 
                        onMouseEnter={() => {
                            setChange(true)
                            play()
                        }} 
                        onMouseLeave={() => {
                            setChange(false)
                            stop();
                        }}
                        src="/images/iphone_12.png" alt="" />
                        {/* https://images-na.ssl-images-amazon.com/images/I/71HCR-N2O2L._SL1500_.jpg */}
                    <video muted={true} 
                        ref={videoPlayer}
                        // autoPlay={true} 
                        loop={true} 
                        playsInline={true}
                        >
                        <source src="/videos/iPhone_Trim.mp4" type="video/mp4" />
                    </video>
                </ImgWrap>

            </Wrap>
        </Container>
    )
}

export default LaunchProducts

const Container = styled.div`
    display: flex;
    height: 100vh;
`

const Wrap = styled.div`
    padding-top: 50px;
    // height: 100vh;
    display: flex;
    position: relative;
    flex: 1;
    width: 100%;
    flex-direction: column;
    background-color: ${props => props.change?'black':'white'};
    transition: background-color 1s;

    img {
        cursor: pointer;
        margin-top: auto;
        display: block;
        flex: 1;
        flex-direction: column;
        width: 50vw;
        position: absolute;
        min-width: 360px;
        // max-width: 620px;
        max-width: 660px;
        z-index: 1;
        background-color: inherit;
        transition: opacity 3s;

    }
    @media(max-width: 800px){
        img{
            margin-top: 30px;
            margin-bottom: 40px;
            opacity: 1;
        }

        video {
            top: -10%;
            height: 90%;

        }
        
    }

    
    video {
        width: 100%;
        height: 65%;
        position: absolute;
        top: 26%;
        opacity: 0;
        z-index: 0;
        transition: opacity 0.6s;
        
    }
    
    @media(max-width: 600px){
        video {
            top: 15%;
        }

    }
    img:hover{
        opacity: 0;
        transition: opacity 2s;
    }

    // img:hover ~ &{ 
    //     background-color: black;
    // }

    img:hover~video{
        opacity: 1;
        transition: opacity 6s;
        // img{
        //     opacity: 0;
        // } 
        // video {
        //     opacity: 1;
        // }
    }
    
`

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1 ;
    h1 {
        color: ${props => props.change?'white':'black'}
    }
    p {
        font-size: 18px;
        color: gray;
    }
`

const ButtonWrap = styled.div`
    margin-top: 20px; 
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    color: #0076a3;
`

const ImgWrap = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    // width: fit-content;
    // z-index: -1;
`