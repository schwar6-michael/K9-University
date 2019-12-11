import React, { useRef } from "react"
import styled from "styled-components"
import TopSection from "../components/TopSection/TopSection"
import TestimonySection from "../components/TestimonySection/TestimonySection"
import ServicesSection from "../components/ServicesSection/ServicesSection"
import TrainerSection from "../components/TrainerSection/TrainerSection"
import ContactSection from "../components/ContactSection/ContactSection"

const AppWrapper = styled.div`
  scroll-behavior: smooth;
`

const NavBar = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  font-family: Roboto, Helvetica, sans-serif;
  color: #23395d;
  font-weight: 600;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 40px;
  cursor: pointer;
  height: 60px;
  z-index: 3;
  li {
    margin: 0;
    margin-right: 25px;
    padding: 0 2px;
  }
  li:hover {
    border-bottom: 4px solid #23395d;
    transition: 200ms all ease-out;
  }
  @media (max-width: 667px) {
    justify-content: center;
    padding: 0 10px;
    margin-left: 0;
    margin-bottom: 25vh;
    li {
      margin: 0;
      margin-right: 10px;
      padding: 0 2px;
    }
  }
`

const IndexPage = () => {
  const trainerSection = useRef(null)
  const servicesSection = useRef(null)
  const contactSection = useRef(null)

  const scrollToRef = ref =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" })

  return (
    <AppWrapper>
      <NavBar>
        <li onClick={() => scrollToRef(trainerSection)}>Meet Marlon</li>
        <li onClick={() => scrollToRef(servicesSection)}>Services</li>
        <li onClick={() => scrollToRef(contactSection)}>Contact Us</li>
      </NavBar>
      <TopSection />
      <div ref={trainerSection}>
        <TrainerSection />
      </div>
      <div ref={servicesSection}>
        <ServicesSection />
      </div>
      <div>
        <TestimonySection />
      </div>
      <div ref={contactSection}>
        <ContactSection />
      </div>
    </AppWrapper>
  )
}

export default IndexPage
