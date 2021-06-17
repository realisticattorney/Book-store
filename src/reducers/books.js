import { ADD_BOOK, REMOVE_BOOK } from '../actions/actions';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100),
          author: action.payload.author,
          title: action.payload.title,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
