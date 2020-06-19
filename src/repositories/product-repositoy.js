'use-strict'
const mongoose = require('mongoose');
const Product = require('../models/products');

exports.get = async () => {
    return await Product.find({ active: true }, 'title price slug image');
}

exports.getBySlug = async (slug) => {
    return await Product.findOne({ slug: slug, active: true }, 'title description tags price slug')
}

exports.getById = async (id) => {
    try {
        const data = await Product.findById(id)
        return data
    } catch (err) {
        console.log('err', err)
        throw err
    }
     
}

exports.getByTag = async (tag) => {
    return await Product.find({
        tags: tag,
        active: true
    }, 'title description tags price slug')
}

exports.create = async (data) => {
    await Product(data).save();
}

exports.update = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price
        }
    })
}

exports.delete = async (id) => {
    await Product.findOneAndRemove(id)
}