const express = require('express');
const router = express.Router();

const Category = require('../models/Category');

router.get('/', (req, res) => {
    Category.find()
        .then(result => res.send(result))
        .catch(error => res.send(error))
});

router.post('/', (req, res) => {
   const category = new Category(req.body);
    category.save()
       .then(result => res.send(result))
       .catch(error => res.send(error))
});

module.exports = router;