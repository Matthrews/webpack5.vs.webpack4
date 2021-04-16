const express = require('express');
const compression = require('compression')
const app = express()

app.use(express.static('build'))

app.use(compression())


const listener = app.listen(process.env.PORT || 1234, () => {
    console.log(`Listening on port ${listener.address().port}`);
})


