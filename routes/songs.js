const { Router } = require('express');
const axios = require('axios');
const router = Router();

router.get('/api/songs/:nameSong', (req, res) => {
    var name = req.params.nameSong;
    axios.get(`https://itunes.apple.com/search?term=${name}&media=music`)
        .then((data) => {
            res.json(data.data);
        })
});
module.exports = router;