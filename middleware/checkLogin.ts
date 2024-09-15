import Joi from "joi";

export const loginSchema = Joi.object({
  username: Joi.string().min(3).max(15).required().message(),
  password: Joi.string().min(3).max(15).required().message()
})


