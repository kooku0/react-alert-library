import React from 'react'
import { useSelector } from 'react-redux';
import './css/index.css'

const Alert = () => {
  const alert = useSelector(state => state.alert, []);
  return (
    <div className="alert-wrapper">
      <div
        className={`${alert.default} ${alert.type} ${alert.position} ${alert.effect} ${alert.visible}`}
      >
        {alert.text}
      </div>
    </div>
)}

export default Alert