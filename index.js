// Create Node.js server with Express 
const express = require('express');
const app = express();
const port = 3000;

// Start Server
app.listen(port, () => {
    console.log(`Server is up! Running on port ${port}`);
});

// check Health API
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});