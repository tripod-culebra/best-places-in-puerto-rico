const mongoose = require('mongoose');

const DATABASE = 'PRplaces';
const DB_URI = `mongodb://localhost/${DATABASE}`;

mongoose
    .connect(DB_URI, { useNewUrlParser: true })
    .then(() => console.info('Connected to database'))
    .catch(err => console.error('Failed to connect to database', err));

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
    return Place.find({ description: place.description }).then(results => {
        if (results.length === 0) {
            savedPlace.save(place);
        }
    });
};

const getTopPlaces = () =>
    new Promise((resolve, reject) => {
        Place.find({ completed: false })
            .sort({ when: 'desc' })
            .limit(50)
            .exec((error, results) => {
                if (error) {
                    console.error(error, 'error in getting top 25 results db/index.js!');
                    reject(error);
                } else {
                    console.info('found top 25 results in db/index.js!');
                    resolve(results);
                }
            });
    });

const getTopPlacesBeen = () =>
    new Promise((resolve, reject) => {
        Place.find({ completed: true })
            .sort({ when: 'desc' })
            .limit(50)
            .exec((error, results) => {
                if (error) {
                    console.error(error, 'error in getting top 25 results db/index.js!');
                    reject(error);
                } else {
                    console.info('found top 25 results in db/index.js!');
                    resolve(results);
                }
            });
    });

module.exports.savePlace = savePlace;
module.exports.getTopPlaces = getTopPlaces;
module.exports.getTopPlacesBeen = getTopPlacesBeen;
