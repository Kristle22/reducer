import rand from '../FUNCTIONS/randNumbers';
import randColor from '../FUNCTIONS/randColor';

function squaresReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'add':
      newState = [...Array(rand(5, 15))].map((_, i) => ({
        number: rand(0, 999),
        color: randColor(),
        show: true,
        row: i
      }));
      break;
    case 'remove':
      newState = state.map(ob => ob.number === action.payload ? { ...ob, show: false } : { ...ob });
      break;
    case 'reset':
      newState = state.map(ob => ({ ...ob, show: true }));
      break;
    // case 'addFromIn':
    // newState = [...Array(Number(action.payload))].map((_, i) => ({ id: i, color: randColor(), show: true }));
    // case 'discard':
    // newState = [...state].filter(ob => ob.number !== Number(action.payload));
    case 'hide':
      newState = state.map(ob => ob.number === Number(action.payload) ? { ...ob, show: false } : { ...ob })
      break;
    case 'range':
      console.log('go:', action.payload);
      newState = state.map(ob => ob.number > action.payload ? { ...ob, show: false } : { ...ob, show: true });
      break;
    default:
      newState = [...state];
  }
  return newState;
}

export default squaresReducer;