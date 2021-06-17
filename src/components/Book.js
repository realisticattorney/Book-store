import React from 'react';
import PropTypes from 'prop-types';
import graph from '../assets/graph.png';

function Book({ book, handleRemoveBook }) {
  const { author, title, category } = book;
  return (
    <div className="book">
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <div className="btns">
        <div className="button-one btn">
          <button type="button">Comment</button>
        </div>
        <div className="button-two btn">
          <button type="button" onClick={() => handleRemoveBook(book)}>
            X
          </button>
        </div>
        <div className="button-three btn">
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="rect">
        <div className="circle">
          <img src={graph} alt="Logo" />
        </div>
      </div>
      <div className="hr" />
      <div className="update">
        <p className="chapter">Current Chapter</p>
        <p className="intro">Introduction</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
export default Book;
