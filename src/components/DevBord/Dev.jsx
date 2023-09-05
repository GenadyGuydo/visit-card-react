import MyButton from '../../UI/MuComponents/button/MyButton'
import MyInput from '../../UI/MuComponents/input/MyInput'
import { useState } from 'react'
import DevList from '../devCardList/devCardList'
import './Dev.css'
import test_img from './test_img.png'

import FileUploader from '../fileUploader/fileUploader'
import MyModal from './../../UI/MuComponents/modal/Mymodal'

const DevContent = () => {
  const [devUser, setDevUser] = useState([
    {
      name: 'Genady',
      work: 'Front-End developer',
      Id: 1,
      tech: ['HTML', 'CSS', 'JavaScrip', 'React'],
      imageSource: test_img
    }
  ])

  let arrTech = [
    'C',
    'C++',
    'C#',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'ReactNative',
    'Vue',
    'Angular',
    'Node.js',
    'Redux',
    'Python',
    'Jawa',
    'Ruby',
    'MongoDB',
    'Swift',
    'Rust'
  ]

  const [name, setDevName] = useState('')
  const [work, setDevWork] = useState('')
  const [tech, setTech] = useState([])
  const [imageSource, setImageSource] = useState(null)

  const addNewCard = (e) => {
    e.preventDefault()

    const card = {
      Id: Date.now(),
      name,
      work,
      tech,
      imageSource
    }
    if (card.name === '' || card.name === Number) {
      return false, alert('enter your name')
    }
    if (card.work === '' || card.name === Number) {
      return false, alert('enter your work')
    }
    if (card.tech === '') {
      return false
    }
    setDevUser([...devUser, card])
    setModal(false)
  }

  const pushTech = (item) => {
    setTech([...new Set([...tech, item])])
  }

  const handleLoadImage = (source) => {
    setImageSource(source)
  }
  const [modal, setModal] = useState(false)

  return (
    <div className="dev-wrapper">
      <div className="dev-header-container">
        <div className="dev_logo_container">
          <div className="dev-logo">
            <p className="logo">DevBoard</p>
          </div>
        </div>
        <div className="dev_button_crate_container">
          <button className="create_user" onClick={() => setModal(true)}>
            {' '}
            create new developer
          </button>
        </div>
      </div>
      <div className="dev-container">
        <MyModal visible={modal} setVisible={setModal}>
          <MyInput
            value={name}
            onChange={(e) => setDevName(e.target.value)}
            type="text"
            placeholder="change your name"
          />
          <MyInput
            value={work}
            onChange={(e) => setDevWork(e.target.value)}
            type="text"
            placeholder="change your work"
          />

          <div className="tech-title">Choise your technologies</div>
          <div className="tech-list">
            {arrTech.map((item, index) => (
              <div key={index} onClick={() => pushTech(item)}>
                {item}
              </div>
            ))}
          </div>
          <FileUploader onLoadImage={handleLoadImage} />
          <MyButton onClick={addNewCard}> Save </MyButton>
        </MyModal>
        <div className="dev_card__wrap_container">
          <DevList devUser={devUser} />
        </div>
      </div>
    </div>
  )
}

export default DevContent
