const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set("/","html");
app.use(express.static(path.join(__dirname,"/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Define a simple route
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});