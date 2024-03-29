'use client'
import React from 'react'
import styled from 'styled-components'

const Image = styled.div`
    position:relative;   
`
const Img = styled.img`
    @media (max-width: 1300px) {
        width:400px;
    }
    @media (max-width: 768px) {
        width:300px;
        margin-top:60px;
    }
    
`

const Container = styled.div`
    margin:130px auto 0;
    padding: 0 152px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width: 1300px) {
        padding: 0 40px;
    }
    @media (max-width: 768px) {
        padding: 0 40px;
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
    }
`
const Title = styled.h3`
    font-weight:500;
    font-size:56px;
    line-height:62px;
    color: #CAD1E9;
    max-width:537px;
    margin-bottom:16px;
    @media (max-width: 1300px) {
        font-size:40px;
        max-width:90%;
    }
    @media (max-width: 768px) {
        max-width:100%;
    }
`
const Paragraph = styled.p`
    font-weight:400;
    font-size:16px;
    line-height:26px;
    color:#AFB3CA;
    max-width:444px;
    margin:8px 0;
    @media (max-width: 1300px) {
        max-width:90%;
    }
    @media (max-width: 768px) {
        max-width:100%;
    }
`




const FourthSection = () => {
  return (
    <>
        <Container>
            <div>
                <Title>Dedicated Support</Title>
                <Paragraph>Forget about spam, advertising mailings, 
                    hacking and attacking robots. Keep your real 
                    mailbox clean and secure. Temp Mail provides temporary, 
                    secure, anonymous, free, disposable email address.</Paragraph>
            </div>
            <Image>
                <Img src="/front.svg" alt="" />
            </Image>
        </Container>

    </>
  )
}

export default FourthSection