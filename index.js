const express = require('express');
const path = require('path');
const http = require('./server/http');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/graphql', http);

const port = process.env.PORT || 5000;
app.listen(port);