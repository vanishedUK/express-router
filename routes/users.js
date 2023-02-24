const express = require("express")
const router = express.Router()
const {check, validationResult} = require("express-validator");

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

// get all users
router.get('/', async (req, res) => {
    res.json(users);
})

// get one user
router.get('/:id', async (req, res) => {
    const getUser = users[req.params.id - 1];
    res.json(getUser);
})

// create user
router.post('/', [check("name").not().isEmpty().trim()], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.json({error: errors.array()});
    } else {
        const newUser = req.body;
        users.push(newUser);
        res.json(newUser);
    }
})

// update user
router.put('/:id', async (req, res) => {
    const id = req.params.id - 1;
    users[id] = req.body;
    res.json(users[id])
})

// delete user
router.delete('/:id', async (req, res) => {
    const id = req.params.id - 1;
    const deletedUser = users[id];
    users.splice(id, 1);
    res.json(deletedUser);
})

module.exports = router;
