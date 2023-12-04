import express from "express";
import mongoose from "mongoose";

import { genresRouter } from "./routes/genres.js";
import { customerRouter } from "./routes/customers.js";
import { movieRouter } from "./routes/movies.js";
import { rentalRouter } from "./routes/rentals.js";

const app = express();

app.use(express.json()); 

// Routes
app.use('/api/genres', genresRouter);
app.use('/api/customers', customerRouter);
app.use('/api/movies', movieRouter);
app.use('/api/rentals', rentalRouter);


const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost/vidly')
    .then(() => {
        console.log('Connected to the database')
        app.listen(port, () => {
            console.log(`App is listening on port: ${port}`);
        });
    })
    .catch(err => {
        console.log(err.message);
    })