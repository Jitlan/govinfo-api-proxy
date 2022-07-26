const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();

const BASE_URL = 'https://api.govinfo.gov/';

router.get('/collections', async (req, res) => {
    try{
        const params = new URLSearchParams({
            api_key: process.env.GOVINFO_API_KEY,
        });
        const { data } = await axios.get(`${BASE_URL}collections?${params}`);
        res.json(data);
    } catch (error){
        console.log(error);
    }
});
router.get('/collections/:code/:startDate', async (req, res) => {
    try{
        const params = new URLSearchParams({
            pageSize: 100,
            offsetMark: '*',
            api_key: process.env.GOVINFO_API_KEY,
        });

        const { data } = await axios.get(`${BASE_URL}collections/${req.params.code}/${req.params.startDate}?${params}`);
        console.log(data);
        res.json(data);
    } catch (error){
        console.log(error);
    }
});
router.get('/bill/:packageId', async (req, res) => {
    try{
        const params = new URLSearchParams({
            api_key: process.env.GOVINFO_API_KEY,
        });
        const { data } = await axios.get(`${BASE_URL}packages/${req.params.packageId}/summary?${params}`);
        res.json(data);
    } catch (error){
        console.log(error);
    }
});

module.exports = router;
