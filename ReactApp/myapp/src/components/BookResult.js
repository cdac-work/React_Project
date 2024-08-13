// BookResult.js
import React from 'react';

const BookResult = ({ response, error }) => {
  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (response) {
    return (
      <div>
        <h2>Book Added Successfully</h2>
        <p><strong>ID:</strong> {response.id}</p>
        <p><strong>Name:</strong> {response.name}</p>
        <p><strong>Author:</strong> {response.author}</p>
        <p><strong>Price:</strong> ${response.price.toFixed(2)}</p>
      </div>
    );
  }

  return null;
};

export default BookResult;
