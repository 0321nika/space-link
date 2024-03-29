"use client"
import React from 'react'
import styled from 'styled-components';

const Heading = styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      margin:152px 0 64px;
      text-align:center;
`
const Title = styled.div`
      font-weight:500;
      font-size:56px;
      line-height:62px;
      color: #CAD1E9;
      margin-bottom:16px;
      @media (max-width: 768px) {
        font-size:40px;
        text-align: center;
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

const HeadingTexts = ({title,text}) => {
  return (
    <Heading>
        <Title >{title}</Title>
        <Paragraph>{text}</Paragraph>
    </Heading>
  )
}

export default HeadingTexts