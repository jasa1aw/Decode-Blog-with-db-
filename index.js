//Add and connect library
const express = require('express');
const app = express();

//Configuration
app.use(express.static('public'));
app.set('view engine', 'ejs');

//
app.get('/', (req, res) => {
    res.render('main')
})

//Connect port
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Sever work on port ${PORT}`);
})