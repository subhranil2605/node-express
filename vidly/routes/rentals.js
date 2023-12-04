import express from "express";
import mongoose from "mongoose";

import { Rental, validateRental } from "../models/rental.js";
import { Movie } from "../models/movie.js";
import { Customer } from "../models/customer.js";

export const rentalRouter = express.Router();

rentalRouter.get('/', async (req, res) => {
    const rentals = await Rental.find().sort('-dateOut');
    res.json(rentals);
});

rentalRouter.post('/', async (req, res) => {
    const { error } = validateRental(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('Invalid customer.');

    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send('Invalid movie.');

    if (movie.numberInStock === 0) return res.status(400).send('Movie not available')

    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });
    rental = await rental.save();

    movie.numberInStock--;
    movie.save();

    res.send(rental);
})