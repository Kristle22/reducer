function booksReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'booksList':
      newState = action.payload.map((b, i) => ({ ...b, row: i, show: true }));
      break;
    case 'filter_by_price':
      newState = state.map(b => b.price > 13 ? { ...b, show: true } : { ...b, show: false });
      break;
    case 'reset':
      newState = state.map(b => ({ ...b, show: true }))
      break;
    case 'reload':
      newState = action.payload;
      break;
    case 'category':
      newState = action.payload;
      break;
    default:
      newState = [...state];
  }
  return newState;
}

export default booksReducer;