const express = require("express")
const router = express.Router()

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

// All Fruits
router.get('/', async (req, res) => {
    res.json(fruits);
})

// One Fruit
router.get('/:id', async (req, res) => {
    const fruit = fruits[req.params.id - 1];
    res.json(fruit);
})