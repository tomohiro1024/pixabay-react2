import logo from './logo.svg';
import './App.css';
import ImageGallery from "./ImageGallery";
import { useRef, useState } from 'react';

function App() {
  const [inputText, setInputText] = useState("")
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ref.current.value)
  }

  return (
  <div className="container">
    <h2>My Pixabay</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type='text' placeholder='画像を探す' ref={ref}></input>
    </form>
    <ImageGallery />
  </div>
  )
}

export default App;
