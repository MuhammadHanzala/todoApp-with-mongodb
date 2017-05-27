const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost/todo_test');
    mongoose.connection
        .once('open', ()=> done())
        .on('error', err => {
            console.warn('Warning', err)
        });
});

beforeEach(done => {
    const {todos} = mongoose.connection.collections;
    todos.drop()
        .then(() => done())
        .catch(() => done());
 });