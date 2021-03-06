import React from "react"
import styled from "styled-components"
import marlon from "../../images/marlon.jpg"
import Fade from "react-reveal/Fade"

const TrainerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const Image = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  width: 400px;
  border-radius: 400px;
  overflow: hidden;
  img {
    border-radius: 400px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 667px) {
    height: 300px;
    width: 300px;
  }
`

const Name = styled.span`
  margin-top: 30px;
  font-family: Roboto, Helvetica, sans-serif;
  color: #53924f;
  font-weight: 600;
  line-height: 40px;
  font-size: 2em;
  margin-bottom: 30px;
  @media (max-width: 667px) {
    text-align: center;
  }
`

const TrainerBio = styled.span`
  margin-top: 30px;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 300;
  line-height: 40px;
  font-size: 1.2em;
  text-align: center;
  span {
    color: #53924f;
    font-weight: 900;
  }
  @media (max-width: 667px) {
    font-size: 18px;
  }
`

const Underline = styled.div`
  width: 400px;
  height: 2px;
  background: #808080;
  opacity: 0.3;
  margin-bottom: 10px;
  border-radius: 10px;
  @media (max-width: 667px) {
    width: 250px;
  }
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10%;
`

const TrainerSection = () => {
  return (
    <Fade right>
      <TrainerContainer>
        <ProfileContainer>
          <Image>
            <img src={marlon} alt="marlon trainer" />
          </Image>
          <Name>Marlon Leon—Master Dog Trainer</Name>
          <Underline></Underline>
          <TrainerBio>
            Hi, my name is Marlon Leon. And I've been around and working with
            dogs <span>my whole life.</span>
            <br></br>
            <br></br>
            Since the age of 18, I have been working in animal shelters and
            veterinary offices learning how to <span>handle</span> all types of
            dogs, even ones with aggressive and{" "}
            <span>seemingly untrainable behavior.</span>
            <br></br>
            <br></br>
            These are the dogs that made my heart sink. They made me realize who
            I was, and provided me with my lifelong purpose of helping them and
            their owners live happier, better lives.
            <br></br>
            <br></br>
            Loving dogs is <span>easy</span>, but communicating with them can be{" "}
            <span>challenging</span>, especially because they can't let you know
            if something hurts them or if they don't feel well.
            <br></br>
            <br></br>
            Understanding both aspects of a dog's behavior and a dog's health is
            truly the first step to my training process. Dogs want love and want
            to be loved. They form bonds with people based on their trust of
            people. The way that I train begins with me creating a bond, and
            letting the dog know - that I am NOT the enemy. Once you have formed
            this kind of bond with a dog, it creates a positive learning
            environment that will end in success.
          </TrainerBio>
        </ProfileContainer>
      </TrainerContainer>
    </Fade>
  )
}

export default TrainerSection
