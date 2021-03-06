const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end(`Will add the promotion: ${req.body.name} with details: ${req.body.description}`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promoRouter.route("/:promoId")
.get((req,res,next) => {
  res.end(`Will send details of the promotion: ${req.params.promoId} to you!`);
})
.put((req, res, next) => {
  res.statusCode = 201;
  res.end(`Will update details of the promotion: ${req.params.promoId} with: description ${req.body.description} and name: ${req.body.name}`);
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotions/:promoId');
})
.delete((req, res, next) => {
  res.end(`Deleting promotion id: ${req.params.promoId} !`);
});

module.exports = promoRouter;
