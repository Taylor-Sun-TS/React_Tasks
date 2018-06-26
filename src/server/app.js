const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use('/static', express.static('static'));

app.use((req, res) => {
    const resFile = path.resolve(__dirname, '../../dist/index.html');
    res.sendFile(resFile);
});

app.listen(9000, () => console.log('Listening on port 9000'));