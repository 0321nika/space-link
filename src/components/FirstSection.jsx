'use client'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin:130px auto 0;
    padding: 0 152px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width: 768px) {
        display:flex;
        flex-direction:column;
        padding: 0 40px;
    
`
const TextContainer = styled.div`
    @media (max-width: 768px) {
        margin-bottom:100px;
    }

`

const Section = styled.div`
    height:calc(100vh - 100px);
    border-radius:32px;
    border: 1px solid #101223;
    @media (max-width: 1300px) {
        padding: 0 40px;
        height:auto;
        margin-bottom:100px;
    }
`;
const Text = styled.h2`
    font-size:72px;
    max-width:485px;
    background: -webkit-linear-gradient(355deg, #B67EFD, #F088D2, #FFAD8B);
    -webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
    @media (max-width: 1300px) {
        font-size:40px;
        max-width:485px;
    }
`
const GradientText = styled.span`
    background: -webkit-linear-gradient(355deg, #B67EFD, #F088D2, #FFAD8B);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    z-index:2;
`
const Text2 =styled.span`
    font-size:72px;
    font-weight:600;
    max-width:485px;
    color:#CAD1E9;
    @media (max-width: 1300px) {
        font-size:40px;
        max-width:285px;
    }
    @media (max-width: 768px) {
        width:800px;
    }
`
const Paragraph = styled.p`
    margin-top:26px;
    font-weight:400;
    font-size:16px;
    line-height:24px;
    color:#AFB3CA;
    max-width:485px;
    @media (max-width: 1300px) {
        max-width:350px;
    }
`
const ColoredBtn = styled.button`
    min-width:175px;
    border: none;
    background: linear-gradient(to top, #21223C, #0B0B26);

    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    &::after{
        content: '';
        position: absolute;
        height: 40px;
        width: 177px;
        border-radius: 16px;
        background: linear-gradient(to right,  #B67EFD, #F088D2, #FFAD8B);
        z-index:-1;


`

const PrimaryBtn = styled.button`
border: none;
    min-width:175px;
    background: linear-gradient(to top, #21223C, #0B0B26);
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    &::after{
        content: '';
        position: absolute;
        height: 40px;
        width: 177px;
        border-radius: 16px;
        background: linear-gradient(to left, rgba(44, 45, 71, 1), rgba(68, 74, 226, 0.05));
        z-index:-1;


`
const Buttons = styled.div`
    margin-top:32px;
    width: 375px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Card1 = styled.div`
    width: 242px;
    padding: 12px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    position: absolute;
    left: -60%;
    top: 30%;
    backdrop-filter: blur(20px);
    border: 1px solid 2C2D47;

    @media (max-width: 1300px) {
        padding: 6px;
    }
   
    
`
const Card2 = styled.div`
    min-width:242px;
    border:1px solid 2C2D47;
    padding:12px;
    border-radius:20px;
    display:flex;
    align-items:center;
    position:absolute;
    left:-30%;
    top:68%;
    backdrop-filter: blur(20px);
    @media (max-width: 1300px) {
        padding: 6px;
    }
`
const Icon = styled.img`
    border:1px solid #2D2E48;
    border-radius:16px;
    padding:7px;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:20px;
`
const Input = styled.span`
    color:#AFB3CA;
    font-size:14px;
    font-weight:400;
`
const Entered = styled.span`
    color:#AFB3CA;
    font-size:16px;
    font-weight:500
`
const Image = styled.div`
        position:relative
        

`
const Icon2 = styled.img`
    border:1px solid #2D2E48;
    border-radius:16px;
    padding:7px;

`
const Img = styled.img`
@media (max-width: 1300px) {
    width:250px;
}

`


const FirstSection = () => {
  return (
    <>
        <Section>
            <Container>
            <TextContainer>
                <Text>Protect your </Text>
                <Text2>privacy online</Text2>
                <Paragraph>IdentityHub offers a suite of services to help
                    you take back control of your online identity.
                    Keep your data secure, manage your digital footprint,
                    and protect yourself from identity theft.</Paragraph>
                <div>
                    <Buttons>
                        <ColoredBtn><GradientText>start free trial</GradientText></ColoredBtn>
                        <PrimaryBtn>how it work</PrimaryBtn>
                    </Buttons>
                </div>
            </TextContainer>
                <Image>
                    <Img src="/Vector.png" alt="security" />
                    <Card1>
                        <Icon src="mail.png" alt="e-mail" />
                        <Info>
                            <Input>Email Address</Input>
                            <Entered>nija@gmail.com</Entered>
                        </Info>

                    </Card1>
                    <Card2>
                        <Icon2 src="/user.png" alt="user" />
                        <Info>
                            <Input>User name</Input>
                            <Entered>tufayel nija</Entered>
                        </Info>

                    </Card2>
                </Image>
            </Container>
        </Section>
    </>
  )
}

export default FirstSection