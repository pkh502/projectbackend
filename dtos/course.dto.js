// import Joi from 'joi';

// export const courseQueryDto = Joi.object({
//   instructorId: Joi.number().integer().optional(),
// });

// export const createCourseDto = Joi.object({
//   title: Joi.string().min(3).max(100).required(),
//   description: Joi.string().max(1000).optional(),
//   isPublished: Joi.boolean().optional(),
//   image: Joi.string().optional(),
//   category: Joi.string().max(100).required()
// });

// export const updateCourseDto = Joi.object({
//   title: Joi.string().min(3).max(100).optional(),
//   description: Joi.string().max(1000).optional(),
//   isPublished: Joi.boolean().optional(),
//   image: Joi.string().optional(),
//   category: Joi.string().max(100).optional()
// });

// export const courseIdDto = Joi.object({
//   id: Joi.number().integer().required(),
// });

import Joi from 'joi';

export const courseQueryDto = Joi.object({
  instructorId: Joi.number().integer().optional(),
});

export const createCourseDto = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().max(1000).optional(),
  isPublished: Joi.boolean().optional(),
  image: Joi.string().optional(),
  categoryId: Joi.number().integer().required(),  // Category is required as a string
});

export const updateCourseDto = Joi.object({
  title: Joi.string().min(3).max(100).optional(),
  description: Joi.string().max(1000).optional(),
  isPublished: Joi.boolean().optional(),
  image: Joi.string().optional(),
  categoryId: Joi.number().integer().optional()
});

export const courseIdDto = Joi.object({
  id: Joi.number().integer().required(),
});
