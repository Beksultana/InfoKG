const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const informationSchema = new  Schema({

    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    name: {
      type: String,
      required: true
    },
    number: {
      type: String
    },
    address:{
      type: String,
      required: true
    },
    phone: {
      type: String
    },
    image: {
      type: String,
      required: true
    }

});

const Information =  mongoose.model("Information", informationSchema);
module.exports = Information;

