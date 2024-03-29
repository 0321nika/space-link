"use client";

import React, { useState } from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = styled.header`
    padding-top:60px;
    border: 1px solid #101223;
    border-radius: 32px
`

const Container = styled.div`
    padding: 0 152px;
    margin: auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width: 1300px) {
        padding: 0 40px;
    }

    
`;
const Logo =styled.a`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Name = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-left: 8px;
    color: #CAD1E9;
    @media (max-width: 1300px) {
        font-size: 14px;
    }
    @media (max-width: 768px) {
        font-size: 25px;
    }
`
const Nav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style:none;
    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        width:100%;
        height:100vh;
        z-index:5;
        flex-direction: column;
        background-color: #1F2035;
        padding: 20px;
        position: absolute;
        left:0;
        top: 0;
    }
`
const Item = styled.li`
    font-size:14px;
    font-weight:500;
    margin:0 40px;
    color:#CAD1E9;

    @media (max-width: 1300px) {
        margin:0 15px;
    }
    @media (max-width: 768px) {
        margin:30px 0;
    }
`
const Text =styled.a`
    color:#CAD1E9;
    @media (max-width: 768px) {
        font-size:50px;
    }
`
const Button =styled.button`
    border: none;
    background: linear-gradient(to top, #21223C, #0B0B26);
    color: #CAD1E9;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }

    &::after{
        content: '';
        position: absolute;
        height: 40px;
        width: 138px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        background: linear-gradient(to left, rgba(78, 78, 105, 1), rgba(78, 78, 105, 0));
        z-index:-1;

        @media (max-width: 1300px) {
            padding: 5px 7px;
            background:none;
        }

    

`
const BurgerMenu = styled.div`
    display: none;
    font-size:40px;
    color:#CAD1E9;
    @media (max-width: 768px) {
        display: block;
        cursor: pointer;
    }
`
const CloseButton = styled.div`
    display:none;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size:60px;
    color:#CAD1E9;
    cursor: pointer;
    @media (max-width: 768px) {
        display: block;
        cursor: pointer;
    }
`;


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
  return (
    <>
        <Header>
            <Container>
                <Logo href='/'>
                    <Image src="/logo.svg" width={32} height={32} alt="IdentityHub" />
                    <Name>IdentityHub</Name>
                </Logo>
                    <BurgerMenu onClick={toggleMenu}>
                        <RxHamburgerMenu />
                    </BurgerMenu>
                    <Nav isOpen={isOpen}>
                        <CloseButton onClick={closeMenu}>
                            <IoCloseOutline />
                        </CloseButton>
                        <Item><Text href="#">How it works</Text></Item>
                        <Item><Text href="#">Features</Text></Item>
                        <Item><Text href="#">Pricing</Text></Item>
                        <Item><Text href="#">Partners</Text></Item>
                        <Item><Text href="#">About us</Text></Item>
                    </Nav>                
                <Button>
                    Start free trial
                </Button>
            </Container>
        </Header>
    </>
  )
}

export default Navbar