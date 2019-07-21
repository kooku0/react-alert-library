import React from 'react'
import useAlert from './hooks/use-alert'

const Home = () => {
  const alert = useAlert()
  function handleWarning() {
    alert({ text: 'Login!', type: 'warning', position: 'top-right', effect: 'slide' })
  }
  function handleInfo() {
    alert({ text: 'Login!', type: 'info', position: 'top-right', effect: 'slide' })
  }
  function handleError() {
    alert({ text: 'Login!', type: 'error', position: 'top-right', effect: 'slide' })
  }
  function handleSuccess() {
    alert({ text: 'Login!', type: 'success', position: 'top-right', effect: 'slide' })
  }

  function handleTop() {
    alert({ text: 'Login!', type: 'warning', position: 'top', effect: 'slide' })
  }
  function handleBottom() {
    alert({ text: 'Login!', type: 'info', position: 'bottom', effect: 'slide' })
  }
  function handleBottomRight() {
    alert({ text: 'Login!', type: 'error', position: 'bottom-right', effect: 'slide' })
  }
  function handleBottomLeft() {
    alert({ text: 'Login!', type: 'success', position: 'bottom-left', effect: 'slide' })
  }
  function handleTopLeft() {
    alert({ text: 'Login!', type: 'success', position: 'top-left', effect: 'slide' })
  }
  function handleTopRight() {
    alert({ text: 'Login!', type: 'success', position: 'top-right', effect: 'slide' })
  }

  function handleSlide() {
    alert({ text: 'Login!', type: 'warning', position: 'top-right', effect: 'slide' })
  }
  function handleScale() {
    alert({ text: 'Login!', type: 'info', position: 'top-right', effect: 'scale' })
  }
  function handleFlip() {
    alert({ text: 'Login!', type: 'error', position: 'top-right', effect: 'flip' })
  }
  function handleJelly() {
    alert({ text: 'Login!', type: 'success', position: 'top-right', effect: 'jelly' })
  }
  function handleStackslide() {
    alert({ text: 'Login!', type: 'success', position: 'top-right', effect: 'stackslide' })
  }
  function handleGenie() {
    alert({ text: 'Login!', type: 'success', position: 'top-right', effect: 'genie' })
  }
  function handleBouncyflip() {
    alert({ text: 'Login!', type: 'success', position: 'top-right', effect: 'bouncyflip' })
  }

  return (
    <div style={{width: '100%', height: '100%', backgroundColor: 'yellow'}}>
      <div className="cf">
        <h3>Different conditions: </h3>
        <button type="button" className="button buttonWarning" onClick={handleWarning}>Warning</button>
        <button type="button" className="button buttonInfo" onClick={handleInfo}>Info</button>
        <button type="button" className="button buttonError" onClick={handleError}>Error</button>
        <button type="button" className="button buttonSuccess" onClick={handleSuccess}>Success</button>
      </div>
      <div className="cf">
        <h3>Different positions: </h3>
        <button type="button" className="button buttonSuccess" onClick={handleTop}>top</button>
        <button type="button" className="button buttonInfo" onClick={handleBottom}>bottom</button>
        <button type="button" className="button buttonWarning" onClick={handleBottomRight}>bottom-right</button>
        <button type="button" className="button buttonError" onClick={handleBottomLeft}>bottom-left</button>
        <button type="button" className="button buttonSuccess" onClick={handleTopLeft}>top-left</button>
        <button type="button" className="button buttonInfo" onClick={handleTopRight}>top-right</button>
      </div>
      <div className="cf">
        <h3>Different effects <small>(All here are 'top-right' - could be changed)</small>:</h3>
        <button type="button" className="button buttonSuccess" onClick={handleSlide}>slide</button>
        <button type="button" className="button buttonInfo" onClick={handleScale}>scale</button>
        <button type="button" className="button buttonWarning" onClick={handleFlip}>flip</button>
        <button type="button" className="button buttonError" onClick={handleJelly}>jelly</button>
        <button type="button" className="button buttonSuccess" onClick={handleStackslide}>stackslide</button>
        <button type="button" className="button buttonInfo" onClick={handleGenie}>genie</button>
        <button type="button" className="button buttonWarning" onClick={handleBouncyflip}>bouncyflip</button>
      </div>
    </div>
  )
}

export default Home;