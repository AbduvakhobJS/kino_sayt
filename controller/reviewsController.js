const ReviewsModel = require('../model/reviewsModel')
const NewClass = require('../class/index')



exports.createReviews = async (req, res, next) => { 
    const {
        video_ID, message, user_ID
    } = req.body
    const result = ReviewsModel({
        video_ID: video_ID,
        message: message,
        user_ID: user_ID
    })
    await result.save()
    .then(() => {
        res.json(result);
    })
    .catch((error) => {
        res.json(error);
    })
}

exports.reviewsRating = async (req, res, next) => {
    const result = new NewClass(ReviewsModel, req, res, next)
    result.createData()
}

