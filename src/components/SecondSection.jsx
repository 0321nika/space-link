'use client'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin:auto ;
    display:flex;
    justify-content:space-between;
    padding: 0 152px;
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
const Image = styled.img`
    @media (max-width: 1300px) {
        width:400px;
    }
    @media (max-width: 768px) {
        width:300px;
        margin-top:60px;
    }
    
`

const SecondSection = () => {
  return (
    <>
        <div>
            <Container>
                <div>
                    <Title>We remove your private information from the online</Title>
                    <Paragraph>People-search sites use government records and online
                         databases to create detailed profiles of virtually every citizen.
                    </Paragraph>
                    <Paragraph>
                        They then sell this sensitive information online, where it can 
                        end up in the hands of hackers, identity thieves, and stalkers.
                    </Paragraph>
                    <Paragraph>
                        ReputationDefender stops people-search sites by opting our clients out of them.
                    </Paragraph>
                </div>
                <Image src="/vector2.svg" alt="vector" />
            </Container>
        </div>
    </>
  )
}

export default SecondSection