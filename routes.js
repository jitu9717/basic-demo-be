/**
 * Main application routes
 */

'use strict';

const express = require('express');
const router = express.Router();

const beerAPI = require('./api/beer');

module.exports = config => {

    // Insert routes below.
    router.use('/api/beers', beerAPI(config));
    return router;
};