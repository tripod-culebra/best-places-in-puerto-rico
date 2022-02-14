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
        .then(existingPlace => !existingPlace.length && new Place(place).save(place));

const getTopPlaces = completed => Place.find({ completed }).sort({ when: 1 }).limit(50).exec();

const updatePlace = (id, body) => Place.findOneAndUpdate({ _id: id }, body, { new: true }).exec();

const deletePlace = id => Place.deleteOne({ _id: id }, { new: true }).exec();

module.exports = {
    savePlace,
    getTopPlaces,
    updatePlace,
    deletePlace,
};
