import {Component} from 'react'
import Navbar from '../Navbar'
import {
  OuterContainer,
  InnerContainer,
  RegisterImg,
  LeftContainer,
  RightContainer,
  FormContainer,
  FormItemContainer,
  FormTextInput,
  FormLabel,
  FormSelectInput,
  Heading,
  Paragraph,
  RegisterNowBtn,
} from './styledComponents'

import MeetingContext from '../../context/meetingContext'

class RegisterView extends Component {
  state = {nameValue: '', meeting: '', showErrorMsg: false, errorMsg: ''}

  render() {
    return (
      <MeetingContext.Consumer>
        {value => {
          const {onRegister, meetingTopicList, name} = value
          const {errorMsg, showErrorMsg, nameValue, meeting} = this.state

          if (meeting === '') {
            this.setState({meeting: meetingTopicList[0].id})
          }

          if (name !== '') {
            const {history} = this.props
            history.replace('/')
          }

          const updateMeeting = event => {
            this.setState({meeting: event.target.value})
          }

          const updateName = event => {
            this.setState({nameValue: event.target.value})
          }

          const onRegisterNow = event => {
            event.preventDefault()
            if (nameValue !== '') {
              const item = meetingTopicList.find(topic => topic.id === meeting)
              onRegister(nameValue, item.displayText)
            } else {
              this.setState({
                errorMsg: 'Please enter your name',
                showErrorMsg: true,
              })
            }
          }

          return (
            <OuterContainer>
              <Navbar />
              <InnerContainer>
                <LeftContainer>
                  <RegisterImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                </LeftContainer>
                <RightContainer>
                  <FormContainer onSubmit={onRegisterNow}>
                    <Heading>Let us join</Heading>
                    <FormItemContainer>
                      <FormLabel htmlFor="name">NAME</FormLabel>
                      <FormTextInput
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={nameValue}
                        onChange={updateName}
                      />
                    </FormItemContainer>
                    <FormItemContainer>
                      <FormLabel htmlFor="select">TOPICS</FormLabel>
                      <FormSelectInput
                        id="select"
                        value={meeting}
                        onChange={updateMeeting}
                      >
                        {meetingTopicList.map(item => (
                          <option key={item.id} value={item.id}>
                            {item.displayText}
                          </option>
                        ))}
                      </FormSelectInput>
                    </FormItemContainer>
                    <RegisterNowBtn type="submit">Register Now</RegisterNowBtn>
                  </FormContainer>
                  {showErrorMsg && <Paragraph>{errorMsg}</Paragraph>}
                </RightContainer>
              </InnerContainer>
            </OuterContainer>
          )
        }}
      </MeetingContext.Consumer>
    )
  }
}

export default RegisterView
