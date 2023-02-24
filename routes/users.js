const express = require("express")
const router = express.Router()

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

// All Users
router.get('/', async (req, res) => {
    res.json(users);
})

// One User
router.get('/:id', async (req, res) => {
    const user = users[req.params.id - 1];
    res.json(user);
})