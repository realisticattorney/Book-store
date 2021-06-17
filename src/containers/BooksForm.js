import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions/index';

const BooksForm = ({ addBook }) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else if (e.target.id === 'author') {
      setAuthor(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(author, title, category);
    setTitle('');
    setAuthor('');
    setCategory('Action');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        name="author"
        id="author"
        type="text"
        value={author}
        onChange={handleChange}
        placeholder="Author Name"
        required
      />
      <input
        id="title"
        name="title"
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Book Title"
        required
      />
      <select onChange={handleChange} value={category} className="select-tag">
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatch = {
  addBook,
};

export default connect(null, mapDispatch)(BooksForm);
