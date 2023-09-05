import DevCard from '../dev-card/dev-card'
import './devCardList.css'

const DevList = ({ devUser }) => {
  return (
    <div className="some_wrap">
      <div className="dev_card_some_wrapper">
        {devUser.map((dev) => (
          <DevCard dev={dev} key={dev.Id} />
        ))}
      </div>
    </div>
  )
}

export default DevList
