require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.listen(port, (err) => {
    if(!err) {
        console.log(`App listening at ${port}`);
    } else  {
        console.log(err);
    }
})


