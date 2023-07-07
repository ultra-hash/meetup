import styled from 'styled-components'

export const OuterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const InnerContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const MeetingImage = styled.img`
  width: 80%;
  max-width: 500px;
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 15px;
  outline: none;
  border: 0;
  border-radius: 5px;
  margin: 10px;
`

export const Heading = styled.h1`
  margin: 0;
  color: ${props => props.color && props.color};
`
export const Paragraph = styled.p`
  color: ${props => props.color && props.color};
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
`
