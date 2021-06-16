/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import reducer from './books';

const reducersCombined = combineReducers({ books: reducer });

export default reducersCombined;
