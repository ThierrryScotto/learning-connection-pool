"use strict"

// dependencies 
const validator = require('../../helpers/validate.helpers');

// Database
const courseDB = require('../../services/db/_courses');

// private
const _validateBody = (body) => {
  const registerSchema = {
    'id'  : '/RegisterEnroll',
    'type': 'object',
    'properties': {
      'name'   : { 'type': 'string' },
      'dateN1' : { 'type': 'string' },
      'dateN2' : { 'type': 'string' },
      'status' : { 'type': 'string' }
    },
    'required': ['name', 'dateN1', 'dateN2']
  };
  return validator.validate(registerSchema, body);
};

const createCourse = async (req, res) => {
  const postBody = _validateBody(req.body);
  
  try {  
    const createdCrouse = await courseDB.createCourse(postBody);

    return res.status(201).send(createdCrouse);
  } catch (err) {
    return res.status(500).send({ message: 'status-code-500_internal-error'});
  }
};

module.exports = {
  createCourse
}