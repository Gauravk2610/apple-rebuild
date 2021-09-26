import { AllInbox, Favorite, FavoriteBorderOutlined, ShoppingBasket } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Accordion from './components/Accordion';
import Recommeded from './components/Recommeded';

const imgLocation = '/images/airpodspro';

const imgList = [
    {
        'location': `${imgLocation}/0.jpg`
    },
    {
        'location': `${imgLocation}/1.jpg`
    },
    {
        'location': `${imgLocation}/2.jpg`
    },
    {
        'location': `${imgLocation}/3.jpg`
    },
    {
        'location': `${imgLocation}/4.jpg`
    },
];


const Details = [
    {
        'title': 'Product Information',
        'subsection': [        
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
    }
]

function AirpodsPro() {

    const [activeimg, setActiveImg] = useState(0);

    const [state, setstate] = useState({
        bgImg: '',
        position: 'fixed',
    })

    const limit = 69; 

    // findScrollY function only used if scrollY amount != 0
    const findImgScrollY = () => {
        const { pageYOffset } = window;

        // divide pageYOffset
        const num =  (Math.round(pageYOffset/120).toString())
        // console.log(num)
        const length = (num.length)
        const img = (num.substring(0, length)).toString()
        
        // save the image value
        if (img <= limit) {
            setstate({bgImg: img, position: 'fixed'})
        } else {
            setstate({bgImg: limit, position: 'relative'})
        }
        // console.log("Length", ((num.substring(0, length)).toString()), length)
    }

    // const handleScroll = event => {
    //     const { pageYOffset } = window;
    //     // const { active } = this.state;
    //     console.log(pageYOffset)
    //     if (pageYOffset >= 110*2) {
    //         setstate({bgImg: '/images/iphone_12.png'});
    //     } else if (pageYOffset>= 0){
    //         setstate({bgImg: '/images/ipad.jpg'});

    //     } else if (pageYOffset < 500) {
    //         // setstate(0);
    //         // console.log("I was in else")

    //     }
    //     // console.log(state)
    //   };

    useEffect(() => {
        findImgScrollY()
        // handleScroll()
        // window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", findImgScrollY);
        return () => {
            window.scrollTo(0, 0);
            // window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", findImgScrollY);
        }
    }, [])



    return (
        <MainContainer> 
            <Container pos={state.position}>
                <Images img={state.bgImg}></Images>
            </Container>
            <ProductWrap>
                <ProductInfo>
                    <Wrap>
                        <Info>
                            <ProductTitle>Airpods Pro</ProductTitle>
                            <Price>$269</Price>
                            <p>Available at the neariest apple store</p>
                            <h3>Magic like you’ve never heard</h3>
                            <p>AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your iPhone or Apple Watch. And they’re ready to use right out of the case.</p>
                            <Shipment>
                                <ShoppingBasket />
                                <p>Pickup
                                    <br />
                                    <a href="#">Check availability</a>
                                </p>
                            </Shipment>
                            <Shipment>
                                <AllInbox />
                                <p>Ships within business days
                                    <br />
                                    <a href="#">Get delivery dates</a>
                                </p>
                            </Shipment>
                            <Button>
                                <button>Add To Bag</button>
                                <FavoriteBorderOutlined />
                            </Button>
                        </Info>
                    </Wrap>
                    <Product>
                        <ImageWrap>
                            <Image src={`${imgLocation}/${activeimg}.jpg`}/>
                            <Selector>
                                {imgList.map((image, index) => (
                                    <img 
                                    className={index === activeimg && 'active'} 
                                    onClick={() => setActiveImg(index)} src={image.location} alt={index} key={index}>
                                    </img>
                                ))}
                            </Selector>
                        </ImageWrap>
                    </Product>
                </ProductInfo>
                <OtherInfo>
                    <MainImg src={`${imgLocation}/main.jpg`} />
                </OtherInfo>
            </ProductWrap>
            <ProductDetails>
                {Details.map((data, index) => (
                    <Accordion key={index} data={data}/>
                ))}
            </ProductDetails>
            <Recommeded /> 
        </MainContainer>
    )
}

export default AirpodsPro

const MainContainer = styled.div`
    inset: auto;
    margin: 0px;
    position: relative;
    display: block;
    box-sizing: content-box;
    padding-top: 8300.8px;
    padding-bottom: 605.1997px;
    min-height: 691px;
    height: 691px;
    // padding-top: 200px;
    color: white;

`

const Container = styled.div`
    position: ${props => props.pos};
    margin: auto;
    box-sizing: border-box;
    width: 100%;
    top: 0px;
    left: 0px;
    inset: 0px auto auto 0px;
`

const Images = styled.div`
    margin-top: 60px;
    background-image:  ${props => `url("/images/Airpods/${props.img}.jpg")`} ;
    height: 92vh;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    background-color: black;
    // margin-bottom: 600px;

`

const ProductWrap = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin: 16px 20px;
    width: 80%;

    @media(max-width: 740px) {
        width: 98%;
    }

    @media(max-width: 690px) {
        flex-direction: column;
    }
`

const Wrap = styled.div`
    flex: 1;
    display: flex;
    margin: 16px 0;
    justify-content: flex-end;
    @media(max-width: 690px) {
        justify-content: center;
    }
`

const Info = styled.div`
    flex: 1;
    max-width: 80%;
    h3 {
        margin-top: 16px;
    }
    p {
        width: 80%;
        margin-bottom: 18px;
    }

    @media(max-width: 1000px) {
        p {
            width: 100%;
        }
    }
`

const ProductTitle = styled.h1`
    display: flex;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 40px;
`

const Price = styled.h3`
    font-weight: 500;
    color: #0095ff;
`

const Button = styled.div`
    display: flex;
    margin: 16px 0px;
    align-items: center;

    button{
        width: 40%;
        padding: 10px 0px;
        font-weight: 600;
        border-radius: 10px;
        margin-right: 16px;
        border: none;
        color: white;
        background-color: #0095ff; 
        cursor: pointer;
    }

    .MuiSvgIcon-root {
        font-size: 32px;
        cursor: pointer;
        color: #0095ff;
    }
`

const Shipment = styled.div`
    margin: 10px 0;
    display: flex;
    p {
        margin-left: 10px; 
    }
    .MuiSvgIcon-root {
        color: #0095ff;
    }

    a {
        color: #0095ff;
        font-size: 14px;
    }
`

const Product = styled.div`
    flex: 1;

`

const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Image = styled.img`
    width: 80%;
    transition: 500ms;
    
    @media(max-width: 1000px) {
        width: 100%;
    }
`

const Selector = styled.div`
    margin: 10px; 0
    display: flex;
    justify-content: center;
    img {
        height: 40px;
        width: 40px;
        margin 0 10px;
        cursor: pointer;
    }

    .active {
        border: 2px solid #0095ff;
        border-radius: 10px;

    }

    @media(max-width: 1000px) {
        img {
            height: 30px;
            width: 30px;
        }
    }
`

const OtherInfo = styled.div`
    margin: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const MainImg = styled.img`
    width: 98%;
    object-fit: cover;
`

const ProductDetails = styled.div`
    color: black;
`