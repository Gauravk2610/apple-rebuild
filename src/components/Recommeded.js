import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import React, { useRef } from 'react'
import styled from 'styled-components'

const baseUrl = '/images'

const recommededList = [
    {
        'title': 'Airpods with Wireless Charging Case',
        'location': 'airpods',
        'price': '199.00'
    },
    {
        'title': 'Airpods Max - Silver',
        'location': 'airpodsmax',
        'price': '549.00'
    },
    {
        'title': 'EarPods with lightning Connector',
        'location': 'airpods',
        'price': '19.00'
    },
    {
        'title': 'AirTag',
        'location': 'airtag',
        'price': '15.00'
    },
    {
        'title': 'Airpods with Wireless Charging Case',
        'location': 'airpods',
        'price': '199.00'
    },
    {
        'title': 'Airpods Max - Silver',
        'location': 'airpodsmax',
        'price': '549.00'
    },
    {
        'title': 'EarPods with lightning Connector',
        'location': 'airpods',
        'price': '19.00'
    },
    {
        'title': 'AirTag',
        'location': 'airtag',
        'price': '15.00'
    },
] 

function Recommeded() {

    const myRef = useRef(null)

    return (
        <Container>
            <Title>Recommended</Title>
            <ProductList>
                <ProductWrap >
                    <ChevronLeft className='left' onClick={()=> {
                        console.log("Clicked")
                        }} />
                    <SubWrapper>
                        {recommededList.map((data, index) => (
                            <Wrap>
                                <Image src={`${baseUrl}/${data.location}/recommended.jpg`}/>
                                <ProductName className='ProductName'>{data.title}</ProductName>
                                <ProductPrice>${data.price}</ProductPrice>
                            </Wrap>
                        ))}
                    </SubWrapper>
                    <ChevronRight className='right' />
                </ProductWrap>
            </ProductList>
        </Container>
    )
}

export default Recommeded

const Container = styled.div`
    color: black;
    padding: 6% 0;
`

const Title = styled.h1`
    display: flex;
    flex: 1;
    justify-content: center;
    font-weight: 600;
`

const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProductWrap = styled.div`
    width: 60%;
    display: flex;
    position: relative;

    
    .left {
        left: 0;
        top: 40%;
        position: absolute;
        cursor: pointer;
        z-index: 1;
        padding: 6px;
        border-radius: 40px;
        background-color: #80808038;
    }
    
    .right {
        right: 0;
        top: 40%;
        position: absolute;
        cursor: pointer;
        z-index: 1;
        padding: 6px;
        border-radius: 40px;
        background-color: #80808038;
    }

    .MuiSvgIcon-root {
        color: darkgrey;
        font-size: 34px;
    }

    @media(max-width: 1000px) {
        width: 80%;
    }

`

const SubWrapper = styled.div`
    display: flex;
    position: relative;
    overflow-x: scroll;
    
    ::-webkit-scrollbar {
        display: none;
    }
    // justify-content: space-between;
    // flex: 1;
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
    :nth-child(n+4) {
        // // display: none;
        // visibility: hidden;
        // width: 0px;
        // padding: 0px;
    }

    :hover {
        .ProductName {
            color: #0095ff;
        }
    }

`

const Image = styled.img`
    padding: 16px 36px;
    margin: 0 21px;
    
    @media(max-width: 500px) {
    padding: 12px 6px;    
    }
`

const ProductName = styled.div`
    font-size: 1.2em;
    display: flex;
    width: 96%;
    text-align: center;
    justify-content: center;
    font-weight: 600;
    cursor: pointer;
    transition: color 200ms;

`

const ProductPrice = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    margin: 16px 0;
`