import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-Яа-яІіЇїГгґ]{1,20}$')).required().messages({
        'string.empty': 'Це поле не може бути пустим',
        'string.pattern.base': 'Тільки букви мин 1 макс 20'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.base': 'Ціна може бути від 1 - 1 000 000',
        'number.min': 'Ціна має бути більше або рівне 0',
        'number.max': 'Ціна має бути не більше 1 000 000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base': 'Рік може бути від 1900 до теперішнього'
    })
})

