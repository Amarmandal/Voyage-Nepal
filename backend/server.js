require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 8000;


//connecting database mongoose
mongoose.connect('mongodb://localhost:27017/voyage_nepal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
mongoose.connection
    .once('open', () => {
        console.log('DATABASE CONNECTED SUCCESSFULLY');
    })
    .on('error', err => console.log(err))

//all middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//all routes
const userRoute = require('./routes/userRoutes');
const authRoute = require('./routes/authRoutes');
const categoryRoute = require('./routes/categoryRoutes');

app.use('/api', userRoute);
app.use('/api', categoryRoute);
app.use('/api', authRoute);

app.listen(port, (err) => {
    if(!err) {
        console.log(`App listening at ${port}`);
    } else  {
        console.log(err);
    }
})


