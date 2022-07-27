const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

const BASE_URL = 'https://api.propublica.org/congress/v1/';

router.get('/congress/:chamber', async (req, res) => {
    try{
        const { data } = await axios.get(`${BASE_URL}117/${req.params.chamber}/members.json`,{
            headers:{
                'X-API-Key': process.env.PROBUBLICA_API_KEY,
            }
        });
        console.log(data);
        res.json(data.results[0]);
    } catch (error){
        console.log(error);
    }
});
router.get('/bills/:memberId/:type', async (req, res) => {
    try{
        //{type} can only be: introduced, updated, active, passed, enacted, or vetoed
        const { data } = await axios.get(`${BASE_URL}members/${req.params.memberId}/bills/${req.params.type}`, {
            headers:{
                'X-API-Key': process.env.PROBUBLICA_API_KEY,
            }
        });
        res.json(data.results);
    } catch (error){
        console.log(error);
    }
});

module.exports = router;
