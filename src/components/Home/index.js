// Write your code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamList: [],
  }

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const newList = teams.map(eachValue => ({
      name: eachValue.name,
      id: eachValue.id,
      teamImageUrl: eachValue.team_image_url,
    }))
    this.setState({teamList: newList, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state

    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div testid="loader" className="loader-oval">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="logo-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo-image"
              />
              <h1 className="dash-heading">IPL Dashboard</h1>
            </div>
            <div className="team-list-container">
              <ul className="list-elements">
                {teamList.map(eachTeam => (
                  <TeamCard key={eachTeam.id} teamItem={eachTeam} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Home
