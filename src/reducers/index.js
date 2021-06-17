/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import reducer from './books';
import filter from './filter';

const reducersCombined = combineReducers({ books: reducer, filter });

export default reducersCombined;
