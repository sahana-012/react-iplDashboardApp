// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    result,
    // manOfTheMatch,
    id,
    // date,
    // venue,
    competingTeam,
    competingTeamLogo,
    // firstInnings,
    // secondInnings,
    matchStatus,
  } = recentMatchDetails

  const matchStatusClass = matchStatus === 'Won' ? 'won-green' : 'lost-red'

  return (
    <li className="list-team-item-container" key={id}>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="list-team-logo"
      />
      <p className="recent-team-para">{competingTeam}</p>
      <p className="recent-team-para">{result}</p>
      <p className={`${matchStatusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
