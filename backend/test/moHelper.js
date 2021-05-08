const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost:27017/voyage_nepal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  mongoose.connection
    .once('open', () => {
        console.log('DATABASE CONNECTED SUCCESSFULLY')
        done();
    })
    .on('error', err => {
      console.log(err);
    });
});


before(done => {
  const {users, reviews, hotels, categories, places} = mongoose.connection.collections;
  users.drop()
    .then(() => {
      console.log('User Collection Dropped');
      categories.drop();
    })
    .then(() => {
      console.log('Categories Collection Droped');
      hotels.drop();
    })
    .then(() => {
      console.log('Hotel collection droped');
      reviews.drop();
    })
    .then(() => {
      console.log('Review Collection dropped');
      places.drop();
    })
    .then(() => {
      console.log('Places collection dropped');
      done();
    })
    .catch(err => {
      console.log(err);
      done();
    })
});