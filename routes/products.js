const express = require('express');
const router = express.Router();


router.get('/', (request, response) => {
    const output = {};
    // todo: filters
    response.json(output);
});

router.get('/:id', (request, response) => {
    const id = request.params.id;
    const output = {};
    response.json(output);
});

router.post('/', (request, response) => {
    const output = {};
    console.log(request.body);
    response.status(201);
    response.json(output);
});

router.put('/', (request, response) => {
    const output = {};
    response.status(202);
    response.json(output);
});

router.delete('/:id', (request, response) => {
    const id = request.params.id;
    const output = {};
    response.status(204);
    response.json(output);
});

module.exports = router;
