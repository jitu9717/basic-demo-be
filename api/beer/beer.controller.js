'use strict';

const beerService = require('./beer.service');

module.exports = config => {

    const beerController = {};

    beerController.get = (req, res) => {
        /*setTimeout(function () {
            beerService.getAllBeers(null, (err, beers) => {
                if (err) { return res.json(err); }
                return res.send(beers);
            });
        },3000);*/
        beerService.getAllBeers(null, (err, beers) => {
            if (err) { return res.json(err); }
            return res.send(beers);
        });
    };

    return beerController;
};