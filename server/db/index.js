const mongoose = require('mongoose');

const { DB_URI, DATABASE } = process.env;

mongoose
    .connect(DB_URI, { useNewUrlParser: true })
    .then(() => console.info(`Connected To Database: ${DATABASE}`))
    .catch(err => console.error(`Failed To Connect To Database: ${DATABASE}`, err));

const placesSchema = new mongoose.Schema({
    name: String,
    description: String,
    what: String,
    when: { type: Date },
    who: String,
    rating: String,
    completed: Boolean,
    date: { type: Date },
});

const Place = mongoose.model('Place', placesSchema);

const savePlace = place =>
    Place.find({ name: place.name })
        .exec()
        .then(existingPlace => !existingPlace.length && new Place(place).save(place))
        .catch(error => console.error(error, 'Error: Saving Place'));

const getTopPlaces = completed =>
    Place.find({ completed })
        .sort({ when: 1 })
        .limit(50)
        .exec()
        .catch(error => console.error(error, 'Error: Getting Places'));

const updatePlace = id =>
    Place.findOneAndUpdate({ _id: id }, { completed: true }, { new: true })
        .exec()
        .catch(error => console.error(error, 'Error: Updating Place'));

const deletePlace = id =>
    Place.deleteOne({ _id: id }, { new: true })
        .exec()
        .catch(error => console.error(error, 'Error: Place Not Deleted'));

module.exports = {
    savePlace,
    getTopPlaces,
    updatePlace,
    deletePlace,
};
