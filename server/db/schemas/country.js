var mongoose = require('mongoose');

var countries = mongoose.model('countrymodel', new mongoose.Schema({
    code: String,
    name: String,
    continent: String,
    capital: String,
    population: String
}), 'countries');

module.exports = countries;