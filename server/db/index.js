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

const savePlace = place => {
    const savedPlace = new Place({
        place: place.place,
        description: place.description,
        what: place.what,
        when: place.when,
        who: place.who,
        rating: place.rating,
        completed: place.completed,
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

const updatePlaceBeen = id =>
    new Promise((resolve, reject) => {
        Place.findOneAndUpdate({ _id: id }, { completed: true }, { new: true }).exec(
            (error, results) => {
                if (error) {
                    console.error(error, 'error in updating place db/index.js!');
                    reject(error);
                } else {
                    console.info('updated place in db/index.js!');
                    resolve(results);
                }
            }
        );
    });

const deletePlaceBeen = id =>
    new Promise((resolve, reject) => {
        Place.deleteOne({ _id: id }, { new: true }).exec((error, results) => {
            if (error) {
                console.error(error, 'error in deleting place db/index.js!');
                reject(error);
            } else {
                console.info('deleted place in db/index.js!');
                resolve(results);
            }
        });
    });

module.exports.savePlace = savePlace;
module.exports.getTopPlaces = getTopPlaces;
module.exports.getTopPlacesBeen = getTopPlacesBeen;
module.exports.updatePlaceBeen = updatePlaceBeen;
module.exports.deletePlaceBeen = deletePlaceBeen;
