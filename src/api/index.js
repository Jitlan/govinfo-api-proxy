const express = require('express');

const govinfo = require('./govinfo-api');

const router = express.Router();

router.use('/', govinfo);

module.exports = router;
