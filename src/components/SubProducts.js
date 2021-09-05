import React from 'react'
import styled from 'styled-components'

function SubProducts() {
    return (
        <Container>
           <Product  image={'/images/ipad.jpg'}>
                <TextWrap>
                    <h1>iPad Pro</h1>
                    <p>Supercharge by the Apple M1 chip</p>
                    <ButtonWrap>
                        <a href="#">Learn More &gt;</a>
                        <a href="#">Buy &gt;</a>
                    </ButtonWrap>
                </TextWrap>
           </Product>
           <Product>
                <TextWrap>
                    <h1>iPad Pro</h1>
                    <p>Supercharge by the Apple M1 chip</p>
                    <ButtonWrap>
                        <a href="#">Learn More &gt;</a>
                        <a href="#">Buy &gt;</a>
                    </ButtonWrap>
                </TextWrap>
           </Product>
           <Product>
                <TextWrap>
                    <h1>iPad Pro</h1>
                    <p>Supercharge by the Apple M1 chip</p>
                    <ButtonWrap>
                        <a href="#">Learn More &gt;</a>
                        <a href="#">Buy &gt;</a>
                    </ButtonWrap>
                </TextWrap>
           </Product>
           <Product>
                <TextWrap>
                    <h1>iPad Pro</h1>
                    <p>Supercharge by the Apple M1 chip</p>
                    <ButtonWrap>
                        <a href="#">Learn More &gt;</a>
                        <a href="#">Buy &gt;</a>
                    </ButtonWrap>
                </TextWrap>
           </Product>
           <Product>
                <TextWrap>
                    <h1>iPad Pro</h1>
                    <p>Supercharge by the Apple M1 chip</p>
                    <ButtonWrap>
                        <a href="#">Learn More &gt;</a>
                        <a href="#">Buy &gt;</a>
                    </ButtonWrap>
                </TextWrap>
           </Product>
           <Product>
                <TextWrap>
                    <h1>iPad Pro</h1>
                    <p>Supercharge by the Apple M1 chip</p>
                    <ButtonWrap>
                        <a href="#">Learn More &gt;</a>
                        <a href="#">Buy &gt;</a>
                    </ButtonWrap>
                </TextWrap>
           </Product>
        </Container>
    )
}

export default SubProducts

const Container = styled.div`
    display: grid; 
    grid-template-columns: auto auto;  
    // grid-template-rows: auto auto;  
    grid-column-gap: 20px; 
    grid-row-gap: 20px; 
    padding: 20px;

    @media(max-width: 840px){
    grid-template-columns: auto ;  
        
    }
`

const Product = styled.div`
    background-color: black;
    color: white;
    height: 540px;
    // background-image: url(https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-key-features-keyboard-202104_FMT_WHH?wid=600&hei=312&fmt=p-jpg&qlt=95&.v=1617213582000);
    background-image: ${props => `url("${props.image}")`} ;
    background-repeat: no-repeat;
    background-position: 50% 80%;
    background-size: 90%;
    // margin: 20px;
    @media(max-width: 1000px){
        background-size: 100%;
    }

    @media(max-width: 840px){
        background-size: 90%;  
            
    }

    @media(max-width: 600px){
        height: 500px;
    }

    @media(max-width: 450px){
        height: 460px;
    }

`

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3%;

    @media(max-width: 1150px) {
       margin-top: 12%;

    }

    @media(max-width: 840px){
        margin-top: 5%
    }

    
    @media(max-width: 610px){
        margin-top: 15%
    }

    @media(max-width: 450px){
        margin-top: 20%
    }

    p {
        font-size: 18px;
    }
`

const ButtonWrap = styled.div`
    margin-top: 20px;;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    color: #0076a3;
`