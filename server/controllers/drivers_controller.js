const Todo = require('../models/driver');

module.exports = {
    get(req, res, next) {
        Todo.find({})
            .then(todo => res.send(todo))
            .catch(next);
    },
    create(req, res, next){
        
        const todoProps = req.body;

        Todo.create(todoProps)
            .then(todo => res.send(todo))
            .catch(next)
    },

    edit(req, res, next){
        const todoId = req.params.id;
        const todoProps = req.body;

        Todo.findByIdAndUpdate({_id: todoId}, todoProps)
            .then(() => todo.findById({_id: todoId}))
            .then((todo => res.send(todo)))
            .catch(next);
    },

    delete(req, res, next){
        const todoId = req.params.id;

        Todo.findByIdAndRemove({_id: todoId})
            .then(todo => res.status(204).send(todo))
            .catch(next);
    }
}