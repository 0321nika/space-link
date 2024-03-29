"use client";
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin:auto ;
    padding: 0 152px;
    @media (max-width: 1300px) {
        padding:0 40px;
    }
`

const Flex = styled.div`
    margin-top:152px;
    display:flex;
    justify-content:space-between;
    @media (max-width: 1300px) {
        display:flex;
        flex-direction: column-reverse;
        align-items:center;
    }
`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 20px;
    @media (max-width: 1300px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 40px;
        max-width:100%;
    }
`

const Card = styled.div`
border: none;
    background: linear-gradient(to top, #21223C, #0B0B26);
    color: white;
    padding: 15px;
    width: 242px;
    font-size: 16px;
    border-radius:20px;

    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1300px) {
        background:none;
        width:100%;
    }

    

    &::after{
        content: '';
        position: absolute;
        height: 95px;
        width: 244px;
        border-radius:20px;
        background: linear-gradient(to left, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.15) );
        z-index:-1;
`
const Title = styled.h3`
    font-weight:500;
    font-size:56px;
    line-height:62px;
    color: #CAD1E9;
    max-width:537px;
    margin-bottom:16px;
    @media (max-width: 1300px) {
        max-width:90%;
    }
    @media (max-width: 768px) {
        font-size:36px;
        text-align:center;
        max-width:100%
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
        margin-bottom:60px;
        text-align:center;
    }
`
const ThirdSection = () => {
  return (
    <>
        <Container>
            <Flex>
                <CardsContainer>
                    <Card>
                        <img src="/user.png" alt="user" />
                        <div>
                            <p>Username</p>
                            <p>+1 (456) 453-3456</p>
                        </div>
                    </Card>
                    <Card>
                        <img src="/call.png" alt="call" />
                        <div>
                            <p>Phone Numbers</p>
                            <p>+1 (456) 453-3456</p>
                        </div>
                    </Card>
                    <Card>
                        <img src="/mail.png" alt="e-mail" />
                        <div>
                            <p>Email Address</p>
                            <p>+1 (456) 453-3456</p>
                        </div>
                    </Card>
                    <Card>
                        <img src="/credit-card-accept.png" alt="credit card" />
                        <div>
                            <p>Credit Card</p>
                            <p>+1 (456) 453-3456</p>
                        </div>
                    </Card>
                    <Card>
                        <img src="/security-password.png" alt="security password" />
                        <div>
                            <p>Password</p>
                            <p>+1 (456) 453-3456</p>
                        </div>
                    </Card>
                    <Card>
                        <img src="/square-lock-password.png" alt="lock" />
                        <div>
                            <p>One Time Passcode</p>
                            <p>+1 (456) 453-3456</p>
                        </div>
                    </Card>
                </CardsContainer>
                <div className="texts">
                    <Title>
                        Cloaking identities stand in for your personal data
                    </Title>
                    <Paragraph>Forget about spam, advertising mailings, hacking and attacking robots.
                         Keep your real mailbox clean and secure. Temp Mail provides temporary,
                          secure, anonymous, free, disposable email address.</Paragraph>
                </div>
            </Flex>
        </Container>
    </>
  )
}

export default ThirdSection