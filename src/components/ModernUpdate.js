import React from "react";
import styled from "styled-components";
import logo from './logo.svg';

const Container = styled.section`
  background: #010043;
  box-sizing: border-box;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  height: 100vh;
  width: 100vw;
  color: white;
  
  padding-left: 2rem;
  
  h1, p {
    color: #FFC9F3;
    text-decoration: underline;
  }
  
  img {
    height: 12rem;
  }
`

const ModernUpdate = ()  => {
    return(
        <Container>
            <p>Hello,<br /> my name is</p>
            <img alt="My Logo" src={logo} />
            <p>Software Developer</p>
        </Container>
    )
}

export default ModernUpdate;