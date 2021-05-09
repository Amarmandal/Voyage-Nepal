const User = require('../models/userModel');
const Category = require('../models/categoryModel');
const Place = require('../models/placeModel');
const Review = require('../models/reviewModel');
const HotRes = require('../models/hotresModel');
const assert = require('assert');


//Creat Test for User
describe('USER CREATE TEST', () => {
    it('Saving User Record into Database', (done) => {
        const testUser = new User({
            name: 'amar',
            email: 'amarmandal2073@gmail.com',
            gender: 'Male',
            city: 'Biratnagar',
            DOB: '2001-07-10'
        });

        testUser.save()
            .then(() => {
                assert(!testUser.isNew);
                done();
            })
            .catch((err) => {
                console.log(`ERROR SAVING USER: ${err}`);
            })
    })
});


//Create Test For Review
describe('REVIEW CREATE TEST', () => {
    let reviewUser;
    beforeEach(done => {
        reviewUser = new User({
            name: 'Aarati',
            email: 'testemail2073@gmail.com',
            gender: 'Male',
            city: 'Biratnagar',
            DOB: '2001-07-10'
        });

        reviewUser.save()
            .then(() => {
                console.log('Review Saved');
            })
            .then(() => done())
            .catch(err => {
                console.log(err);
            })
    })

    it('Posting Review', (done) => {
        const reviewerId = reviewUser._id;
        const userReview = new Review({
            reviewText: 'I really liked this hotel. I will surely come',
            userId: reviewerId
        });
        userReview.save()
            .then(() => {
                assert(!userReview.isNew);
                assert(userReview.userId.toString() === reviewerId._id.toString());
                done()
            })
            .catch(err => {
                console.log(err);
            });
    })
})

//Create Place Test 
describe('CREATE PLACE', () => {
    let category1;
    let category2;
    let stayPlace1;
    let stayPlace2;
    let testUser;
    let testReview;
    beforeEach(done => {
        category1 = new Category({
            name: 'Test Category 1',
            difficulty: 4
        });

        category1.save()
            .then(() => {
                category2 = new Category({
                    name: 'Test Category 1',
                    difficulty: 4
                });
                category2.save();
            }).then(() => {
                stayPlace1 = new HotRes({
                    name: 'Hotel Century',
                    rating: '3'
                });
                stayPlace1.save();
            }).then(() => {
                stayPlace2 = new HotRes({
                    
                        name: 'Hotel Century',
                        rating: '3'
                    
                });
                stayPlace2.save();
            }).then(() => {
              testUser = new User({
                  name: 'testtest',
                  email: 'random@gmail.com',
                  gender: 'female',
                  city: 'Biratnagar',
                  isAdmin: 'false',
                  DOB: '2010-07-08'
              });

              testUser.save();
            }).then(() => {
                testReview = new Review({
                    reviewText: 'Nice Place is kathmandu',
                    userId: testUser._id
                });

                testReview.save();
            }).then(() => done());
    })

    it('Saving place into db', done => {
        const testPlace = new Place({
            name: 'Kathmandu',
            category: [category1._id, category2._id],
            stayPlace: [stayPlace1._id, stayPlace2._id],
            reviews: [testReview._id]
        })

        testPlace.save()
            .then((doc) => {
                assert(!doc.isNew);
            })
            .then(() => done())
            .catch(err => console.log(err))
    })
})


//Create Category Test
describe('CREATE CATEGORY TEST', () => {
    it('Saving Category in DB', (done) => {
        const testCategory = new Category({
            name: 'Test Category',
            difficulty: 5
        });

        testCategory.save()
            .then((doc) => {
                assert(!doc.isNew);
            })
            .then(() => done())
            .catch(err => {
                console.log(err);
                done()
            })
    })
});


// Create hotel and Restaurant Create Test
describe('CREATE HOTEL TEST', () => {
    it('Saving hotel and restaurant into db', (done) => {
        const testHotel = new HotRes({
            name: 'Hotel Black Stone',
            rating: 4.5,
            stayType: 'Restaurant'
        });

        testHotel.save()
            .then((doc) => {
                assert(!doc.isNew);
                assert(['Hotel', 'Restaurant'].includes(doc.stayType));
            })
            .then(() => done())
            .catch(err => {
                console.log(err);
                done();
            })
    })
})

