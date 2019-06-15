const express  = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();

const information = require('./app/information');
const category = require('./app/category');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const port = 8000;

mongoose.connect(config.infoDb, config.mongoOptions).then(() => {

    app.use('/information', information);
    app.use('/category', category);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

});