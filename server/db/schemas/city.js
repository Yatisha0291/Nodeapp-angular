var mongoose = require('mongoose');

var cities = mongoose.model('citymodel', new mongoose.Schema({
    id: String,
    name: String,
    countrycode: String,
    district: String,
    population: String
}), 'cities');

module.exports = cities;