const monk = require('monk');
const connectionString = process.env.conString;
const db = monk(connectionString);

db.then(() => {
    console.log('Connected correctly to server')
})

module.exports = db;