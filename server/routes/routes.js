const TodosController = require('../controllers/drivers_controller');

module.exports = (app) => {
    app.get('/api/todos', TodosController.get );
    app.post('/api/todos', TodosController.create ); 
    app.put('/api/todos/:id', TodosController.edit );   
    app.delete('/api/todos/:id', TodosController.delete );   
}