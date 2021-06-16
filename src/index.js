import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';

const initialStore = {
  books: [
    {
      author: 'Nassim Taleb',
      title: 'Skin in the game',
      category: 'Learning',
    },
    {
      author: 'Antoine de Saint-Exupéry',
      title: 'The Little Prince',
      category: 'Kids',
    },
  ],
};

const store = createStore(reducer, initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
