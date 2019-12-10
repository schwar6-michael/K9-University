import React from "react"
import styled from "styled-components"
import mainLogo from "../../images/main-logo.svg"
import pup1 from "../../images/pup1.png"
import leash from "../../images/leash.png"
import background from "../../images/background.png"

const TopContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
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
    min-width: 1300px;
    height: 100vh;
  }
`

const NavBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-family: Roboto, Helvetica, sans-serif;
  color: #23395d;
  font-weight: 600;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    padding-top: 20px;
  }
  ul li {
    margin-right: 25px;
    border-radius: 2px;
    padding: 0 5px;
  }
  ul li:hover {
    border-bottom: 4px solid #23395d;
    transition: 200ms all ease-out;
  }
`

const LogoContainer = styled.div`
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
      <NavBar>
        <ul>
          <li>About</li>
          <li>Trainers</li>
          <li>Methodology</li>
          <li>Contact Us</li>
        </ul>
      </NavBar>
      <img className="pup1" src={pup1} alt="puppy" />
      <LogoContainer>
        <img className="logo" src={mainLogo} />
        <BodyContent>
          New York-based dog training, turning good boys into{" "}
          <span>great ones.</span>
        </BodyContent>
        <MainButton>Schdule Training</MainButton>
      </LogoContainer>
    </TopContainer>
  )
}

export default TopSection
