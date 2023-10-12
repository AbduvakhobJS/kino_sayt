const RatingModel = require("../model/ratingModel");
const kinoModel = require("../model/kino_season_multfilm_Model");
const ObjectId = require("mongodb").ObjectId
const NewClass = require("../class/index");
const { count } = require("../model/ratingModel");


exports.createRating = async (req, res, next) => {
    const { rating, kino_seasons_multfilm_ID } = req.body;
    const result = new RatingModel({
        rating: rating,
        kino_seasons_multfilm_ID: kino_seasons_multfilm_ID
    })
    await result.save()
        .then(async() => {
            

            const countRatingModel = await RatingModel.aggregate([
                {
                    $match: {
                        kino_seasons_multfilm_ID: mongoose.Types.ObjectId(kino_seasons_multfilm_ID)
                    }
                },
                {
                    $group: {
                        _id: "$kino_seasons_multfilm_ID",
                        count: {$sum: 1}
                    }
                },
                {
                    $project: {
                        _id: 1,
                        count: 1,
                        totalSum: {
                            $round: [
                                {
                                    $divide: [
                                        "$totalSum", "$count"
                                    ]
                                },
                                1
                            ]
                        }
                    }
                }
            ])
            const updateRating = await kinoModel.findByIdAndUpdate(kino_seasons_multfilm_ID)
            if(countRatingModel == "") {
                updateRating.rating = rating
            }
            else {
                updateRating.rating = countRatingModel[0].totalSum
            }
            await updateRating.save()
            res.json({
                RatingModel: countRatingModel,
                model: updateRating
            })


        })
        .catch((error) => {
            res.json(error)
        }) 
}

// exports.RATING_one = async (req, res, next) => {
//     const result = new NewClass(RatingModel, req, res, next)
//     result.createData()
// }