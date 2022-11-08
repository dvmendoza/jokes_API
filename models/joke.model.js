const mongoose = require('mongoose')

// DEFINE SCHEMA
const JokeSchema = new mongoose.Schema({
    setup: {
        type:String
    },
    punchline: {
        type:String
    }
  }, {timestamps: true});

// REGISTER SHCEMA
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;