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
    },
    async updateTodo(req, res) {
        
        const { _id } = req.params
        const { done } = req.body
       
        try {
            const idExists = await Todo.findById(_id)
            if(!idExists) return res.status(400).send('Todo não existe')

            const editId = await Todo.findByIdAndUpdate(_id, {
                 // na description quero atualizar a description
                done
            }, {
                new: true
            })
            return res.status(200).send({
                message: 'Atualizado',
                data: editId

            })
        } catch(err) {
            return res.status(400).send(err)
        }
    },
    async deleteTodo(req, res) {
        const { _id } = req.params
        try { 

            const idExists = await Todo.findById(_id)
            if(!idExists) return res.status(400).send('Todo não existe')

            const deletedTodo = await Todo.findByIdAndDelete(_id)

            return res.status(200).send({
                message: 'Deletado com sucesso!',
                data: deletedTodo
            })
        } catch(err) {
            return res.status(400).send(err)
        }
    },
    
}