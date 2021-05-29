// coding ini dibuat berdasarkan apa yang saya ingin tanpa terpacu kemana-mana
// terobsesi dari flask-python framework dan Jinja
// mohon maaf jika scriptnya jelek dan tidak rapi
// maaf jika OOP nya jelek
// port 4200 terobsesi dari Angular standard port
// script ini tidak mengikuti standard CSP

// setting package
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser'); // Middleware

app.use(bodyParser.urlencoded({ extended: false }));
// setting port
const env = require('dotenv').config();
const port = process.env.PORT;

// hash pbkdf2 populer di flask-python framework
const hash = require('pbkdf2');

// session login dengan express-session 
const session = require('express-session');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
// use render berfungsi secara otomatis load file EJS
// obsesi tetap dari flask framework

// halaman awal
app.get('/', (req, res) => {
  res.render(process.env.PATH_INDEX);
});

app.use('/', express.static(path.join(__dirname, 'public')))


// halaman about
app.get('/login', (req, res) => {
  res.render(process.env.PATH_LOGIN);
});

app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  });


// static file HTML

app.get('/teknologi', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/data/app.html'));
})

app.listen(port, () => {
    console.log(`copy ini pada web browser http://localhost:${port}`);
})