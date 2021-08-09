require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;

//connecting database mongoose
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
mongoose.connection
    .once('open', () => {
        console.log('DATABASE CONNECTED SUCCESSFULLY');
    })
    .on('error', err => console.log(err))

//all middlewares
app.use(express.json());
app.use(cors());

//all routes
const userRoute = require('./routes/userRoutes');
const authRoute = require('./routes/authRoutes');
const categoryRoute = require('./routes/categoryRoutes');
const reviewRoute = require('./routes/reviewRoutes');
const placeRoute = require('./routes/placeRoutes');
const hotresRoute = require('./routes/hotresRoutes');
const coreRoute = require('./routes/coreRoute');

app.use('/api', userRoute);
app.use('/api', categoryRoute);
app.use('/api', authRoute);
app.use('/api', reviewRoute);
app.use('/api', placeRoute);
app.use('/api', hotresRoute);
app.use('/api', coreRoute);


app.listen(port, (err) => {
    if(!err) {
        console.log(`App listening at ${port}`);
    } else  {
        console.log(err);
    }
})


