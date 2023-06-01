
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const ejs = require('ejs');
const path = require('path');
const port = 8080;


///////////routers
const addRouter = require('./routers/add');

app.use('/signup', addRouter);

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'Your_secret_key',
        saveUninitialized: false,
        resave: false,
    })
);


mongoose
    .connect(
        'mongodb+srv://saheramr:saheramr15@cluster0.hkxmtiw.mongodb.net/practical?retryWrites=true&w=majority'
    )
    .then((result) => {
        console.log('database connection success');
    })
    .catch((err) => {
        console.log(err);
    });

    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/', (req, res) => {
        res.render('pages/home', { user: (req.session.user === undefined ? "" : req.session.user) });
    })

    

    app.listen(port, () => {
        console.log('http://localhost:8080');
    });

