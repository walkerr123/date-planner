const express = require('express');
const { helloController, datePlanerController } = require('./controller');
const router = express.Router();


//sample api route
router.get('/hello', helloController);
router.post('/date-planner', datePlanerController);
router.get('/Login', (req, res) => {
    res.status(200).json({ message: 'This is login endpoint!'});
});
/**
 * Perform login logic here
 */
router.get('/Register', (req, res) => {
    res.status(200).json({ message: 'This is Register endpoint!'});
});
/**
 * Perform register logic here
 */

module.exports = router;