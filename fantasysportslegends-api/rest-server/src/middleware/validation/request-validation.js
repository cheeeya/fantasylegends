import Joi from '@hapi/joi';

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(10)
        .required(),
    
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
});

module.export = schema;