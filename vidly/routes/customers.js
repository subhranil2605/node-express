import express from "express";
import { Customer } from "../models/customer.js";
import Joi from "joi";


export const customerRouter = express.Router();


customerRouter.get('/', async (req, res) => {
    const customers = await Customer.find();
    res.json({
        count: customers.length,
        data: customers
    });
});

customerRouter.post('/', async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    });
    customer = await customer.save();

    res.send(customer);
});

customerRouter.put('/:id', async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    }, { new: true });

    if (!customer) {
        res.status(404).send('The customer with the given ID was not found!');
    }

    res.json(customer);
});


customerRouter.delete('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
        res.status(404).send('The customer with the given ID was not found!');
    }
    res.json(customer);
});

customerRouter.get('/:id', async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        res.status(404).send('The customer with the given ID was not found!');
    }
    res.json(customer);
});


function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(10).max(12).required(),
        isGold: Joi.boolean()
    });
    return schema.validate(customer);
}  