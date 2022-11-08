const JokeController = require("../controllers/joke.controller")
const Joke = require("../models/joke.model")

module.exports = app => {
    // CREATE
    app.post("/api/jokes", JokeController.createJoke)
    // READ ALL
    app.get("/api/jokes", JokeController.allJokes)
    // READ ONE
    app.get("/api/jokes/:joke_id", JokeController.oneJoke)
    // UPDATE
    app.put("/api/jokes/:joke_id", JokeController.updateJoke)
    // DELETE
    app.delete("/api/jokes/:joke_id", JokeController.deleteJoke)
}