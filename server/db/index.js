const mongoose = require('mongoose');

const DATABASE = 'PRplaces';
const DB_URI = `mongodb://localhost/${DATABASE}`;

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
    new Promise((resolve, reject) => {
        Place.find({ completed: false })
            .sort({ when: 1 })
            .limit(50)
            .exec((error, results) => {
                if (error) {
                    reject(error);
                    console.error(error, 'Error: Getting Places');
                } else {
                    resolve(results);
                }
            });
    });

const updatePlaceGo = id =>
    new Promise((resolve, reject) => {
        Place.findOneAndUpdate({ _id: id }, { completed: true }, { new: true }).exec(
            (error, results) => {
                if (error) {
                    reject(error);
                    console.error(error, 'Error: Updating Place');
                } else {
                    resolve(results);
                }
            }
        );
    });

const getTopPlacesBeen = () =>
    new Promise((resolve, reject) => {
        Place.find({ completed: true })
            .sort({ when: 1 })
            .limit(50)
            .exec((error, results) => {
                if (error) {
                    reject(error);
                    console.error(error, 'Error: Getting Places');
                } else {
                    resolve(results);
                }
            });
    });

const deletePlaceBeen = id =>
    new Promise((resolve, reject) => {
        Place.deleteOne({ _id: id }, { new: true }).exec((error, results) => {
            if (error) {
                console.error(error, 'Error: Deleting Place');
                reject(error);
            } else {
                console.info('Success: Deleted Place');
                resolve(results);
            }
        });
    });

module.exports = {
    savePlace,
    getTopPlacesGo,
    updatePlaceGo,
    getTopPlacesBeen,
    deletePlaceBeen,
};
