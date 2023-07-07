import {
  OuterContainer,
  NotFoundImage,
  Heading,
  Paragraph,
} from './styledComponents'

const NotFoundView = () => (
  <OuterContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Paragraph>
      We are sorry, the page you requested could not be found.
    </Paragraph>
  </OuterContainer>
)

export default NotFoundView
