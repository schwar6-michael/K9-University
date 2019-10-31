import React from "react"
import styled from "styled-components"
import paw from "../../images/paw.svg"
import serviceBlob from "../../images/service-blob.png"

const ServicesContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
`

const SectionTitle = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  color: #53924f;
  text-align: center;
  margin-bottom: 150px;
  font-size: 2em;
`

const ServiceBox = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  .greenPaw {
    width: 50%;
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
    opacity: 0.9;
  }
`

const ServiceTitle = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1em;
  margin-bottom: 30px;
`

const ServiceBody = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1em;
  margin-bottom: 30px;
`

const BoxesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
  .serviceBlob {
    position: absolute;
    top: -30px;
    left: 0;
    z-index: -1;
    width: 100%;
  }
`

const ScheduleButton = styled.button`
  height: 40px;
  width: 200px;
  color: #ffffff;
  background: #000000;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1em;
  border-radius: 5px;
`

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <SectionTitle>Our Services</SectionTitle>
      <BoxesContainer>
        <img className="serviceBlob" src={serviceBlob} />
        <ServiceBox>
          <img className="greenPaw" src={paw} />
          <ServiceTitle>Training</ServiceTitle>
          <ServiceBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ServiceBody>
          <ScheduleButton>Schedule</ScheduleButton>
        </ServiceBox>
        <ServiceBox>
          <img className="greenPaw" src={paw} />
          <ServiceTitle>Day Care</ServiceTitle>
          <ServiceBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ServiceBody>
          <ScheduleButton>Schedule</ScheduleButton>
        </ServiceBox>
        <ServiceBox>
          <img className="greenPaw" src={paw} />
          <ServiceTitle>Walking</ServiceTitle>
          <ServiceBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ServiceBody>
          <ScheduleButton>Schedule</ScheduleButton>
        </ServiceBox>
      </BoxesContainer>
    </ServicesContainer>
  )
}

export default ServicesSection
