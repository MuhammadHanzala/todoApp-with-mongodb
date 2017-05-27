const Todo = require('../models/todo');

module.export = {
    create(req, res, next) {
        const todoProps = req.body;

        Todo.create(todoProps)
            .then(todo => res.send(todo))
            .catch(next)
    },

    get(req, res, next) {
        Todo.find({})
            .then(todos => res.send(todos))
            .catch(next);
    },

    edit(req, res, next) {
        const todoId = req.params.id;
        const todoProps = req.body;

        Todo.findByIdAndUpdate({ _id: todoId }, todoProps)
            .then(() => Todo.findById({ _id: todoId }))
            .then(todo => res.send(todo))
            .catch(next);
    },

    delete(req, res, next) {
        const todoId = req.params.id;

        Driver.findByIdAndRemove({ _id: todoId })
            .then(todo => res.status(204).send(todo))
            .catch(next);
    }
};