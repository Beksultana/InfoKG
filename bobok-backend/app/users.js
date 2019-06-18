const express = require('express');
const UserSchema = require('../models/User');

const router = express.Router();

router.post('/', (req, res) => {
    const user = new UserSchema(req.body);

    user.save()
        .then(user => res.send({message: 'OK', user}))
        .catch(() => res.sendStatus(400))
});

router.post('/sessions', async (req, res) => {

   const user = await UserSchema.findOne({username: req.body.username});
   if (!user) {
       return res.status(400).send({message: "Username not found"})
   }

   const password = await UserSchema.findOne({password: req.body.password});
   if (!password) {
       return res.status(400).send({message: "password not found"})
   }

   await user.save();

   return res.send({message: "Login success full", user})

});

module.exports = router;