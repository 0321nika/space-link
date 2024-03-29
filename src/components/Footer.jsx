"use client"
import styled from 'styled-components';
import React from 'react'
import Image from 'next/image';

const Logo =styled.a`
    display:flex;
    align-items:center;
    @media (max-width: 768px) {
        margin-bottom:60px;
        display:flex;
        justify-content:center;
    }
`
const Name = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-left: 8px;
    color: #CAD1E9;
`
const Container = styled.div`
    margin: auto;
    display:flex;
    justify-content:space-between;
    align-items: flex-start;
    padding:48px 152px;
    @media (max-width: 1300px) {
        padding: 48px 52px;
    }
    @media (max-width: 768px) {
        padding: 48px 52px;
        display:grid;
        grid-template-columns: repeat(1, 1fr);
        text-align:center;
    }
    
`;
const ColTitle = styled.div`
    font-size:18px;
    font-weight:500;
    color:rgba(202, 209, 233, 1);
    margin-bottom:24px;
`
const FooterContainer = styled.footer`
    margin-top:140px;
    border-top:none;

    &::before{
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background: linear-gradient(to left, rgba(45, 46, 72, 0.21), rgba(45, 46, 72, 1) ,rgba(45, 46, 72, 0.21));
        z-index:1;
`
const ListItem = styled.li`
    list-style:none;
    color:#CAD1E9;
    margin: 12px 0;
`
const SecondFooter = styled.div`
    margin-top:152px;
    border-top:none;
    display:flex;
    justify-content:center;

    &::before{
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background: linear-gradient(to left, rgba(45, 46, 72, 0.21), rgba(45, 46, 72, 1) ,rgba(45, 46, 72, 0.21));
        z-index:1;
    
`
const SocialIcons = styled.div`
        display:flex;
        justify-content:center;
        @media (max-width: 768px) {
            display:grid;
            grid-template-columns: repeat(1, 1fr);
            gap:30px;
        }
`
const LinkItem = styled.a`
        margin: 0 88px;
        display:flex;
        align-items:center;
`
const CompanyName = styled.h5`
        font-size:18px;
        font-weight:500;
        color:#CAD1E9;
        margin-left:12px;
`

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <Container>
                <Logo href='/'>
                    <Image src="/logo.svg" width={32} height={32} alt="IdentityHub" />
                    <Name>IdentityHub</Name>
                </Logo>
            <div className="footer-col">
                <ColTitle>It’s free so why not</ColTitle>
                <ul>
                    <ListItem>Pricing</ListItem>
                    <ListItem>Features</ListItem>
                    <ListItem>FAQ</ListItem>
                </ul>
            </div>
            <div className="footer-col">
                <ColTitle>Company</ColTitle>
                <ul>
                    <ListItem>Our company</ListItem>
                    <ListItem>Security</ListItem>
                    <ListItem>Blog</ListItem>
                </ul>
            </div>
            <div className="footer-col">
                <ColTitle>Legal</ColTitle>
                <ul>
                    <ListItem>Privacy policy</ListItem>
                    <ListItem>Terms of service</ListItem>
                    <ListItem>Prohibited use policy</ListItem>
                </ul>
            </div>
        </Container>
    </FooterContainer>
    <SecondFooter>
        <Container>
        <SocialIcons>
            <LinkItem href="https://www.instagram.com/">
                <img src="/instagram.svg" alt="intagram" />
                <CompanyName>Company</CompanyName>
            </LinkItem>
            <LinkItem href="https://www.youtube.com/">
                <img src="/youtube.svg" alt="youtube" />
                <CompanyName>YouTube</CompanyName>
            </LinkItem>
            <LinkItem href="https://twitter.com/?lang=en">
                <img src="/twitter.svg" alt="twitter" />
                <CompanyName>X</CompanyName>
            </LinkItem>
            <LinkItem href="https://www.linkedin.com/">
                <img src="/linkedin.svg" alt="linkedin" />
                <CompanyName>Linkedin</CompanyName>
            </LinkItem>
        </SocialIcons>

        </Container>
    </SecondFooter>
    </>
  )
}

export default Footer