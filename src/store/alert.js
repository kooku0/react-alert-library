const DEFAULT = 'alert/DEFAULT';
const SLIDEIN = 'alert/SLIDEIN';
const SLIDEOUT = 'alert/SLIDEOUT';

const initialState = {
  state: 'default',
  default: '',
  type: '',
  position: '',
  effect: '',
  visible: '',
  text: ''
}

export default alert = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT:
      return initialState
    case SLIDEIN:
      const { type, position, effect, text } = action.payload
      return {
        ...state,
        state: 'slide-in',
        default: 'alert-box alert-is-effect',
        type: `alert-${type}`,
        position: `alert-${position}`,
        effect: `alert-effect-${effect}`,
        visible: 'alert-show',
        text: text
      }
    case SLIDEOUT:
      return {
        ...state,
        state: 'slide-out',
        visible: 'alert-hide'
      }
    default:
      return state;
  }
}
