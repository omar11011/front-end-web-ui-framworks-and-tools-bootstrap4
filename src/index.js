const path = require('path')
const morgan = require('morgan')
const express = require('express')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(morgan('tiny'))
app.use(routes)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log('Server on port', port)
})