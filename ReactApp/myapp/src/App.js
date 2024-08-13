// // src/App.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [name, setName] = useState('');
//   const [author, setAuthor] = useState('');
//   const [price, setPrice] = useState('');
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const result = await axios.post('http://localhost:3000/books', {
//         name,
//         author,
//         price: parseFloat(price),
//       });

//       // Add the new book to the list
//       setBooks((prevBooks) => [...prevBooks, result.data]);
//       setName('');
//       setAuthor('');
//       setPrice('');
//       setError(null);
//     } catch (error) {
//       setError('Error adding book. Please try again.');
//     }
//   };

//   return (
//     <div className="App">
//       <h1 className="title">Add a New Book</h1>
//       <form onSubmit={handleSubmit} className="book-form">
//         <div className="form-group">
//           <label>
//             Name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-input"
//               required
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label>
//             Author:
//             <input
//               type="text"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//               className="form-input"
//               required
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label>
//             Price:
//             <input
//               type="number"
//               step="0.01"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="form-input"
//               required
//             />
//           </label>
//         </div>
//         <button type="submit" className="submit-button">ADD</button>
//       </form>

//       {/* Display the result or error */}
//       <div className="result-container">
//         {error && (
//           <div className="error-message">
//             <h2 className="error-title">Error</h2>
//             <p>{error}</p>
//           </div>
//         )}

//         {/* Display the list of books */}
//         {books.length > 0 && (
//           <div className="book-list">
//             <h2 className="list-title">Added Books</h2>
//             <div className="book-container">
//               {books.map((book) => (
//                 <div className="book-item" key={book.id}>
//                   <span className="book-detail"><strong>ID:</strong> {book.id}</span>
//                   <span className="book-detail"><strong>Name:</strong> {book.name}</span>
//                   <span className="book-detail"><strong>Author:</strong> {book.author}</span>
//                   <span className="book-detail"><strong>Price:</strong> ${book.price.toFixed(2)}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post('http://localhost:3000/books', {
        name,
        author,
        price: parseFloat(price),
      });

      // Add the new book to the list
      setBooks((prevBooks) => [...prevBooks, result.data]);
      setName('');
      setAuthor('');
      setPrice('');
      setError(null);
    } catch (error) {
      setError('Error adding book. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1 className="title">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Author:
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="form-input"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Price:
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-input"
              required
            />
          </label>
        </div>
        <button type="submit" className="submit-button">ADD</button>
      </form>

      {/* Display the result or error */}
      <div className="result-container">
        {error && (
          <div className="error-message">
            <h2 className="error-title">Error</h2>
            <p>{error}</p>
          </div>
        )}

        {/* Display the list of books */}
        {books.length > 0 && (
          <div className="book-list">
            <h2 className="list-title">Added Books</h2>
            <div className="book-container">
              {books.map((book) => (
                <div className="book-item" key={book.id}>
                  <span className="book-detail"><strong>ID:</strong> {book.id}</span>
                  <span className="book-detail"><strong>Name:</strong> {book.name}</span>
                  <span className="book-detail"><strong>Author:</strong> {book.author}</span>
                  <span className="book-detail"><strong>Price:</strong> ${book.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
