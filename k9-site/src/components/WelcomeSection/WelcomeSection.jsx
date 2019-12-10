import React from "react"
import styled from "styled-components"
import mainLogo from "../../images/main-logo.svg"
import walkingDog from "../../images/walking-dog.svg"
import walkingDog2 from "../../images/walking-dog-2.png"
import leftSideBlob from "../../images/left-blob-main-section.svg"

const WelcomeContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding-left: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  .leftSideBlob {
    position: absolute;
    top: 0;
    left: -25px;
    z-index: -1;
    height: 100vh;
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
  }
`

const NavBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  padding: 0 3%;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    padding-top: 20px;
  }
  ul li {
    margin-left: 25px;
    border-radius: 2px;
    padding: 0 5px;
  }
  ul li:hover {
    border-bottom: 4px solid #53924f;
    transition: 200ms all ease-out;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 15%;
  animation: fadeInDown 1.5s ease-out;
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
`

const BodyContent = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 1.3em;
  font-weight: 600;
  margin-bottom: 20px;
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
  &:hover {
    transform: scale(1.01);
    background: hsl(116, 30%, 34%);
    border: 1px solid hsl(116, 30%, 34%);
  }
`

const WalkingImageContainer = styled.div`
  width: 50%;
  animation: fadeInRight 1.5s ease-out;
  img {
    width: 100%;
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(150px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const WelcomeSection = () => {
  return (
    <WelcomeContainer>
      <NavBar>
        <ul>
          <li>About</li>
          <li>Trainers</li>
          <li>Methodology</li>
          <li>Contact Us</li>
        </ul>
      </NavBar>
      <img className="leftSideBlob" src={leftSideBlob} />
      <LogoContainer>
        <img src={mainLogo} />
        <BodyContent>New York-based dog training by experts</BodyContent>
        <MainButton>Schdule Training</MainButton>
      </LogoContainer>
      <WalkingImageContainer>
        <img src={walkingDog2} />
      </WalkingImageContainer>
    </WelcomeContainer>
  )
}

export default WelcomeSection
