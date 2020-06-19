'use-strict'
const mongoose = require('mongoose');
const Customer = require('../models/customer');

exports.get = async () => {
    return await Customer.find({ active: true }, 'title price slug');
}

exports.authenticate = async ({ email, password }) => {
    return await Customer.findOne({
        email: email,
        password: password
    });
}

exports.getById = async (id) => {
    return await Customer.findById(id);
}

exports.create = async (data) => {
    await Customer(data).save();
}