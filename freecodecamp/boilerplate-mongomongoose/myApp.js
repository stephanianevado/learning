require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: {type: String, required: true},
    age: Number,
    favoriteFoods: [String]
});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
    let stephaniaNevado = new Person({name: "Stephania Nevado", age: 31, favoriteFoods: ["pizza", "pasta", "tomate"]});

    stephaniaNevado.save((err, data) => {
        if (err) return console.error(err);
        done(null, data)
    });
};

const arrayOfPeople = [{
    name: "Nina Olofsson",
    age: 30,
    favoriteFoods: ["italiana", "patatas", "pizza"]
}, {name: "Dubrasska Nevado", age: 28, favoriteFoods: ["tofu", "vegetariana", "chocolate"]}, {
    name: "Katherina Nevado",
    age: 26,
    favoriteFoods: ["hamburguesa", "chocolate", "peras"]
}];

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, data) => {
        if (err) return console.error(err);
        done(null, data);
    })
};

const findPeopleByName = (personName, done) => {
    Person.find({name: personName}, (err, personFound) => {
        if (err) return console.error(err);
        done(null, personFound);
    })
};

const findOneByFood = (food, done) => {
    Person.findOne({favoriteFoods: food}, (err, food) => {
        if (err) return console.error(err);
        done(null, food);
    });
};

const findPersonById = (personId, done) => {
    Person.findById({_id: personId}, (err, personId) => {
        if (err) return console.error(err);
        done(null, personId);
    })
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";
    Person.findById({_id: personId}, (err, person) => {
        if (err) return console.log(err);

        person.favoriteFoods.push(foodToAdd);

        person.save((err, data) => {
            if (err) return console.error(err);
            done(null, data);
        })
    })
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
        if (err) return console.log(err);
        done(null, updatedDoc);
    })
};

const removeById = (personId, done) => {
    Person.findByIdAndRemove(personId, (err, personId) => {
        if (err) return console.log(err);
        done(null, personId);
    })
};

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";
    Person.remove({name: nameToRemove}, (err, response) => {
        if (err) return console.log(err);
        done(null, response);
    })
};

const queryChain = (done) => {
    const foodToSearch = "burrito";
    Person.find({favoriteFoods: foodToSearch}).sort('name').limit(2).select(['name', 'favoriteFoods']).exec((err, data) => {
        done(null, data);
    })
};

/** **Well Done !!**
 /* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
