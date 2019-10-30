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
    left: -20px;
    z-index: -1;
    height: 100vh;
  }
`

const NavBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 40px;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
  }
  ul li {
    margin-left: 25px;
    border-radius: 2px;
  }
  ul li:hover {
    border-bottom: 4px solid #53924f;
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
  background: #53924f;
  color: #ffffff;
  font-family: Roboto, Helvetica, sans-serif;
  border-radius: 50px;
  padding: 10px 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
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
