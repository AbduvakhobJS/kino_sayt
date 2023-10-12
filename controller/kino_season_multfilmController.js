const Kino_season_multfilm_Controller = require('../model/kino_season_multfilm_Model')
const NewClass = require('../class/index')

exports.createOne = async (req, res, next) => {
    const {
        nameuz, nameru, nameen,
        descriptionuz, descriptionru, descriptionen,
        age,
        budget,
        category_ID, // ["sasasas", "asasasa", "asasassa"]
        year_ID,
        language_ID,
        subtitle_ID,
        cast_ID,
        director_ID,
        country_ID,
        janr_ID,
        action,
    } = req.body

    const category = []
    for (let item of category_ID) {
        const values = item
        category.push(values)
    }

    const year = []
    for (let item of year_ID) {
        const values = item
        year.push(values)
    }

    const language = []
    for (let item of language_ID) {
        const values = item
        language.push(values)
    }

    const subtitle = []
    for (let item of subtitle_ID) {
        const values = item
        subtitle.push(values)
    }

    const cast = []
    for (let item of cast_ID) {
        const values = item
        cast.push(values)
    }

    const director = []
    for (let item of director_ID) {
        const values = item
        director.push(values)
    }

    const country = []
    for (let item of country_ID) {
        const values = item
        country.push(values)
    }

    const janr = []
    for (let item of janr_ID) {
        const values = item
        janr.push(values)
    }
    const result = new Kino_season_multfilm_Controller({
        name: {
            uz: nameuz,
            ru: nameru,
            en: nameen,
        },
        description: {
            uz: descriptionuz,
            ru: descriptionru,
            en: descriptionen,
        },
        age: age,
        budget: budget,
        action: action,
        category_ID: category,
        year_ID: year,
        language_ID: language,
        subtitle_ID: subtitle,
        director_ID: director,
        country_ID: country,
        janr_ID: janr,
        cast_ID: cast,
        action: action,
    })

    result.save()
        .then(() => {
            res.json(result)
        })
        .catch((e) => {
            res.json(e)
        })


        
}
exports.get_one = async (req, res, next) => {
    const result = new NewClass(Kino_season_multfilm_Controller, req, res, next)
    result.getOne()
}
exports.get_all = async (req, res, next) => {
    const result = new NewClass(Kino_season_multfilm_Controller, req, res, next)
    result.getAll()
}
exports.update_one = async (req, res, next) => {
    const result = new NewClass(Kino_season_multfilm_Controller, req, res, next)
    result.update_Without_File()
}
exports.delete_one = async (req, res, next) => {
    const result = new NewClass(Kino_season_multfilm_Controller, req, res, next)
    result.deleteOne()
}
exports.update_one = async (req, res, next) => {
    const result = new NewClass(Kino_season_multfilm_Controller, req, res, next)
    result.update_With_File()
}


