"use client"
import React from 'react'
import styled from 'styled-components';
import HeadingTexts from './HeadingTexts';

const Container = styled.div`
    margin:auto ;
    padding: 0 152px;
    @media (max-width: 1300px) {
        padding: 0 40px;
    }
`

const Paragraph = styled.p`
    font-weight:400;
    font-size:16px;
    line-height:26px;
    color:#AFB3CA;
    max-width:595px;
    margin:16px 0;
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    @media (max-width: 1300px) {
        display:grid;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
        display:grid;
        grid-template-columns: repeat(1, 1fr);
    }
    
`
const Card = styled.div`
    border: none;
    background: linear-gradient(to top, #21223C, #0B0B26);
    color: white;
    padding: 15px;
    font-size: 16px;
    border-radius:20px;
    padding:40px;
    height: auto;
    width: calc(25% - 15px);
    @media (max-width: 1300px) {
        width: 100%;
    }
`;
const User = styled.div`
    display:flex;
    align-items:center;
`
const UserName = styled.h5`
    margin-left:6px;
    font-size:20px;
    color:#CAD1E9;

`

const SixthSection = () => {
  return (
    <Container>
        <HeadingTexts title={"The word on IdentityHub"} text="Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address."/>
        <Cards>
            <Card>
                <User>
                    <img src="/avatar1.svg" alt="avatar" />
                    <UserName>Cameron Williamson</UserName>
                </User>
                <Paragraph>Forget about spam, advertising mailings, hacking and attacking robots.
                     Keep your real mailbox clean and secure. Temp Mail provides temporary,
                      secure, anonymous, free, disposable email address.</Paragraph>
            </Card>
            <Card>
                <User>
                    <img src="/avatar2.svg" alt="avatar" />
                    <UserName>Leslie Alexander</UserName>
                </User>
                <Paragraph>Forget about spam, advertising mailings, hacking and attacking robots. 
                    Keep your real mailbox clean and secure. Temp Mail provides temporary,
                     secure, anonymous, free, disposable email address. Stalkers and disgruntled 
                     acquaintances use the Internet to find addresses, phone numbers and other 
                     personal details about their targets. Identity thieves use personal information.</Paragraph>
            </Card>
            <Card>
                <User>
                    <img src="/avatar3.svg" alt="avatar" />
                    <UserName>Guy Hawkins</UserName>
                </User>
                <Paragraph>Forget about spam, advertising mailings, hacking and attacking robots.
                     Keep your real mailbox clean and secure. Temp Mail provides temporary,
                      secure, anonymous, free, disposable email address. Identity thieves use 
                      personal information found online to impersonate their.</Paragraph>
            </Card>
            <Card>
                <User>
                    <img src="/avatar4.svg" alt="avatar" />
                    <UserName>Brooklyn Simmons</UserName>
                </User>
                <Paragraph>Forget about spam, advertising mailings, hacking and attacking robots. 
                    Keep your real mailbox clean and secure. Temp Mail provides temporary, 
                    secure, anonymous, free, disposable email address.</Paragraph>
            </Card>
            <Card>
                <User>
                    <img src="/avatar5.svg" alt="avatar" />
                    <UserName>Darrell Steward</UserName>
                </User>
                <Paragraph>Forget about spam, advertising mailings, hacking and attacking robots. 
                    Keep your real mailbox clean and secure. Temp Mail provides temporary,
                     secure, anonymous, free, disposable email address.</Paragraph>
            </Card>
            <Card>
                <User>
                    <img src="/avatar6.svg" alt="avatar" />
                    <UserName>Floyd Miles</UserName>
                </User>
                <Paragraph>Forget about spam, advertising mailings, hacking and attacking robots. 
                    Keep your real mailbox clean and secure. Temp Mail provides temporary,\
                     secure, anonymous, free, disposable email address.</Paragraph>
            </Card>
            <Card>
                <User>
                    <img src="/avatar7.svg" alt="avatar" />
                    <UserName>Savannah Nguyen</UserName>
                </User>
                <Paragraph>Forget about spam, advertising mailings, hacking and attacking robots.
                     Keep your real mailbox clean and secure. Temp Mail provides temporary,
                      secure, anonymous, free, disposable email address.</Paragraph>
            </Card>
            <Card>
                <User>
                    <img src="/avatar8.svg" alt="avatar" />
                    <UserName>Cody Fisher</UserName>
                </User>
                <Paragraph>Forget about spam, advertising mailings, hacking and attacking robots.
                     Keep your real mailbox clean and secure. Temp Mail provides temporary,
                      secure, anonymous, free, disposable email address.</Paragraph>
            </Card>

        </Cards>
    </Container>
  )
}

export default SixthSection