const mongoose = require('mongoose');

const DATABASE = 'PRplaces';
const DB_URI = `mongodb://localhost/${DATABASE}`;

mongoose
    .connect(DB_URI, { useNewUrlParser: true })
    .then(() => console.info('Success: Connected To Database'))
    .catch(err => console.error(err, 'Error: Failed To Connect To Database'));

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
    return Place.find({ place }).then(results => {
        if (results.length === 0) {
            savedPlace.save(newPlace);
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
                    console.error(error, 'Error: Place Not Found');
                    reject(error);
                } else {
                    console.info('Success: Place Found');
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
                    console.error(error, 'Error: Place Not Found');
                    reject(error);
                } else {
                    console.info('Success: Place Found');
                    resolve(results);
                }
            });
    });

module.exports = {
    savePlace,
    getTopPlaces,
    getTopPlacesBeen,
};
