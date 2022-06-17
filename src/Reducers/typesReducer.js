function typesReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'books_type':
      newState = action.payload.map((type) => ({ ...type, show: true }));
      break;
    default:
      newState = [...state];
  }
  return newState;
}

export default typesReducer;