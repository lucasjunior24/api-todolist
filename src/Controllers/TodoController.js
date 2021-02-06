const Todo = require('../Models/Todo')

module.exports = {
    async createTodo(req, res) {
        const { description } = req.body

        try { 
            // const todoAlreadyExists = await User.findOne({ description })

            // if(todoAlreadyExists) return res.status(400).send({
            //     messagem: "Todo ja existe!"
            // })

            const createTodo = await Todo.create({
                description
            })
            return res.status(200).send({
                message: 'Todo criado com sucesso!',
                data: createTodo
            })
        } catch(err) {
            return res.status(400).send(err)
        }
    },
    async listTodo(req, res) {
        try {
            const allTodos = await Todo.find()

            return res.status(200).send({
                message: 'All todos found',
                data: allTodos
            })
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}