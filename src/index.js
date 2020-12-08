"use strict"

// dependecies
const router = require('./routes/index');

// routes
const students   = require('./routes/_students');
const enrolls    = require('./routes/_enrolls');
const professors = require('./routes/_professors');
const courses    = require('./routes/_courses');

// constant
const basePath = '/v1';

router.express.get('/', (req, res) => {
  res.status(200).send('-- FUNCIONOU MESMO SEM BANCO --');
})

router.express.use(`${basePath}`, students);
router.express.use(`${basePath}`, enrolls);
router.express.use(`${basePath}`, professors);
router.express.use(`${basePath}`, courses);
