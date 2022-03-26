// Getting the express npm, hbs and hbs-helpers modules.
const express = require('express');
const hbs = require('hbs');
const helpers = require('handlebars-helpers')({
  handlebars: hbs
});

// Registering partials.
hbs.registerPartials(__dirname + '/views/partials');

// Creating the express app.
const app = express();

// Setting view engine.
app.set('view engine', 'hbs');

// Setting views.
app.set('views', __dirname + '/views');

// Creating the middleware function that servers statis files on requests.
app.use(express.static('public'));

// Default page title
app.locals.pageTitle = 'Aldevto Studio';

// Setting the request handling for requests made to '/' (home page).
app.get('/', (request, response) => {
  response.render('home', {});
});

// Setting the request handling for requests made to '/about' (about page).
app.get('/about', (request, response) => {
  response.render('about', { pageTitle: 'About us', pageStyles: [{ style: '/about.css' }] });
});

// Setting the request handling for requests made to '/works' (works page).
app.get('/works', (request, response) => {
  response.render('works', { pageTitle: 'Works', pageStyles: [{ style: '/works.css' }] });
});

// Setting the request handling for requests made to '/gallery' (gallery page).
app.get('/gallery', (request, response) => {
  response.render('gallery', {
    pageTitle: 'Gallery',
    images: [
      { name: 'Palm tree', src: 'https://source.unsplash.com/pWkk7iiCoDM/400x300' },
      { name: 'Jump', src: 'https://source.unsplash.com/aob0ukAYfuI/400x300' },
      { name: 'Tree', src: 'https://source.unsplash.com/EUfxH-pze7s/400x300' },
      { name: 'Diving', src: 'https://source.unsplash.com/M185_qYH8vg/400x300' },
      { name: 'Free', src: 'https://source.unsplash.com/sesveuG_rNo/400x300' },
      { name: 'Walk', src: 'https://source.unsplash.com/AvhMzHwiE_0/400x300' },
      { name: 'Jump', src: 'https://source.unsplash.com/2gYsZUmockw/400x300' },
      { name: 'Surf', src: 'https://source.unsplash.com/EMSDtjVHdQ8/400x300' }
    ]
  });
});

// Setting an error page if path not found.
app.get('*', (request, response) => {
  response.render('error', { pageTitle: 'Not found' });
});

// Listening for connections.
app.listen(3000);
