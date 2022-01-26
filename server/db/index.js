const mongoose = require('mongoose');

const DATABASE = 'PRplaces';
const DB_URI = `mongodb://localhost/${DATABASE}`;

mongoose
    .connect(DB_URI, { useNewUrlParser: true })
    .then(() => console.info('Connected to database'))
    .catch(err => console.error('Failed to connect to database', err));

const placesSchema = new mongoose.Schema({
    id: Number,
    place: String,
    description: String,
    what: String,
    when: { type: Date },
    who: String,
    rating: String,
    completed: Boolean,
    date: { type: Date, default: Date.now },
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
    return Place.find({ description: place.description }).then(results => {
        if (results.length === 0) {
            savedPlace.save(place);
        }
    });
};

const getTop25Places = () =>
    new Promise((resolve, reject) => {
        Place.find()
            .sort({ date: 'desc' })
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
    });

module.exports.savePlace = savePlace;
module.exports.getTop25Places = getTop25Places;
