const express = require('express');
const router = express.Router();

const Information = require('../models/Information');

router.get('/', async (req,res) => {

    try {
        const criteria = {};

        if (req.query.category) {
            criteria.category = req.query.category;
        }

        const information = await Information.find(criteria).populate('category');
         res.send(information)
    }catch(e) {
       res.sendStatus(500)
    }
});

module.exports = router;