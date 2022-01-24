/* eslint-disable consistent-return */
const mongoose = require('mongoose');

const DATABASE = 'PRplaces';
const DB_URI = `mongodb://localhost/${DATABASE}`;

mongoose
    .connect(DB_URI, { useNewUrlParser: true })
    .then(() => console.info('Connected to database'))
    .catch(err => console.error('Failed to connect to database', err));

const placesSchema = new mongoose.Schema({
    id: Number,
    places: String,
    description: String,
    what: String,
    when: { type: Date, default: Date.now },
    with: String,
    rating: Number,
    completed: Boolean,
});

const Place = mongoose.model('Place', placesSchema);

const savePlace = place => {
    const savedPlace = new Place({
        id: place.id,
        places: place.places,
        description: place.description,
        what: place.what,
        when: place.when,
        with: place.with,
        rating: place.rating,
        completed: place.completed,
    });
    return Place.find({ id: place.id }).then(results => {
        if (results.length === 0) {
            return savedPlace.save(place);
        }
    });
};

const getTop25Places = () => Place.find({}).sort({ date: 'desc' }).limit(25);

module.exports.savePlace = savePlace;
module.exports.getTop25Places = getTop25Places;
