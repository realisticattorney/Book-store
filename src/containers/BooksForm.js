import React from 'react';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <form>
      Title:
      <input type="text" />
      Categories:
      <select>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
