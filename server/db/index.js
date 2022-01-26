/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
const mongoose = require('mongoose');

const DATABASE = 'PRplaces';
const DB_URI = `mongodb://localhost/${DATABASE}`;

mongoose
    .connect(DB_URI, { useNewUrlParser: true })
    .then(() => console.info('Connected to database'))
    .catch(err => console.error('Failed to connect to database', err));

const placesSchema = new mongoose.Schema({
    // id: Number,
    place: String,
    description: String,
    what: String,
    when: { type: Date, default: Date.now },
    who: String,
    rating: String,
    completed: Boolean,
});

const Place = mongoose.model('Place', placesSchema);

const savePlace = place => {
    const savedPlace = new Place({
        id: place.id,
        place: place.place,
        description: place.description,
        what: place.what,
        when: place.when,
        who: place.who,
        rating: place.rating,
        completed: place.completed,
    });
    // return Place.find({ description: place.description }).then(results => {
    // if (results.length === 0) {
    return savedPlace.save(place);
    // }
    // });
};

// const getPlaces = () =>
//     (getPlacesPromise = new Promise((resolve, reject) => {
//         Place.find().exec((error, results) => {
//             if (error) {
//                 console.error(error, 'error getting places');
//                 reject(error);
//             } else {
//                 console.info(results, 'found places');
//                 resolve(results);
//             }
//         });
//     }));

// const getTop25Places = () => Place.find({}).sort({ date: 'desc' }).limit(25);
const getTop25Places = () =>
    // eslint-disable-next-line no-undef
    (getTop25ReposPromise = new Promise((resolve, reject) => {
        Place.find()
            // find returns a promise but wrap the whole in a promise to have the chain be a promise
            .sort({ date: -1 })
            .limit(25)
            .exec((error, results) => {
                if (error) {
                    console.error(error, 'error in getting top 25 results db/index.js!');
                    reject(error);
                } else {
                    console.info('found top 25 results in db/index.js!');
                    resolve(results);
                }
            });
        // );
    }));

module.exports.savePlace = savePlace;
module.exports.getTop25Places = getTop25Places;
