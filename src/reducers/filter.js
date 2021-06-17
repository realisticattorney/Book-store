import { CHANGE_FILTER } from '../actions/actions';

const filter = (state = 'All', action) => {
  if (action.type === CHANGE_FILTER) {
    return action.payload.category;
  }
  return state;
};

export default filter;
