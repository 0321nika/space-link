"use client"
import React from 'react'
import styled from 'styled-components';
import HeadingTexts from './HeadingTexts';

const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  @media (max-width: 768px) {
    display:grid;
  }
`

const Container = styled.div`
    margin:auto ;
    padding: 0 152px;
    @media (max-width: 1300px) {
      padding: 0 40px;
  }
`
const BtnContainer =styled.div`
    display:flex;
    justify-content:center;
`
const Buttons = styled.div`
    border:1px solid #1B1C36;
    padding:4px;
    border-radius:16px;
    bacground: #2C2D47;
    display: flex;
`
const Button =styled.button`
    border:1px solid #1B1C36;
    background: linear-gradient(to top, #21223C, #0B0B26);
    color: #CAD1E9;
    padding: 14px 25px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 12px;
`
const Button2 =styled.div`
  border:none;
  background: transparent;
  color: #AFB3CA;
  padding: 14px 25px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 12px;
`

const CardContainer = styled.div`
  border-radius: 32px;
  padding: 52px  20px;
  margin: 10px;
  margin-top:62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  background: linear-gradient(to left, #21223C, #0B0B26);
  border: 1px solid rgba(27, 28, 54, 0.16);
  z-index:-5;
  
`


const Title = styled.h2`
  font-size: 20px;
  color:#CAD1E9;
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-size: 56px;
  font-weight:500;
  margin-bottom: 5px;
  color:#CAD1E9;
`;
const Time = styled.p`
    color:#CAD1E9;
    font-size:16px;
    font-weight:500;
    margin-bottom:32px;
`
const List = styled.ul`
  list-style-type: none;
  text-align: left;
  margin-bottom:36px;
`;

const ListItem = styled.li`
  display:flex;
  align-items:center;
  margin-bottom: 15px;
  color:#CAD1E9;
`;
const ListItemText = styled.p`
  margin-left:12px;
`


const CardButton = styled.button`
  background:linear-gradient(to bottom, rgba(27, 28, 54, 0.16) , rgba(112, 113, 122, 0.16));
  color:white;
  width:100%;
  border: 1px solid rgba(44, 45, 71, 1);
  border-radius: 12px;
  padding: 12px 92px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 12px 52px;
  }
`
const CardColoredButton = styled.button`
    width:100%;
    border: none;
    background: linear-gradient(to top, #21223C, #0B0B26);
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 12px;
    padding: 12px 92px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      padding: 12px 52px;
    }
    
    &::after{
        content: '';
        position: absolute;
        height: 44px;
        width: 300px;
        border-radius: 12px;
        background: linear-gradient(to right,  #B67EFD, #F088D2, #FFAD8B);
        z-index:-1;
        @media (max-width: 768px) {
          width: 222px;
        }
        
`

const Save = styled.p`
    color: rgba(175, 179, 202, 1);
    font-size:16px;
    font-weight:500;
    margin-top:12px;
`
const Text = styled.span`
    background: -webkit-linear-gradient(355deg, #B67EFD, #F088D2, #FFAD8B);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    z-index:2320;
`

const SeventhSection = () => {
  return (
    <Container>
        <HeadingTexts title={"Pricing"} text="You can stay on the $56 plan until you have enough active user to justify managing their data or you start settings things."/>
        <BtnContainer>
          <Buttons>
            <Button>billed yearly -20%</Button>
            <Button2>billed monthly</Button2>
          </Buttons>
        </BtnContainer>
        <PricingContainer>
        <CardContainer>
          <Title>Start here</Title>
          <Price>$0</Price>
          <Time>Per month</Time>
          <List>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Type of threat</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Online presence</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Access to all modules</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark.svg" alt="checkmark" />
              <ListItemText>Notability</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark.svg" alt="checkmark" />
              <ListItemText>Optimize existing websites</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark.svg" alt="checkmark" />
              <ListItemText>Search autocomplete</ListItemText>
            </ListItem>
          </List>
          <CardButton>Request access</CardButton>
          <Save>It’s free so why not</Save>
        </CardContainer>
          <CardContainer style={{padding: "80px  20px;"}}>
            <Title>Single</Title>
            <Price><Text>$56</Text></Price>
            <Time>Per month</Time>
            <List>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Type of threat</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Online presence</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Access to all modules</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Notability</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Optimize existing websites</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Search autocomplete</ListItemText>
            </ListItem>
          </List>
            <CardColoredButton><Text>Request access</Text></CardColoredButton>
            <Save>Save $23per year</Save>
          </CardContainer>
        <CardContainer>
          <Title>Family</Title>
          <Price>$124</Price>
          <Time>Per month</Time>
          <List>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Type of threat</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Online presence</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Access to all modules</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Notability</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Optimize existing websites</ListItemText>
            </ListItem>
            <ListItem>
              <img src="/checkmark2.svg" alt="checkmark" />
              <ListItemText>Search autocomplete</ListItemText>
            </ListItem>
          </List>
          <CardButton>Request access</CardButton>
          <Save>Save $23per year</Save>
        </CardContainer>
    </PricingContainer>
    </Container>
  )
}

export default SeventhSection