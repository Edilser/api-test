const { Router } = require('express');
const axios = require('axios');
const router = Router();

router.get('/api/movies/:nameMovie', (req, res) => {
    var name = req.params.nameMovie;
    axios.get(`https://itunes.apple.com/search?term=${name}&media=movie`)
        .then((data) => {
            res.json(data.data);
        })
});