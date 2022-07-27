const express = require('express');

const govinfo = require('./govinfo-api');
const propublica = require('./propublica-api');
const router = express.Router();

router.use('/govinfo', govinfo);
router.use('/propublica', propublica);

module.exports = router;
