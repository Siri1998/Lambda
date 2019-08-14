'use strict';

const todosCreate = require('./create.js');
const todosUpdate = require('./update.js');
const todosDelete = require('./delete.js');
const todosList = require('./list.js');


module.exports.list = (event, context, callback) => {
    todosList(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(result),
        };

        context.succeed(response);
    });
}

module.exports.create = (event, context, callback) => {
    todosCreate(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(result),
        };

        context.succeed(response);
    });
};

module.exports.update = (event, context, callback) => {
    todosUpdate(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(result),
        };

        context.succeed(response);
    });
};

module.exports.delete = (event, context, callback) => {
    todosDelete(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(result),
        };



        context.succeed(response);
    });
};