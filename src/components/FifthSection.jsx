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

const Testimonials = styled.div`
    display:grid;
    gap:15px;
    grid-template-columns: repeat(2, 1fr);
    & > :last-child {
        grid-column-start:1;
        grid-column-end:3;
        display:flex;
       justify-content:space-between;
       align-items:center;
       @media (max-width: 1300px) {
        display:flex;
        flex-direction:column;
    }
      }
      @media (max-width: 1300px) {
        display:flex;
        flex-direction:column;
    }
`

const Paragraph = styled.p`
    font-weight:400;
    font-size:16px;
    line-height:26px;
    color:#AFB3CA;
    max-width:444px;
    margin:16px 0;
`
const Header = styled.h4`
      color:#CAD1E9;
      font-size:32px;
      
`
const Box = styled.div`
    border: none;
    background: linear-gradient(to top, #21223C, #0B0B26);
    color: white;
    padding: 15px;
    font-size: 16px;
    border-radius:20px;
    padding:40px;
}
`
const Img = styled.img`
    @media (max-width: 768px) {
        width:220px;
    }

`


const FifthSection = () => {
  return (
    <Container>
        <HeadingTexts title={"Why choose us"} text="We are the only service that provides all 3 services as a packaged service"/>
    <Testimonials>
        <Box>
            <Header>Personal information removal</Header>
            <Paragraph>We purge your personal data from online sources, using automated and manual methods.
                 A privacy expert oversees removals and handles any manual activities.</Paragraph>
            <Img src="/frame1.svg" alt="vector" />
        </Box>
        <Box>
            <Header>Cloaking alias profiles</Header>
            <Paragraph>You’ll receive regular reports on your privacy status and any outstanding threats.
                 If new records become associated with you, we will send you an alert.</Paragraph>
            <img src="/security-validation.svg" alt="security" />
            <Img src="/frame2.svg" alt="vector" />
        </Box>
        <Box>
            <div>
                <Header>Detailed Reporting</Header>
                <Paragraph>You’ll receive regular reports on your privacy status and any outstanding threats.
                     If new records become associated with you, we will send you an alert.</Paragraph>
            </div>
            <Img src="/frame3.svg" alt="vector" />
        </Box>
    </Testimonials>

    </Container>
  )
}

export default FifthSection