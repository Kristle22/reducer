import { useEffect, useReducer } from 'react';
import './App.css';
import axios from 'axios';
import booksReducer from './Reducers/booksReducer';
import typesReducer from './Reducers/typesReducer';

function App() {
  const [books, dispachBooks] = useReducer(booksReducer, []);

  const [types, dispachTypes] = useReducer(typesReducer, []);

  useEffect(() => {
    axios.get('http://in3.dev/knygos/').then((res) => {
      const action = {
        type: 'booksList',
        payload: res.data,
      };
      dispachBooks(action);
    });
  }, []);

  useEffect(() => {
    axios.get('https://in3.dev/knygos/types/').then((res) => {
      localStorage.setItem('book types', JSON.stringify(res.data));
      const bookTypes = JSON.parse(localStorage.getItem('book types'));
      const action = {
        type: 'books_type',
        payload: bookTypes,
      };
      dispachTypes(action);
    });
  }, []);
  console.log('types', types);

  const filterByPrice = () => {
    const action = {
      type: 'filter_by_price',
    };
    dispachBooks(action);
  };

  const filterReset = () => {
    const action = {
      type: 'reset',
    };
    dispachBooks(action);
  };

  const reloadBooks = () => {
    const action = {
      type: 'reload',
      payload: window.location.reload(),
    };
    dispachBooks(action);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>BOOK LIST REDUCER</h2>
        {books.length ? (
          books.map((b) =>
            b.show ? (
              <div key={b.id}>
                <b>{b.title}</b>: {b.price} EUR.{' '}
                <i>
                  {types.map((type) =>
                    type.id === b.type ? type.title : null
                  )}
                </i>
              </div>
            ) : null
          )
        ) : (
          <div className='lds-hourglass'></div>
        )}
        <div className='kvc'>
          <button onClick={filterByPrice}>Filter by price</button>
          <button onClick={filterReset}>Filter reset</button>
          <button onClick={reloadBooks}>Reload</button>
        </div>
      </header>
    </div>
  );
}

export default App;
