import {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'

import {
  OuterContainer,
  InnerContainer,
  MeetingImage,
  Heading,
  Paragraph,
  RegisterButton,
} from './styledComponents'

import MeetingContext from '../../context/meetingContext'

class HomeView extends Component {
  state = {}

  render() {
    return (
      <MeetingContext.Consumer>
        {value => {
          const {meeting, name} = value
          return (
            <OuterContainer>
              <Navbar />
              <InnerContainer>
                {name !== '' && (
                  <>
                    <Heading color="#2563eb">Hello {name}</Heading>
                    <Paragraph color="#334155">Welcome to {meeting}</Paragraph>
                  </>
                )}

                {name === '' && (
                  <>
                    <Heading color="#334155">Welcome to Meetup</Heading>
                    <Paragraph color="#475569">
                      Please register for the topic
                    </Paragraph>
                    <Link to="/register">
                      <RegisterButton>Register</RegisterButton>
                    </Link>
                  </>
                )}

                <MeetingImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </InnerContainer>
            </OuterContainer>
          )
        }}
      </MeetingContext.Consumer>
    )
  }
}

export default HomeView
