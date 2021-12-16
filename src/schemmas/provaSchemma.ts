import joi from 'joi';

const provaSchemma = joi.object({
    Name: joi.string().min(5).required(),
    CategoryId: joi.number().required(),
    Prof_DiscId: joi.number().required(),
    Link: joi.string().max(200).required(),
})




export {
    provaSchemma,
}