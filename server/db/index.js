const mongoose = require('mongoose');

const { DB_URI, DATABASE } = process.env;

mongoose
    .connect(DB_URI, { useNewUrlParser: true })
    .then(() => console.info(`Connected To Database: ${DATABASE}`))
    .catch(err => console.error(`Failed To Connect To Database: ${DATABASE}`, err));

const placesSchema = new mongoose.Schema({
    place: String,
    description: String,
    what: String,
    when: { type: Date },
    who: String,
    rating: String,
    completed: Boolean,
    date: { type: Date },
});

const Place = mongoose.model('Place', placesSchema);

const savePlace = newPlace => {
    const { place, description, what, when, who, rating, completed } = newPlace;
    const savedPlace = new Place({
        place,
        description,
        what,
        when,
        who,
        rating,
        completed,
    });
    return Place.find({ place })
        .then(results => {
            if (results.length === 0) {
                savedPlace.save(newPlace);
            }
        })
        .catch(error => console.error(error, 'Error: Saving Place'));
};

const getTopPlacesGo = () =>
    Place.find({ completed: false })
        .sort({ when: 1 })
        .limit(50)
        .exec()
        .catch(error => console.error(error, 'Error: Getting Places'));

const updatePlaceGo = id =>
    Place.findOneAndUpdate({ _id: id }, { completed: true }, { new: true })
        .exec()
        .catch(error => console.error(error, 'Error: Updating Place'));

module.exports = {
    savePlace,
    getTopPlacesGo,
    updatePlaceGo,
};
