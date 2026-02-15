// Create Node.js server with Express
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const sampleMiddleware = require('./middleware');
const abc = require('./routes');

// start server
app.listen(port, () => {
    console.log(`Server is up. Running on port ${port}!`);
});

//Allow CORS for all origins (for development purposes only, consider restricting in production)
app.use(cors({
    origin: '*', //for development, allow all origins. In production, specify allowed origins.
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/api',sampleMiddleware,abc);


// check Health API
app.get ('/health', (req,res) => {
    res.status(200).json({status : 'ok'});
on({status : 'ok'});
});