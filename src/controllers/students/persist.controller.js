"use strict"

// dependencies 
const validator = require('../../helpers/validate.helpers');

// Database
const enrollDB = require('../../services/db/_enrolls');
const userDB   = require("../../services/db/_students");

// private
const _validateBody = (body) => {
  const registerSchema = {
    'id'  : '/RegisterUser',
    'type': 'object',
    'properties': {
      'enrollId': { 'type': 'number' }
    },
    'required': ['enrollId']
  };
  return validator.validate(registerSchema, body);
};

const createStudent = async (req, res) => {
  const postBody = _validateBody(req.body);
  
  try {
    const enroll = await enrollDB.getEnrollById(postBody.enrollId);
    
    if (!enroll) {
      return res.status(404).send({ message: `Enroll ${postBody.enrollId} not found` });
    }
  
    const createUser = await userDB.createStudent(enroll.id);

    return res.status(201).send(createUser);
  } catch (err) {
    return res.status(500).send({ message: 'status-code-500_internal-error'});
  }
};

module.exports = {
  createStudent
}