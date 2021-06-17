/* eslint-disable import/no-cycle */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducersCombined from './reducers/index';

const initialStore = {
  filter: [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ],
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Skin in the game',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Skin in the game 2',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'The Little Prince',
      category: 'Kids',
    },
  ],
};

const store = createStore(reducersCombined, initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
