const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    header: Joi.string().required(),
    body: Joi.string().required()
});

const todolist = db.get('todolist');

function getAll() {
    console.log(todolist.find())
    return todolist.find();
}

function create(message) {
    if (!message.username) message.username = 'Anonymous';

    const result = schema.validate(message);
    if (result.error == null) {
        message.created = new Date();
        return todolist.insert(message);
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    getAll
};