"use strict"

// dependencies
const postgres = require('../connection/index');

const createStudent = async (idEnroll) => {
  const query = `
    INSERT INTO students 
      (id_enroll)
    VALUES 
      ($1) 
    RETURNING *;
  `;

  const values = [idEnroll];
  return await postgres.queryFirstOrNull(query, values);
};

const getStudents = async () => {
  const query = `
    SELECT 
      * 
    FROM 
      students
  `;

  return await postgres.query(query);
};

const getStudentsById = async (id) => {
  const query = `
    SELECT 
      * 
    FROM 
      students
    WHERE 
      id = $1
  `;

  const values = [id];
  return await postgres.queryFirstOrNull(query, values);
};

module.exports = {
  createStudent,
  getStudentsById,
  getStudents
}