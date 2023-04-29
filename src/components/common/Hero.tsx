import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <HomeContainer>
      <Title>Order Taking App</Title>
      <Subtitle>Taking orders with friends made easy.</Subtitle>
      <ButtonGroup size="large">
        <Button variant="contained">Learn More</Button>
        <Button variant="outlined">Start Taking Orders</Button>
      </ButtonGroup>
    </HomeContainer>
  );
};

export default Home;
