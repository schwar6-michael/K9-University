import React, { useState } from "react"
import styled from "styled-components"
import cuteDog from "../../images/cute-dog-flip.png"
import backgroundInverse from "../../images/background-inverse.png"

const ContactContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 540px;
  .cuteDog {
    position: absolute;
    top: 80px;
    left: -3%;
    width: 45%;
    z-index: -1;
  }
  .inverseBackground {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -3;
    opacity: 0.65;
    height: 500px;
  }
`
const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
  width: ${props => props.width || "100%"};
  margin: 10px 0;
  border: 1px solid black;
  font-family: Roboto, Helvetica, sans-serif;
  padding: 5px;
  outline: none;
  border-radius: 3px;
  font-size: 16px;
`
const TextArea = styled.textarea`
  width: 100%;
  margin: 10px 0;
  height: 100px;
  padding: 5px;
  border: 1px solid black;
  font-family: Roboto, Helvetica, sans-serif;
  border-radius: 3px;
  font-size: 16px;
`

const FormTitle = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1.5em;
`

const Form = styled.form`
  width: 450px;
`

const SectionTitle = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  color: #23395d;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  margin-top: -40px;
`

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  background: #23395d;
  color: #ffffff;
  border: none;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  &:hover {
    transform: scale(1.01);
    background: hsl(217, 45%, 38%);
    border: 1px solid hsl(217, 45%, 38%);
  }
`

const BottomNav = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #ffffff;
  z-index: -2;
  box-shadow: 0 0 1px rgba(34, 25, 25, 0.4);
`

const ContactSection = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (event, setState) => {
    setState(event.target.value)
  }

  return (
    <ContactContainer>
      <SectionTitle>Still Not Sure? Let's Chat...</SectionTitle>
      <img className="cuteDog" src={cuteDog} alt="cute dog" />
      <img
        className="inverseBackground"
        src={backgroundInverse}
        alt="background"
      />
      <Form>
        <HorizontalContainer>
          <Input
            placeholder="First Name"
            name="setFirstName"
            width="48%"
            onChange={e => handleChange(e, setFirstName)}
          />
          <Input
            placeholder="Last Name"
            width="48%"
            name="setLastName"
            onChange={e => handleChange(e, setLastName)}
          />
        </HorizontalContainer>
        <Input
          placeholder="Email"
          name="setEmail"
          onChange={e => handleChange(e, setEmail)}
        />
        <TextArea
          placeholder="Message"
          name="setMessage"
          onChange={e => handleChange(e, setMessage)}
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
      <BottomNav></BottomNav>
    </ContactContainer>
  )
}

export default ContactSection
