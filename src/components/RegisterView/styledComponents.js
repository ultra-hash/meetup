import styled from 'styled-components'

export const OuterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const InnerContainer = styled.div`
  display: flex;
  margin: auto;
`

export const RegisterImg = styled.img`
  width: 80%;
  max-width: 400px;
`

export const Heading = styled.h1``
export const Paragraph = styled.p`
  color: red;
  padding: 0;
  margin: 0;
`

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FormLabel = styled.label`
  font-weight: bold;
  color: #64748b;
`
export const FormSelectInput = styled.select`
  padding: 10px;
`
export const FormTextInput = styled.input`
  padding: 10px;
`

export const RegisterNowBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 15px;
  outline: none;
  border: 0;
  border-radius: 5px;
  align-self: flex-start;
`
