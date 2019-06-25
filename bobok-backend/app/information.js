const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const config = require('../config');
const path = require('path');

const Information = require('../models/Information');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

const router = express.Router();

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

router.post('/', upload.single('image'), (req, res) => {

    const infoData = req.body;

    if (req.file){
        infoData.image = req.file.filename;
    }

    const info = new Information(infoData);

    info.save()
        .then(result => res.send(result))
        .catch(error => res.send(error))

});

router.delete('/:id', (req, res) => {
   Information.findByIdAndDelete({_id: req.params.id})
       .then(result => res.send(result))
       .catch(error => res.send(error))
});

module.exports = router;