import { useReducer } from 'react';

// Fancy way to write the ternary function
const limitRGB = num => (num < 0 ? 0 : num > 255 ? 255 : num);

// const limitRGB = num => {
//   if (num < 0) {
//     return 0;
//   } else if (num > 255) {
//     return 255;
//   } else {
//     return num;
//   }
// };

// reducer is a normal function that takes 2 parameter, which are state and action and pass this function to useReducer() Hooks
const reducer = (state, action) => {
  const step = 50;
  switch (action.type) {
    case 'INCREMENT_R':
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case 'DECREMENT_R':
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case 'INCREMENT_G':
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case 'DECREMENT_G':
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case 'INCREMENT_B':
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case 'DECREMENT_B':
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};

const ReducerComponent = () => {
  const [rgbColor, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  return (
    <div>
      <h2 style={{ color: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})` }}>
        5. useReducer Example
      </h2>
      <p>
        R : <button onClick={() => dispatch({ type: 'INCREMENT_R' })}>+</button>{' '}
        <button onClick={() => dispatch({ type: 'DECREMENT_R' })}>-</button>
      </p>
      <p>
        G : <button onClick={() => dispatch({ type: 'INCREMENT_G' })}>+</button>{' '}
        <button onClick={() => dispatch({ type: 'DECREMENT_G' })}>-</button>
      </p>
      <p>
        B : <button onClick={() => dispatch({ type: 'INCREMENT_B' })}>+</button>{' '}
        <button onClick={() => dispatch({ type: 'DECREMENT_B' })}>-</button>
      </p>
      <hr />
    </div>
  );
};

export default ReducerComponent;
