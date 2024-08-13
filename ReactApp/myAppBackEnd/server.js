// // server.js

// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');  // Import the cors package

// const app = express();
// const port = 3000;

// // Create MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',          // Update with your MySQL username
//   password: 'madh',          // Update with your MySQL password
//   database: 'book_store'
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     process.exit(1);
//   }
//   console.log('Connected to MySQL');
// });

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());  // Enable CORS for all origins

// // Routes
// app.post('/books', (req, res) => {
//   const { name, author, price } = req.body;
//   const query = 'INSERT INTO books (name, author, price) VALUES (?, ?, ?)';

//   db.query(query, [name, author, price], (err, results) => {
//     if (err) {
//       console.error('Error inserting book:', err);
//       return res.status(500).json({ error: 'Error adding book' });
//     }

//     // Return the inserted book with the auto-generated ID
//     res.status(201).json({
//       id: results.insertId,
//       name,
//       author,
//       price
//     });
//   });
// });

// app.get('/books/:id', (req, res) => {
//   const { id } = req.params;
//   const query = 'SELECT * FROM books WHERE id = ?';

//   db.query(query, [id], (err, results) => {
//     if (err) {
//       console.error('Error fetching book:', err);
//       return res.status(500).json({ error: 'Error fetching book' });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({ error: 'Book not found' });
//     }

//     res.json(results[0]);
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors package

const app = express();
const port = 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // Update with your MySQL username
  password: 'madh',          // Update with your MySQL password
  database: 'book_store'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());  // Enable CORS for all origins

// Routes
app.post('/books', (req, res) => {
  const { name, author, price } = req.body;
  const query = 'INSERT INTO books (name, author, price) VALUES (?, ?, ?)';

  db.query(query, [name, author, price], (err, results) => {
    if (err) {
      console.error('Error inserting book:', err);
      return res.status(500).json({ error: 'Error adding book' });
    }

    // Return the inserted book with the auto-generated ID
    res.status(201).json({
      id: results.insertId,
      name,
      author,
      price
    });
  });
});

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM books WHERE id = ?';

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching book:', err);
      return res.status(500).json({ error: 'Error fetching book' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json(results[0]);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

