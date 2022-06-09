import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import squaresReducer from './Reducers/squaresReducer';

function App() {
  const [squares, dispachSquares] = useReducer(squaresReducer, []);

  const [inputNumber, setInputNumber] = useState('');

  // const [inputRange, setInputRange] = useState([{ value: 0 }, { value: 9999 }]);
  const [range, setRange] = useState('0');

  const doRange = useRef(true);

  useEffect(() => {
    if (!doRange.current) {
      return;
    }
    doRange.current = false;
    setTimeout(() => (doRange.current = true), 20);

    const action = {
      type: 'range',
      payload: range,
    };
    dispachSquares(action);
  }, [range]);

  const addSquares = () => {
    const action = {
      type: 'add',
    };
    dispachSquares(action);
  };

  const sqRemove = (id) => {
    const action = {
      type: 'remove',
      payload: id,
    };
    dispachSquares(action);
  };

  const filterReset = () => {
    const action = {
      type: 'reset',
    };
    dispachSquares(action);
  };

  // const input = useRef();
  // const discardSquare = () => {
  //   const action = {
  //     type: 'discard',
  //     payload: input.current.value,
  //   };
  //   dispachSquares(action);
  // };

  const hideSquare = () => {
    const action = {
      type: 'hide',
      payload: inputNumber,
    };
    setInputNumber('');
    dispachSquares(action);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Learning Reducer</h1>
        <div className='kvc'>
          {squares
            ? squares.map((kv) =>
                kv.show ? (
                  <div
                    key={kv.id}
                    className='kv'
                    onClick={() => sqRemove(kv.number)}
                    style={{ background: kv.color }}
                  >
                    <i>{kv.number}</i>
                  </div>
                ) : null
              )
            : null}
        </div>
        <button onClick={addSquares}>ADD</button>
        <button onClick={filterReset}>Reset filter</button>
        <input
          // ref={input}
          type='text'
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          style={{ width: '50px', fontSize: '30px' }}
        />
        <button onClick={hideSquare}>hide square</button>
        <h2>{range}</h2>
        <input
          type='range'
          min='0'
          max='999'
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
