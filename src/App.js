import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import RegisterView from './components/RegisterView'
import HomeView from './components/HomeView'
import NotFoundView from './components/NotFoundView'

import MeetingContext from './context/meetingContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    meeting: topicsList[0].displayText,
    meetingTopicList: topicsList,
    name: '',
  }

  onRegister = (name, meeting) => {
    this.setState({name, meeting})
  }

  render() {
    const {meeting, meetingTopicList, name} = this.state
    return (
      <MeetingContext.Provider
        value={{
          meeting,
          meetingTopicList,
          name,
          onRegister: this.onRegister,
        }}
      >
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/register" exact component={RegisterView} />
          <Route path="/not-found" exact component={NotFoundView} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetingContext.Provider>
    )
  }
}
export default App
