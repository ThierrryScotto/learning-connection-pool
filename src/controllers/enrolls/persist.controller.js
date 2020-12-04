"use strict"

// dependencies 
const validator = require('../../helpers/validate.helpers');

// Database
const enrollDB = require('../../services/db/_enrolls');

// private
const _validateBody = (body) => {
  const registerSchema = {
    'id'  : '/RegisterEnroll',
    'type': 'object',
    'properties': {
      'name'       : { 'type': 'string' },
      'address'    : { 'type': 'string' },
      'document'   : { 'type': 'string' },
      'fatherName' : { 'type': 'string' },
      'matherName' : { 'type': 'string' }
    },
    'required': ['name', 'address', 'document', 'fatherName', 'matherName']
  };
  return validator.validate(registerSchema, body);
};

const createEnroll = async (req, res) => {
  const postBody = _validateBody(req.body);
  
  try {  
    const createEnroll = await enrollDB.createEnroll(postBody);

    return res.status(201).send(createEnroll);
  } catch (err) {
    return res.status(500).send({ message: 'status-code-500_internal-error'});
  }
};

module.exports = {
  createEnroll
}