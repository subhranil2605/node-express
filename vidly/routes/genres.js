import express from "express";

import { Genre } from "../models/genre.js";


export const genresRouter = express.Router();

import Joi from "joi";

// Get all the genres
genresRouter.get('/', async (req, res) => {
    const genres = await Genre.find({}).sort('-name');
    res.json({
        count: genres.length,
        data: genres
    });
});

// Create a new genre
genresRouter.post('/', async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const newGenre = {
        name: req.body.name
    };

    // Save the data
    const genre = await Genre.create(newGenre);

    res.send(genre);
});

// Update a specific genre
genresRouter.put('/:id', async (req, res) => {
    // Validate our request
    const { error } = validateGenre(req.body);
    if (error) {
        return res.status(404).send(error.details[0].message);
    }

    // Find the genre
    const updatedGenre = await Genre.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, { new: true })

    // If the ID is not valid
    if (!updatedGenre) {
        return res.status(404).send('The genre with the given id is not valid.');
    }

    res.json(updatedGenre);
});

// Delete a specific genre
genresRouter.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndDelete(req.params.id)
    if (!genre) {
        return res.status(404).send('The genre with the given id is not valid.');
    }

    res.json(genre);
});

// Get a specific genre
genresRouter.get('/:id', async (req, res) => {
    const genre = await Genre.findById(req.params.id);
    if (!genre) {
        return res.status(404).send('The genre with the given id is not valid.');
    }
    res.json(genre);
});


function validateGenre(genre) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(genre);
} 