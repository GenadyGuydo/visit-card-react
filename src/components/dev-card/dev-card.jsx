import React, { Fragment } from 'react'
import './devCard.css'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlineRight
} from 'react-icons/ai'
import { useState } from 'react'

const DevCard = (props) => {
  const [dataActive, setDataActive] = useState(false)

  const arrayVariable = [props.dev.tech]
  const hacArray = arrayVariable.flat()

  return (
 
   <div className="dev-card-wrapper ">
      <div className="box-card-container center">
        <img className="dev-img" src={props.dev.imageSource} alt="#" />

        <div className="dev-description-container ">
          <p className="dev-name">{props.dev.name}</p>
          <p className="dev-skils">{props.dev.work}</p>
        </div>
        <div
          className="arrow-container center"
          onClick={() => {
            setDataActive(true)
          }}
        >
          <AiOutlineRight className="fas" />
        </div>
        <div className={dataActive ? 'inside-container active' : 'inside-container off'}>
          <p className="inside-container-title">Skills</p>
          <div className="hard-skils">
            <Fragment>
              {hacArray.map((item) => (
                <div key={item.id}>{item}</div>
              ))}
            </Fragment>
          </div>
          <div className="icons-social">
            <AiFillGithub className="fab" />
            <AiFillInstagram className="fab" />
            <AiFillLinkedin className="fab" />
          </div>
          <div
            className="cancel center"
            onClick={() => {
              setDataActive(false)
            }}
          >
            <AiOutlineClose className="fas" />
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default DevCard
