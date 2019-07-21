import React from 'react'
import Home from './Home'
import Alert from './module/alert'
// import useAnimation from './animation/use-animation'

function App() {
  // let [animation1, start] = useAnimation()
  // function handleClick() {
  //   start()
  // }
  return (
    <div className="App"  style={{width: '100%', height: '100%'}}>
      <header className="App-header">
        Header
      </header>
      
      <Alert />
      <Home />
    </div>
  );
}

export default App;
