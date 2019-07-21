import { useSelector, useDispatch } from 'react-redux';

export default function useAlert() {
  const alertState = useSelector(state => state.alert, [])
  const dispatch = useDispatch()
  function alert({ text, type, position, effect }) {
    if (alertState.state !== 'default') return null
    dispatch({ type: 'alert/SLIDEIN', payload: { text: text, type: type, position: position, effect: effect } })
    setTimeout(() => {
      dispatch({ type: 'alert/SLIDEOUT' })
      setTimeout(() => {
        dispatch({ type: 'alert/DEFAULT' })
      }, 200)
    }, 2000)
  }
  return alert
}