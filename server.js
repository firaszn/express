const express = require('express');
const app = express();
const port = 7456;
const pug = require('pug');
const workinghours = require('./middleware/Workhours');

app.use(express.static('public'));
app.set('view engine', 'pug'); // Change 'view enigme' to 'view engine'
app.set('views', 'views');

app.get('/', workinghours, (req, res) => { // Move 'workinghours' inside the app.get middleware
  res.render('home', { title: 'welcome to home page' }); // Remove 'workinghours' from here
});

app.get('/services', workinghours, (req, res) => {
  res.render('services', { title: 'welcome to services' });
});

app.get('/contact', workinghours, (req, res) => {
  res.render('contact', { title: 'welcome to contact page' });
});

app.get('/errorpage', (req, res) => {
  res.render('errorpage');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
