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

// get all fruits
router.get('/', async (req, res) => {
    res.json(fruits);
})

// get one fruit
router.get('/:id', async (req, res) => {
    const getFruit = fruits[req.params.id - 1];
    res.json(getFruit);
})

// create fruit
router.post('/', check[("color").not().isEmpty().trim()], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.json({error: errors.array()});
    } else {
        const newFruit = req.body;
        fruits.push(newFruit);
        res.json(newFruit);
    }
})

// update fruit
router.put('/:id', async (req, res) => {
    const id = req.params.id - 1;
    fruits[id] = req.body;
    res.json(fruits[id])
})

// delete fruit
router.delete('/:id', async (req, res) => {
    const id = req.params.id - 1;
    const deletedFruit = fruits[id];
    fruits.splice(id, 1);
    res.json(deletedFruit);
})

module.exports = router;