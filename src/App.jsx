import "./App.css";
import { useState } from "react";

function App() {
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState('');

  const handleCountChange = (e) => {
    const currentValue = e.target.value;
    setText(currentValue);
    setCharacterCount(currentValue.length);

    const words = currentValue.split(/\s+/).filter((word) => word.length !== 0);
    setWordCount(words.length);
  }

  const handleClear = () => {
    setText('');
    setCharacterCount(0);
    setWordCount(0);
  }

  return (
    <>
    <div className="greeting-container">
      <h1>Welcome to the Word Counter</h1>
    </div>
    <div className="text-input-container">
      <textarea name="count-area" id="count-area" cols="30" rows="10" value={text} onChange={handleCountChange}/>
    </div>
    <br />
    <div className="button">
      <button onClick={handleClear}>Clear all</button>
    </div>
    <div className="result-container">
      <p>Word Count: {wordCount}</p>
      <br />
      <p>Character Count: {characterCount}</p>
    </div>
    </>
  )
}

export default App;