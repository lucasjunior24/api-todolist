const { Router } = require('express')
const UserController = require('../Controllers/TodoController') 
const router = Router()

// Criar todo
router.post('/todos', UserController.createTodo)
// Listar usuarios
router.get('/todos', UserController.listTodo)

router.get('/', (req, res) => {
    return res.send('Hellor word')
})

module.exports = router