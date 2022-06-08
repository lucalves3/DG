// index.js
const express = require('express');
const cors = require('cors');
const Routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', Routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;
