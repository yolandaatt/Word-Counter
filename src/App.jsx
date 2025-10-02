import "./App.css";

function App() {
  return (
    <>
    <div className="greeting-container">
      <h1>Welcome to the Word Counter</h1>
    </div>
    <div className="text-input-container">
      <textarea name="count-area" id="count-area" cols="30" rows="10" />
    </div>
    <div className="result-container">
      <p>Word Count: 5</p>
      <br />
      <p>Character Count: 5</p>
    </div>
    </>
  )
}

export default App;