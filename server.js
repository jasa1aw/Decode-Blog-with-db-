//Add and connect library
const express = require('express');
const app = express();

//MongoDb
require('./server/config/db')

//Configuration
app.use(express.static('public'));
app.use(express.urlencoded());
app.set("view engine", "ejs");

//Router
app.use(require('./server/pages/router'))
app.use(require('./server/Categories/router'))

//Connect port
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Sever work on port ${PORT}`);
})