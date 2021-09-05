import React from 'react'
import styled from 'styled-components'
import Intro from './Intro'
import LaunchProducts from './LaunchProducts'
import SubProducts from './components/SubProducts'

function Home() {

    console.log(window.innerWidth)

    return (
        // <div>
        <Container>
           <Intro /> 
           <LaunchProducts /> 
           <LaunchProducts /> 
           <SubProducts />
        </Container>

           
        // {/* </div>   */}
    )
}

export default Home

const Container = styled.div`
    // display: block;
    // // flex-direction: column;
    // position: relative;
    // // z-index: 1;
`