import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div>
      <BooksList />
      <hr className="padding" />
      <h3 className="h3">Add New Book</h3>
      <BooksForm />
    </div>
  );
}

export default App;
