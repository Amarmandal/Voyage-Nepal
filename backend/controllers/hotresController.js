const HotRes = require('../models/hotresModel');

exports.getHotelById = async (req, res, next, id) => {
  try {
    const hotel = await HotRes.findById(id);
    req.stayPlace = hotel;
    next()
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Not Found in DB"});
  }
}

exports.createHotelForPlace = async (req, res) => {
  const hotel = new HotRes(req.body);
  hotel.hotelPhotoUrl = req.hotelImgUrl;
  
  try {
    await hotel.save();

    return res.status(200).json({ data: hotel});
  } catch (error) {
    console.log(error);

    return res.status(400).json({ error: "Cannot save hotel to DB"})
  }
};

exports.updateHotel = async (req, res) => {
  const { name, rating, stayType, photoUrl } = req.body;
  const hotel = req.stayPlace;
  hotel.name = name;
  hotel.rating = rating;
  hotel.stayPlace = stayType;
  hotel.hotelPhotoUrl = photoUrl;

  try {
    await hotel.save();
    return res.status(200).json('Stay Place has been updated successfully');
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Cannot update the Hotel or Restaurant"});
  }
}

exports.deleteHotel = async (req, res) => {
  const targetId = req.stayPlace._id;

  try {
    const doc = await HotRes.findByIdAndDelete(targetId);
    return res.status(200).json({ deletedDoc: doc});
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Cannot delete the target doc"})
  }

}