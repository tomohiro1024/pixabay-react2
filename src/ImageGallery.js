import React from 'react'
import "./ImageGrallery.css";

const ImageGallery = ({ fetchData }) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchData.map((data) => (
          <div className="image" key={data.id}>
            <img src={data.largeImageURL}
                alt=''/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery