import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(animated.h1)`
  font-size: 4rem;
`;

const Subtitle = styled(animated.h2)`
  font-size: 2rem;
`;

const ButtonWrapper = styled(animated.div)`
  display: flex;
  margin-top: 2rem;
`;

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const titleAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
    config: { duration: 1000 },
  });

  const subtitleAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
    config: { duration: 1000 },
  });

  const buttonGroupAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1500,
    config: { duration: 1000 },
  });

  return (
    <HomeContainer>
      <Title style={titleAnimation}>Order Taking App</Title>
      <Subtitle style={subtitleAnimation}>
        Taking orders with friends made easy.
      </Subtitle>
      <ButtonWrapper style={buttonGroupAnimation}>
        <ButtonGroup size="large">
          <Button variant="contained">Learn More</Button>
          <Button variant="outlined">Start Now</Button>
        </ButtonGroup>
      </ButtonWrapper>
    </HomeContainer>
  );
};

export default Home;
