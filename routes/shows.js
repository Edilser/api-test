const { Router } = require('express');
const axios = require('axios');
const router = Router();

router.get('/api/shows/:nameShow', (req, res) => {
    var name = req.params.nameShow;
    axios.get(`http://api.tvmaze.com/search/shows?q=${name}`)
        .then((data) => {
            res.json(data.data);
        })
});