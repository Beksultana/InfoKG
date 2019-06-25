const express = require('express');
const router = express.Router();

const Category = require('../models/Category');

router.get('/', (req, res) => {
    Category.find()
        .then(result => res.send(result))
        .catch(error => res.send(error))
});

router.get('/:id', (req, res) => {
    Category.findById({_id: req.params.id})
        .then(result => res.send(result))
        .catch(error => res.send(error))
});

router.post('/', (req, res) => {
   const category = new Category(req.body);
    category.save()
       .then(result => res.send(result))
       .catch(error => res.send(error))
});

router.delete('/:id', (req, res) => {
    Category.findByIdAndDelete({_id: req.params.id})
        .then(result => res.send(result))
        .catch(error => res.send(error))
});

router.put('/:id', (req, res) => {
    const obj = req.body;
    Category.updateOne({_id: req.params.id}, obj)
        .then(result => res.send(result))
        .catch(error => res.send(error))
});

module.exports = router;