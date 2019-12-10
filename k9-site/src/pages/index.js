import React from "react"
import TopSection from "../components/TopSection/TopSection"
import TestimonySection from "../components/TestimonySection/TestimonySection"
import ServicesSection from "../components/ServicesSection/ServicesSection"
import TrainerSection from "../components/TrainerSection/TrainerSection"
import ContactSection from "../components/ContactSection/ContactSection"

const IndexPage = () => {
  return (
    <>
      <TopSection />
      <TrainerSection />
      <ServicesSection />
      <TestimonySection />
      {/* <ContactSection /> */}
    </>
  )
}

export default IndexPage
