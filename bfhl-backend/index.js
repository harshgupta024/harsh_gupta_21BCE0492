// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const bfhlRoutes = require('./routes/bfhl');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/bfhl', bfhlRoutes);

app.get('/', (req, res) => {
    res.send('BFHL Challenge API');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
