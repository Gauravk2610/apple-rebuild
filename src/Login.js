import { TextField } from '@material-ui/core'
import Close from '@material-ui/icons/Close'
import React, { useState } from 'react'
import styled from 'styled-components'

function Login() {
    
    const[showSignUp, setShowSignUp] = useState(false)
    
    const signUpSubmit = e => {
        e.preventDefault();
        console.log("In SignUp")
        console.log(e.target.fname.value)
    }

    return (
        <Container>
            <Wrap>
                <Main>
                    <LeftWrap active={showSignUp}>
                        <Title>Please sign in</Title>
                        <InputForm>
                            <UserName>
                                <TextField
                                    id="outlined-basic"
                                    label="Apple ID"
                                    required
                                    variant='outlined'
                                    color='secondary'
                                    // value={name}
                                    // onChange={handleChange}
                                    />
                                <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    type='password'
                                    required
                                    variant='outlined'
                                    color='secondary'
                                    // value={name}
                                    // onChange={handleChange}
                                    />
                            </UserName>
                            <Concern>Your Apple ID is the email address you use to sign in to iTunes, the App Store, and iCloud.</Concern>
                            <SignInButton type='button'>Sign In</SignInButton>
                            <Extras onClick={()=>setShowSignUp(true)}>Don't have an Apple ID? Create one now.</Extras>
                        </InputForm>
                    </LeftWrap>
                    <Right active={showSignUp}>
                        <CloseButton onClick={()=>setShowSignUp(false)}><Close /></CloseButton>
                        <Title>Dw Just Sign Up</Title>
                        <SignUpForm onSubmit={signUpSubmit}>
                            <UserSignUp>
                                <TextField
                                    id="firstname"
                                    name='firstname'
                                    label="First-Name"
                                    required
                                    variant='outlined'
                                    color='secondary'
                                    // value={name}
                                    // onChange={handleChange}
                                    />
                                <TextField
                                    id="lastname"
                                    name='lastname'
                                    label="Last-Name"
                                    required
                                    variant='outlined'
                                    color='secondary'
                                    // value={name}
                                    // onChange={handleChange}
                                    />
                                <TextField
                                    id="emailid"
                                    name='emailid'
                                    label="Email-Id"
                                    required
                                    variant='outlined'
                                    color='secondary'
                                    // value={name}
                                    // onChange={handleChange}
                                    />
                                <TextField
                                    id="CrPass"
                                    name='CrPass'
                                    label="Create Password"
                                    type='password'
                                    required
                                    variant='outlined'
                                    color='secondary'
                                    // value={name}
                                    // onChange={handleChange}
                                    />
                                <TextField
                                    id="CnPass"
                                    name='CnPass'
                                    label="Confirm Password"
                                    type='password'
                                    required
                                    variant='outlined'
                                    color='secondary'
                                    // value={name}
                                    // onChange={handleChange}
                                    />
                            </UserSignUp>
                            <Concern style={{color: 'rgb(255, 255, 255, 0.6'}}>Your Apple ID is the email address you use to sign in to iTunes, the App Store, and iCloud.</Concern>
                            <SignUpButton type='submit'>Sign Up</SignUpButton>
                        </SignUpForm>
                    </Right>
                </Main>
            </Wrap>
        </Container>
    )
}

export default Login


const Container = styled.div`
    // position: relative;
`

const Wrap = styled.div`
    // display: flex;
    // position: relative;

`

const Main = styled.div`
    // position: absolute;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex: 1;
    width: 100%;
    display: flex;
`

const LeftWrap = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    justify-content: flex-start;
    transition: transform 500ms;

    @media(max-width: 950px) {
        width: 300px;
    }
    @media(max-width: 700px) {
        // overflow-y: ${props=>props.active ? 'hidden' : 'overlay'}; 
        flex: 1;
        transform: ${props => props.active ? 'translateY(-100%)' : 'translateY(0)'};
        // filter: ${props => props.active ? 'blur(12px)': 'blur(0px)'};
    }
`

const Title = styled.h1`
    font-weight: 600;
    font-size: 2.4em;
    margin: 24px 0;
    width: 400px;
    display: flex;
    justify-content: flex-start;
    @media(max-width: 950px) {
        width: 300px;
    }
`

const InputForm = styled.form`

`

const UserName = styled.div`
    display: flex;
    flex-direction: column;

    .MuiTextField-root {
        margin: 12px 0;
        width: 400px;
    }
    .MuiInputBase-root {
        border-radius: 16px;
    }
    @media(max-width: 950px) {
        .MuiTextField-root {
            width: 300px;
        }
    }
`

const Concern = styled.p`
    width: 400px;
    color: rgba( 0, 0, 0, 0.8 );
    margin: 12px 0;
    @media(max-width: 950px) {
        width: 300px;
    }
`

const SignInButton = styled.button`
    margin: 32px 0;
    width: 400px;
    padding: 14px 0;
    border-radius: 16px;
    border: none;
    background-color: #0071e3;
    color: white;
    font-size: 1.1em;
    font-weight: 600;
    curosr: pointer;
    transition: background-color 200ms;
    :hover {
        background-color: #0071e39e;
    }
    @media(max-width: 950px) {
        width: 300px;
    }
`

const Extras = styled.div`
    display: none;
    color: #0071e4;
    cursor: pointer;
    width: 400px;
    margin-bottom: 32px;
    @media(max-width: 950px) {
        width: 300px;
    }
    :hover {
        text-decoration: underline;
    }
    @media(max-width: 700px) {
        display: flex;
    }
`

const Right = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    background-color: rgb(0, 0, 0, 0.7) ;
    align-items: center;
    width: 400px;
    color: white;
    justify-content: flex-start;
    padding-top: 26px;

    @media(max-width: 700px) {
        position: ${props => props.active ? 'absolute' : 'fixed' };
        height: 100vh;
        flex: 1;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            display: none;
        }
        width: 100%;
        transform: ${props=>props.active ? 'translateY(0)': 'translateY(100%)'};
        transition: transform 500ms;
        background-color: rgb(0, 0, 0, 0.92) ;
    }
`

const CloseButton = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    // margin-top: 42px;
    padding: 16px 26px;
    .MuiSvgIcon-root {
        color: white;
        font-size: 3.0em;
    }
    @media(max-width: 700px) {
        display: flex;
    }

    @media(max-width: 700px) {
        .MuiSvgIcon-root {
            font-size: 2.4em;
        }
    }
`

const SignUpForm = styled.form`

`

const UserSignUp = styled.div`
    display: flex;
    flex-direction: column;

    .MuiTextField-root {
        margin: 12px 0;
        width: 400px;
    }
    .MuiInputBase-root {
        border-radius: 16px;
        color: white;
    }

    .MuiOutlinedInput-notchedOutline{
        border-color: white;
    }

    .MuiFormLabel-root {
        color: #f50057;
        font-weight: 600;
    }
    @media(max-width: 950px) {
        .MuiTextField-root {
            width: 300px;
        }
    }
    
`

const SignUpButton = styled.button`
    margin-bottom: 32px;
    width: 400px;
    padding: 14px 0;
    border-radius: 16px;
    border: none;
    background-color: #0071e3;
    color: white;
    font-size: 1.1em;
    font-weight: 600;
    curosr: pointer;
    transition: background-color 200ms;
    :hover {
        background-color: #0071e39e;
    }
    @media(max-width: 950px) {
        width: 300px;
    }
`