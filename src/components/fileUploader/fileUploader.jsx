import React, { useState } from 'react'
import './fileUploader.css'
import MyInput from '../../UI/MuComponents/input/MyInput'

const FileUploader = ({ onLoadImage }) => {
  const [image, setImage] = useState()
  const [imageURL, setImageURL] = useState('no_photo.jpg')

  const fileReader = new FileReader()

  fileReader.onloadend = () => {
    const url = fileReader.result ? fileReader.result : 'no_photo.jpg'
    console.log('url', url)
    setImageURL(url)
    onLoadImage(url)
  }

  const handleOnChange = (event) => {
    event.preventDefault()
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0]
      setImage(file)
      fileReader.readAsDataURL(file)
    }
  }

  const handleDrop = (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      setImage(event.dataTransfer.files[0])
      fileReader.readAsDataURL(event.dataTransfer.files[0])
    }
  }

  const handleDragEmpty = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <form className="file-uploader">
      <label htmlFor="file-loader-button" className="file-uploader__custom-button">
        Load file
      </label>
      <MyInput
        id="file-loader-button"
        type="file"
        className="file-uploader__upload-button"
        onChange={handleOnChange}
      />
      <img
        src={imageURL}
        className="file-uploader__preview"
        alt="preview"
        onDrop={handleDrop}
        onDragEnter={handleDragEmpty}
        onDragOver={handleDragEmpty}
      />
      <div className="file-uploader__file-name">{image ? image.name : ''}</div>
    </form>
  )
}

export default FileUploader
