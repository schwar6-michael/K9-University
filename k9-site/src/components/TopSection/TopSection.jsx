import React from "react"
import styled from "styled-components"
import mainLogo from "../../images/main-logo.svg"
import pup1 from "../../images/pup1.png"
import background from "../../images/background.png"

const TopContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .pup1 {
    position: absolute;
    top: 50%;
    right: 30px;
    height: 550px;
    transform: translateY(-50%);
    z-index: -1;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    opacity: 0.65;
    height: 100vh;
    min-width: 1150px;
  }
  @media (max-width: 900px) {
    .pup1 {
      position: absolute;
      top: 50%;
      right: 30%;
      height: 400px;
      transform: translateY(-50%);
      z-index: -1;
    }
  }
  @media (max-width: 667px) {
    .pup1 {
      position: absolute;
      top: 50%;
      right: 20%;
      height: 400px;
      transform: translateY(-50%);
      z-index: -1;
    }
  }
  @media (max-width: 400px) {
    .pup1 {
      position: absolute;
      top: 50%;
      right: 10%;
      height: 400px;
      transform: translateY(-50%);
      z-index: -1;
    }
  }
`

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  animation: fadeInDown 1.5s ease-out;
  width: 400px;
  .logo {
    margin-bottom: 0;
  }
  img {
    width: 100%;
  }
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (max-width: 667px) {
    width: 300px;
    align-items: center;
    text-align: center;
    padding: 0 30px;
  }
`

const BodyContent = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 5px;
  margin-top: 5px;
  span {
    color: #23395d;
    font-weight: 600;
  }
`

const MainButton = styled.button`
  background: #23395d;
  border: 1px solid #23395d;
  color: #ffffff;
  font-family: Roboto, Helvetica, sans-serif;
  border-radius: 4px;
  outline: none;
  padding: 10px 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.22);
  transition: 200ms all ease-out;
  cursor: pointer;
  width: 100%;
  &:hover {
    transform: scale(1.01);
    background: hsl(217, 45%, 38%);
    border: 1px solid hsl(217, 45%, 38%);
  }
`

const TopSection = () => {
  return (
    <TopContainer>
      <img className="background" src={background} alt="background" />
      <img className="pup1" src={pup1} alt="puppy" />
      <LogoContainer>
        <img className="logo" src={mainLogo} alt="logo" />
        <BodyContent>
          New York-based dog training, turning good boys into{" "}
          <span>great ones.</span>
        </BodyContent>
        <MainButton>Schedule Training</MainButton>
      </LogoContainer>
    </TopContainer>
  )
}

export default TopSection
