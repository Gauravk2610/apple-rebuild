import { AllInbox, ChevronRight, Close, FavoriteBorder, GraphicEq, MusicVideo } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'

const baseUrl = '/images/airpodsmax'

const airpodsMaxList = [
    {
        'color': 'Silver',
        'image': '0'
    },
    {
        'color': 'Space Gray',
        'image': '1'
    },
    {
        'color': 'pink',
        'image': '2'
    },
    {
        'color': 'Green',
        'image': '3'
    },
    {
        'color': 'Sky Blue',
        'image': '4'
    },
]

const List = [        
    {
        'heading': 'Overview',
        'details': [
            {
                'title': 'Magic like you’ve never heard',
                'content': 'AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your iPhone or Apple Watch. And they’re ready to use right out of the case.'
            },
            {
                'title': 'Active Noise Cancellation',
                'content': 'Incredibly light noise-cancelling headphones, AirPods Pro block out your environment so you can focus on what you’re listening to. AirPods Pro use two microphones, an outward-facing microphone and an inward-facing microphone, to create superior noise cancellation. By continuously adapting to the geometry of your ear and the fit of the ear tips, Active Noise Cancellation silences the world to keep you fully tuned in to your music, podcasts, and calls.'
            },
            {
                'title': 'Transparency mode',
                'content': 'Switch to Transparency mode and AirPods Pro let the outside sound in, allowing you to hear and connect to your surroundings. Outward- and inward-facing microphones enable AirPods Pro to undo the sound-isolating effect of the silicone tips so things sound and feel natural, like when you’re talking to people around you.'
            },
            {
                'title': 'All-new design',
                'content': 'AirPods Pro offer a more customizable fit with three sizes of flexible silicone tips to choose from. With an internal taper, they conform to the shape of your ear, securing your AirPods Pro in place and creating an exceptional seal for superior noise cancellation.'
            },
            {
                'title': 'Amazing audio quality',
                'content': 'A custom-built high-excursion, low-distortion driver delivers powerful bass. A superefficient high dynamic range amplifier produces pure, incredibly clear sound while also extending battery life. And Adaptive EQ automatically tunes music to suit the shape of your ear for a rich, consistent listening experience.'
            },
            {
                'title': 'Even more magical',
                'content': 'The Apple-designed H1 chip delivers incredibly low audio latency. A force sensor on the stem makes it easy to control music and calls and switch between Active Noise Cancellation and Transparency mode. Announce Messages with Siri gives you the option to have Siri read your messages through your AirPods. And with Audio Sharing, you and a friend can share the same audio stream on two sets of AirPods — so you can play a game, watch a movie, or listen to a song together.¹²'
            },
        ]
    },
    {
        'heading': 'Highlights',
        'details': [
            {
                'title': null,
                'content': 'Designed by Apple'
            },
            {
                'title': null,
                'content': 'Active Noise Cancellation                        '
            },
            {
                'title': null,
                'content': 'More customizable fit and seal'
            },
            {
                'title': null,
                'content': 'Transparency mode'
            },
            {
                'title': null,
                'content': 'Amazing sound quality with Adaptive EQ'
            },
            {
                'title': null,
                'content': 'Sweat and water resistant (IPX4)²'
            },
            {
                'title': null,
                'content': 'Automatically on, automatically connected'
            },
            {
                'title': null,
                'content': 'Easy setup for all your Apple devices¹³'
            },
            {
                'title': null,
                'content': 'Quick charging in the case'
            },
            {
                'title': null,
                'content': 'Case can be charged either wirelessly using a Qi-certified charger or with the Lightning connector'
            },
        ]
    },
    {
        'heading': 'What’s in the Box',
        'details': [
            {
                'title': null,
                'content': 'AirPods Pro'
            },
            {
                'title': null,
                'content': 'Wireless Charging Case'
            },
            {
                'title': null,
                'content': 'Silicone ear tips (three sizes)'
            },
            {
                'title': null,
                'content': 'Lightning to USB-C Cable'
            },
            {
                'title': null,
                'content': 'Documentation'
            },
        ]
    },
    {
        'heading': 'Tech Specs',
        'details': [
            {
                'title': 'Audio Technology',
                'content': null
            },
            {
                'title': null,
                'content': 'Active Noise Cancellation'
            },
            {
                'title': null,
                'content': 'Transparency mode'
            },
            {
                'title': null,
                'content': 'Adaptive EQ'
            },
            {
                'title': null,
                'content': 'Vent system for pressure equalization'
            },
            {
                'title': null,
                'content': 'Custom high-excursion Apple driver'
            },
            {
                'title': null,
                'content': 'Custom high dynamic range amplifier'
            },
            {
                'title': null,
                'content': 'Spatial audio with dynamic head tracking¹'
            },
        ]
    },
]

function CommonProduct() {

    const [active, setActive] = useState(0)
    const [details, setDetails] = useState(false)


    const data= useParams();
    {console.log(data)}
    const ImageSelector = () => (
        <Selector>
            {airpodsMaxList.map((data, index) => (
                <ImgSelect key={index} onClick={() => setActive(index)} active={active == index} src={`${baseUrl}/${data.image}_color.png`} />
            ))}
        </Selector>
    )    
    
    return (
        <Container>
            <Wrap>
                <Title>Airpods Max</Title>
                <ImageWrap>
                    <Image src={`${baseUrl}/${active}.png`} />
                    <ImageSelector />
                </ImageWrap>
                <Content>
                    <Left>
                        <Caption>A Closer Look At AirPods Max.</Caption>
                        <ShortDescription>Designed for an Exceptional Fit</ShortDescription>
                        <LearnMore onClick={()=>setDetails(true)}>Learn More <ChevronRight/> </LearnMore>
                    </Left>
                    <Right>
                        <TagLines>High-Fidelity Audio<GraphicEq /></TagLines>
                        <SubTagLines>Noise Control</SubTagLines>
                        <Price>$548</Price>
                        <Delivery><AllInbox /><p>Get Free Delivery or pickup available items at an Apple Store</p></Delivery>
                        <Delivery><MusicVideo /><p>Get 6 months of Apple Music free with your AirPods Max </p></Delivery>
                        <AddToBag><Buy>Add To Bag</Buy><FavoriteBorder /></AddToBag>
                    </Right>
                </Content>
            </Wrap>
            <Details show={details}>
                <DetailWrap>
                    <CloseButton onClick={() => setDetails(false)}><Close /></CloseButton>
                    <DetailContentWrap>
                        <DetailHeader>Airpods Max</DetailHeader>
                        <Divider />
                        <DetailData active={true}>
                        {List.map((data, index) => (
                            <ContentWrapper>
                                <DetailLeft>{data.heading}</DetailLeft>
                                <DetailRight>
                                {data.details.map((data, index) => (
                                    <RigthWrap key={index}>
                                        { data.title && <Heading>{data.title}</Heading>}
                                        { data.content && <Info>{data.content}</Info> }
                                    </RigthWrap>
                                ))}
                                </DetailRight>
                            </ContentWrapper>
                        ))}
                    </DetailData>
                    </DetailContentWrap>
                </DetailWrap>
            </Details>
        </Container>
    )
}

export default CommonProduct

const Container = styled.div`
    color: black;
    z-index: 0;
    // position: relative;
`

const Wrap = styled.div`
    // display: flex;
    position: relative;
    @media(max-width: 950px) {
        display: flex;
        flex-direction: column;
    }
`

const Title = styled.h1`
    font-weight: 600;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    margin-top: 16px;
    right: 0;
    font-size: 3.0em;
`

const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: black;
    display: flex;
    // flex-direction: column;

    @media(max-width: 950px) {
        position: relative;
    }

    @media(max-width: 650px) {
        flex-direction: column;
    }
`

const Left = styled.div`
    left: 0;
    margin-left: 52px;
    margin-top: 6%;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 26%;
    flex-direction: column;
    justify-content: flex-end;
    @media(max-width: 950px) {
        width: 40%;
    }
    @media(max-width: 650px) {
        position: relative;
        width: 100%;
        align-items: center;
        margin-left: 0px;

    }
`

const Caption = styled.div`
    font-size: 3.0em;
    @media(max-width: 1050px) {
        font-size: 2.4em;
        text-align: center;
    }
`

const ShortDescription = styled.div`
    margin: 32px 0;
    color: rgb(0, 0, 0, 0.4);
    font-size: 2.1em;
    @media(max-width: 1050px) {
        font-size: 1.6em;
    }
    @media(max-width: 650px) {
        text-align: center;
        margin: 26px 0;
    }
    @media(max-width: 470px) {
        width: 340px;
    }
`

const LearnMore = styled.button`
    width: fit-content;
    background-color: inherit;
    padding: 10px 12px;
    font-size: 1.0em;
    box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.4);
    width: 200px;
    margin-top: 40px;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0, 0.4);
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content:space-evenly;
    .MuiSvgIcon-root {
        // margin-left: 16px;
    }
    @media(max-width: 650px) {
        margin-top: 26px;
    }
    @media(max-width: 470px) {
        margin-top: 0px;
    }
`

const Right = styled.div`
    right: 0;
    margin-right: 52px;
    margin-top: 86px;
    position: absolute;
    display: flex;
    justify-content: center;
    // align-items: center;
    width: 26%;
    flex-direction: column;
    @media(max-width: 950px) {
        width: 40%;
        margin-right: 42px;
        margin-top: 6%;
    }

    @media(max-width: 650px) {
        position: relative;
        width: 100%;
        margin-right: 0px;
        align-items: center;

    }

`

const TagLines = styled.div`
    font-size: 2.0em;
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0, 0.6);
    .MuiSvgIcon-root {
        font-size: 1.6em;
    }

    @media(max-width: 1050px) {
        font-size: 1.6em;
    }
    @media(max-width: 470px) {
        margin-top: 16px;
    }
`

const SubTagLines = styled.div`
    margin: 14px 0;
    font-size: 2.0em;
    color: rgb(0, 0, 0, 0.6);
    @media(max-width: 1050px) {
        font-size: 1.6em;
    }
`

const Price = styled.div`
    font-size: 1.6em;
    margin: 8px 0;
    // padding: 6px 16px;
    // background-color: #0095ff;
    border-radius: 10px;
    color: rgba(0, 0, 0, 0.8);
    color: #0095ff;
    cursor: pointer;
    width: fit-content;
    @media(max-width: 1050px) {
        font-size: 1.3em;
    }
`

const Delivery = styled.div`
    margin: 14px 0;
    display: flex;
    font-size: 1.1em;
    align-items: center;
    color: rgb(0, 0, 0, 0.6);
    .MuiSvgIcon-root {
        font-size: 2.0em;
    }
    p{
        width: 320px;
        margin: 0 14px;
    }

    @media(max-width: 1050px) {
        font-size: 1.0em;
    }
    @media(max-width: 470px) {
        width: 300px;
    }
`

const AddToBag = styled.div`
    margin: 32px 0;   
    display: flex;
    align-items: center;

    
    .MuiSvgIcon-root {
        margin-left: 16px;
        cursor: pointer;
        color: #0095ff;
        font-size: 32px;
    }
`

const Buy = styled.button`
    padding: 12px 42px;
    font-weight: 600;
    border-radius: 10px;
    margin-right: 16px;
    border: none;
    color: white;
    background-color: #0095ff; 
    cursor: pointer;

`

const Image = styled.img`
    width: 500px;

    @media(max-width: 1300px) {
        width: 450px;
    }
    @media(max-width: 1160px) {
        width: 400px;
    }
    @media(max-width: 1050px) {
        margin-top: 34px;
        width: 350px;
    }
    @media(max-width: 470px) {
        width: 300px;
    }
    @media(max-width: 390px) {
        width: 260px;
    }
`

const Selector = styled.div`
    display: flex;
    margin-top: -3%;
`

const ImgSelect = styled.img`
    // height: 40px;
    border-radius: 40px;
    border: ${props => props.active ? '2px solid #0095ff': '2px solid rgb(0, 0, 0, 0.2)'};
    transform: ${props => props.active ? 'scale(1.1)' : 'scale(0.75)'};
    width: 36px;
    margin 0 12px;
    padding: 2px;
    transition: transform 200ms ease-in;
    cursor: pointer;
    :hover {
        transform: ${props => props.active ? 'scale(1.1)': 'scale(0.9)'};
    }

    @media(max-width: 470px) {
        width: 30px;
    }
`

const Details = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    transform: ${props => props.show ? 'translateY(0)':'translateY(100%)'};
    transition: transform 0.5s;
`

const DetailWrap = styled.div`
    position: relative;
    margin: 0px 24px;
    margin-top: 76px;
    margin-bottom: 0px;
    background-color: rgb(0, 0, 0, 0.9);
    width: 100vw;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    @media(max-width: 450px) {
        margin-left: 0px;
        margin-right: 0px;
    }
`

const CloseButton = styled.div`
    position: absolute;
    cursor: pointer;
    .MuiSvgIcon-root {
        color: white;
    }
    right: 0;
    margin: 16px 14px;
    padding: 2px 4px;
`

const DetailContentWrap = styled.div`
    color: white;
    overflow-y: scroll;
    height: 90vh;
    ::-webkit-scrollbar {
        display :none;
    }
`

const DetailHeader = styled.h1`
    font-weight: 600;
    display: flex;
    margin: 16px 0;
    justify-content: center;
`

const Divider = styled.div`
    // height: 0.5px;
    margin: 6px 0;
    background-color: white;
`


const DetailData = styled.div`
    padding: 6px 20px;
    display: ${props => props.active ? 'flex': 'none'};
    flex-direction: column;
    align-items: center;
    visibility:  ${props => props.active ? 'visible': 'hidden'};
    opacity: ${props => props.active ? '1' : '0'};
    height: ${props => props.active ? 'auto' : '0px'};
    transition: visibility 0s, opacity 0.5s linear, transform 0.5s ease-in-out, height 0.4s linear;
    // transform: ${props => props.active ? 'translateY(0)' : 'translateY(100%)'};
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    width: 90%;
    @media(max-width: 450px) {
        flex-direction: column;
    }
`

const DetailLeft = styled.div`
    font-size: 1.4em;
    flex: 0.3;
    @media(max-width: 450px) {
        padding-bottom: 16px;
        border-bottom: 1px solid rgb(0, 0, 0, 0.5)
    }
`

const DetailRight = styled.div`
    flex: 0.7;
    display: flex;
    flex-direction: column;
    margin: 0 32px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2); 
    @media(max-width: 450px) {
        margin: 10px 0;
        border-bottom: 0px;
    }

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
    color: rgb(255, 255, 255, 0.8);
`   