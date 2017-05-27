const assert = require('assert');
const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const Todo = mongoose.model('todo');

describe('Todos Controller', () => {
    it('Post to /api/drivers creates a new todo', done => {
        Todo.count().then(count => {
            request(app)
                .post('/api/todos')
                .send({ todo: 'shopping' })
                .end(() => {
                    Todo.count().then(newCount => {
                        assert(count + 1 === newCount);
                        done();
                    });

                })
        })

    });

    it('PUT to /api/todos/id edits an existing todo', done => {
        const todo = new Todo({ todo: 'dinner', completed: false });

        todo.save().then(() => {
            request(app)
                .put(`/api/todos/${todo._id}`)
                .send({ completed: true })
                .end(() => {
                    Todo.findOne({ todo: 'dinner' })
                        .then(todo => {
                            assert(todo.completed === true);
                            done();
                        });
                });
        });
    });

    it('DELETE to /api/toods/id can delete a todo', done => {
        const todo = new Todo({ todo: 'shopping' });

        todo.save().then(() => {
            request(app)
               .delete(`/api/todos/${todo._id}`)
               .end(() => {
                   Todo.findOne({ todo: 'shopping'})
                   .then((todo) => {
                       assert(todo === null); 
                       done();
                   })
               })
        });
    });
});