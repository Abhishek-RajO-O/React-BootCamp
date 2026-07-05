import { useState } from "react"
function App() {
  let [counter, setCounter] = useState(10);

  function increase(){
    if(counter < 20 ){
      setCounter(counter+1);
    }
  }
  function decrease(){
    if(counter > 0){
      setCounter(counter-1);
    }
  }

  return (
    <>
    <div className="container">
      <p>{counter}</p>
      <div className="controler">
        <button className="button" onClick={increase}>Increase</button>
        <button className="button" onClick={decrease}>Decrease</button>
      </div>
    </div>
    </>
  )
}

export default App
