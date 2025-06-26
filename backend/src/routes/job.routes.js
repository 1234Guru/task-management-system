const express = require('express');
const router = express.Router();
const {
  addJob,
  getJobs,
  editJob,
  removeJob,
} = require('../controllers/job.controller');
const verifyToken = require('../middleware/auth.middleware');

router.use(verifyToken);

router.post('/', addJob);             // Create job
router.get('/', getJobs);             // Read all jobs
router.put('/:id', editJob);          // Update job
router.delete('/:id', removeJob);     // Delete job

module.exports = router;
