// Getting the express npm module and creating the express app.
const express = require('express');
const app = express();

// Creating the middleware function that servers statis files on requests.
app.use(express.static('public'));

// Setting the request handling for requests made to '/' (home page).
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

// Setting the request handling for requests made to '/about' (about page).
app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

// Setting the request handling for requests made to '/works' (works page).
app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

// Setting the request handling for requests made to '/gallery' (gallery page).
app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

// Setting an error page if path not found.
app.get('*', (request, response) => {
  response.sendFile(__dirname + '/views/error.html');
});

// Listening for connections.
app.listen(3000);
