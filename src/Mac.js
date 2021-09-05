import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function Mac() {

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
            setstate({position: 'relative'})
        }
        console.log("Length", ((num.substring(0, length)).toString()), length)
    }

    const handleScroll = event => {
        const { pageYOffset } = window;
        // const { active } = this.state;
        console.log(pageYOffset)
        if (pageYOffset >= 110*2) {
            console.log(state.bgImg)
            setstate({bgImg: '/images/iphone_12.png'});
        } else if (pageYOffset>= 0){
            setstate({bgImg: '/images/ipad.jpg'});

        } else if (pageYOffset < 500) {
            // setstate(0);
            console.log("I was in else")

        }
        console.log(state)
      };

    useEffect(() => {
        console.log(state, "useEffect")
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
            {console.log(state)}
            <Container pos={state.position}>
                <Images img={state.bgImg}></Images>

            </Container>
            hi
        </MainContainer>
    )
}

export default Mac

const MainContainer = styled.div`
    inset: auto;
    margin: 0px;
    display: block;
    box-sizing: content-box;
    padding-top: 7744.8px;
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