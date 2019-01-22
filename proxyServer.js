const express = require('express');
const path = require('path');
const morgan = require('morgan');
const PORT = 2000;
const app = express();


app.use(morgan('tiny'));

let id;

app.get('/:id', (req, res) => {
  id = Number(req.params.id);
  res.status(200).sendFile(path.join(__dirname, './public/index.html'));
});


app.get('/restaurants//profile', (req, res) => {
  res.redirect(`http://localhost:3001/restaurants/${id}/profile`);
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));