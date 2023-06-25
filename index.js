if(process.env.ENV != 'production') {
    require('dotenv').config();
}
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'pug')

app.use('/public', express.static(path.join(__dirname, 'css')))
app.use('/public', express.static(path.join(__dirname, 'front_js')))
app.use('/public', express.static(path.join(__dirname, 'assets')))
app.use('/public', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.listen(port, () => console.log(`App listening on port ${port}`))