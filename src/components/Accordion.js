import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'

function Accordion({data}) {

    const [active, setActive] = useState(false)

    return (
        <Container>
            <Wrap>
                <Content>
                    <Header onClick={()=>setActive(!active)}>
                        <Title>{data.title}</Title>
                        {active ? <ArrowDropUp /> : <ArrowDropDown />}
                    </Header>
                    <Data active={active}>
                        {data.subsection.map((data, index) => (
                            <ContentWrap>
                                <Left>{data.heading}</Left>
                                <Right>
                                {data.details.map((data, index) => (
                                    <RigthWrap key={index}>
                                        { data.title && <Heading>{data.title}</Heading>}
                                        <Info>{data.content}</Info>
                                    </RigthWrap>
                                ))}
                                </Right>
                            </ContentWrap>
                        ))}
                    </Data>
                </Content>
            </Wrap>
        </Container>
    )
}

export default Accordion

const Container = styled.div`
    display: flex;
    margin-top: 12px; 
`

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;

`

const Content = styled.div`
    // border-bottom: 1px solid rgb(0, 0, 0, 0.6);
    max-width: 70%;
    width: 100%;
`

const Header = styled.div`
    display: flex;
    padding: 16px 20px;
    cursor: pointer;
    border-top: 1px solid rgb(0, 0, 0, 0.6);
    :hover {
        color: #0095ff;
    }

    .MuiSvgIcon-root {
        font-size: 2.0em;
    }
`

const Title = styled.div`
    flex: 1;
    font-size: 2.0em;
`

const Data = styled.div`
    padding: 6px 20px;
    display: ${props => props.active ? 'flex': 'none'};
    flex-direction: column;
    visibility:  ${props => props.active ? 'visible': 'hidden'};
    opacity: ${props => props.active ? '1' : '0'};
    height: ${props => props.active ? 'auto' : '0px'};
    transition: visibility 0s, opacity 0.5s linear, transform 0.5s ease-in-out, height 0.4s linear;
    // transform: ${props => props.active ? 'translateY(0)' : 'translateY(100%)'};
`

const ContentWrap = styled.div`
    display: flex;
    margin-bottom: 32px;
`

const Left = styled.div`
    font-size: 1.4em;
    flex: 0.3;
`

const Right = styled.div`
    flex: 0.7;
    display: flex;
    flex-direction: column;
    margin: 0 32px;
`

const RigthWrap = styled.div`
    display: flex;
    flex-direction: column;
`

const Heading = styled.h3`
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 1.3em; 
`

const Info = styled.div`
    margin-bottom: 16px;
    font-size: 1.1em;
    color: rgb(0, 0, 0, 0.8);
`   