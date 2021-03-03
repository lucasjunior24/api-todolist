const { Router } = require('express')
const TodoController = require('../Controllers/TodoController')
const router = Router()

// Criar todo
router.post('/todos', TodoController.createTodo)
// Listar usuarios
router.get('/todos', TodoController.listTodo)
// alterando todo
router.put('/todos/:id', TodoController.updateTodo)
// deletando usuarios
router.delete('/todos/:id', TodoController.deleteTodo)

router.get('/', (req, res) => {
    return res.send('Hellor word')
})

module.exports = router