const Place = require("../models/placeModel");

exports.getPlaceById = async (req, res, next, id) => {
  try {
    const place = await Place.findById({_id: id})
      .populate({
        path: "reviews", 
        select: "user -_id",
        populate: {
            path: "user",
            select: "_id"
        } 
    })
      .exec();
    req.place = place;
    next();
  } catch (error) {
    res.status(200).json({ error: "Cannot find the place associated with Id" });
    return;
  }
};

// exports.getPlaceByLocation = () => {
//     //
// }

exports.createPlace = async (req, res) => {
  try {
    const place = new Place(req.body);
    await place.save();
    return res.status(200).json(place);
  } catch (error) {
    res.status(400).json({ error: "Cannot save place in db" });
    return;
  }
};

exports.updatePlace = async (req, res) => {
  const { name, placePhoto, category } = req.body;
  const place = req.place;
  try {
    place.name = name;
    place.placePhoto = placePhoto;
    place.category = category;

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
            select: "name profileImgURL"
        }
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
