const express = require('express');

const app = express();

const router = express.Router();

app.use('/apiV1', router);
router.get('/', (req, res) => res.send('API is Live!'))
router.get('/user', (req, res) => res.send('/user calling'))
router.get('/group', (req, res) => res.send('/group calling'))
router.get('/post', (req, res) => res.send('/post calling'))


app.use('/users', router);
router.get('/:username', (req, res) => res.send(JSON.stringify(req.params)))

app.get('/', function (req, res) {
    res.send('Express Works');
});

app.listen(3000, function () {
    console.log(`Express Server Started on: http://localhost:3000`);
});