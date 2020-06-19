'use-strict'
const mongoose = require('mongoose');
const Order = require('../models/order');

exports.get = async () => {
    return await Order.find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title') ;
}

exports.create = async (data) => {
    await Order(data).save();
}