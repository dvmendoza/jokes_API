const Joke = require("../models/joke.model")

// CREATE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            console.log(newJoke)
            res.json(newJoke)
        })
        .catch(errors => res.json(errors))
}

// READ ALL
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(errors => res.json(errors))
}

// READ ONE
module.exports.oneJoke = (req, res) => {
    Joke.findOne({_id: req.params.joke_id})
        .then(oneJoke => res.json(oneJoke))
        .catch(errors => res.json(errors))
}

// UPDATE
module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({_id:req.params.joke_id}, req.body, {new:true, runValidators:true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(errors => res.json(errors))
}

// DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id:req.params.joke_id})
        .then(confirmation => res.json(confirmation))
        .catch(errors => res.json(errors))
}