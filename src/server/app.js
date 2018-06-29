const path = require('path');
const express = require('express');
const app = express();
const serverRenderer = require('../../dist/serverRenderer').default

app.use(express.static('dist'));
app.use('/static', express.static('static'));

app.use(serverRenderer());

app.listen(9000, () => console.log('Listening on port 9000'));