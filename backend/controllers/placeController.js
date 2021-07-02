const Place = require("../models/placeModel");
const axios = require("axios");

exports.getPlaceById = async (req, res, next, id) => {
  try {
    const place = await Place.findById(id)
      .populate({
        path: "reviews",
        select: "user -_id",
        populate: {
          path: "user",
          select: "_id",
        },
      })
      .populate({
        path: "stayPlace",
        select: "name rating stayType hotelPhotoUrl -_id",
      })
      .populate({
        path: "category",
        select: "name",
      })
      .exec();
    (req.place = place), next();
  } catch (error) {
    res.status(200).json({ error: "Cannot find the place associated with Id" });
    return;
  }
};

exports.getNextPlacePage = async (req, res) => {
  try {
    const { lastObjectId } = req.params;
    let places;
    if(!lastObjectId) {
      places = await Place.find({}).limit(5);
    } else {
      places = await Place.find({_id: {$gt: lastObjectId.toString()}}).limit(5);
    }
    return res.status(200).json({ data: places});
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Cannot fetch the next place page"})
  }
}

exports.getPreviousPlacePage = async (req, res) => {
  try {
    const { firstObjectId } = req.params;
    let places;
    if (!firstObjectId) {
      places = await Place.find({})
      	.sort({_id: -1})
        .select("name location ratings stayPlace")
        .limit(5);
    } else {
      places = await Place.find({ _id: { $lt: firstObjectId.toString() } })
         .sort({_id: -1})
        .select("name location ratings stayPlace")
        .limit(5);
    }
    return res.status(200).json({ data: places });
  } catch (err) {
    console.log(err);
    return res.json({ error: "Cannot fetch Previous page" });
  }
};


exports.recommendsPlace = async (req, res) => {
  const givenData = req.body;
  try {
    const { data } = await axios.post(`${process.env.FLASK_API_URL}/recommends`, givenData);
    const nearByPlaceName = data.userData.near_you.map(item => item.place_name.toLowerCase());
    const recommendedPlaceName = data.userData.special_recommendation.map(place => place.toLowerCase());

    const nearByPlaceDetails = await Place.find({ name: { $in: nearByPlaceName }});
    const recommendedPlaceDetails = await Place.find({ name: { $in: recommendedPlaceName }});

    nearByPlaceDetails.map(place => {
      data.userData.near_you.map(placeObj => {
        if(place.name === placeObj.place_name.toLowerCase()) {
          const placeDistance = placeObj.distance;
          place.placeDis = placeDistance;
        }
      })
    });

    return res.status(200).json({
      data: { nearByPlaceDetails, recommendedPlaceDetails }
    });
  } catch(err) {
    console.log(err);
    return res.status(402).json({ error: "An error has occured"});
  }
}

exports.createPlace = async (req, res) => {
  try {
    //converting to Array of Object Id
    req.body.category = JSON.parse(req.body.category);
    req.body.stayPlace = JSON.parse(req.body.stayPlace);

    const place = new Place(req.body);
    place.placePhoto = req.placeImgUrl;
    await place.save();

    return res.status(200).json(place);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot save place in db" });
    return;
  }
};

exports.updatePlace = async (req, res) => {
  let { name, placePhoto, category, stayPlace, description } = req.body;
  const place = req.place;

  name = name || place.name;
  placePhoto = placePhoto || place.placePhoto;
  category = category || place.category;
  stayPlace = stayPlace || place.stayPlace;
  description = description || place.description;

  try {
    place.name = name;
    place.placePhoto = placePhoto;
    place.category = category;
    place.stayPlace = stayPlace;
    place.description = description;

    await place.save();
    return res.status(200).json({ data: place });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot save place in db" });
    return;
  }
};

exports.getAllPlace = async (req, res) => {
  try {
    const places = await Place.find({})
      .populate({
        path: "reviews",
        select: "user reviewText rating -_id",
        populate: {
          path: "user",
          select: "name profileImgURL",
        },
      })
      .populate({
        path: "stayPlace",
        select: "name rating stayType hotelPhotoUrl -_id",
      })
      .exec();

    return res.status(200).json(places);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Error fetching places from DB" });
  }
};

exports.deletePlace = async (req, res) => {
  try {
    const deletedPlace = await Place.findByIdAndDelete({ _id: req.place._id });
    return res.status(200).json({ deletedPlace });
  } catch (error) {
    res.status(400).json({ error: "Cannot delete place from db" });
    return;
  }
};
