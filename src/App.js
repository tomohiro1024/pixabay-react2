import logo from './logo.svg';
import './App.css';
import ImageGallery from "./ImageGallery";
import { useRef, useState } from 'react';

function App() {
  const [fetchData, setFetchData] = useState([]);
  // テキストフィールドで入力された値を取得している
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ref.current.value)

    // API URL
    const endpointURL =  `https://pixabay.com/api/?key=28196899-8a3428ad749b0c3fa202e73a6&q=${ref.current.value}&image_type=photo`

    // API叩く
    fetch(endpointURL)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setFetchData(data)
      })

  }

  return (
  <div className="container">
    <h2>My Pixabay</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type='text' placeholder='画像を探す' ref={ref}></input>
    </form>
    <ImageGallery fetchData={fetchData} />
  </div>
  )
}

export default App;
