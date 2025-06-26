const {
  createJob,
  getJobsByUser,
  updateJob,
  deleteJob,
} = require('../models/job.model');

const addJob = (req, res, next) => {
  const userId = req.user.id; 
  const job = req.body;
//console.log(job)
  if (!job.company || !job.position) {
    return res.status(400).json({ message: 'Company and Position are required' });
  }

  createJob(userId, job, (err, result) => {
    if (err) return next(err);
    return res.status(201).json({ message: 'Job added successfully' });
  });
};

const getJobs = (req, res, next) => {
  const userId = req.user.id;
  getJobsByUser(userId, (err, rows) => {
    if (err) return next(err);
    return res.status(200).json(rows);
  });
};

const editJob = (req, res, next) => {
  const userId = req.user.id;
  const jobId = req.params.id;
  const job = req.body;

  updateJob(userId, jobId, job, (err, result) => {
    if (err) return next(err);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Job not found or unauthorized' });
    }
    return res.status(200).json({ message: 'Job updated' });
  });
};

const removeJob = (req, res, next) => {
  const userId = req.user.id;
  const jobId = req.params.id;

  deleteJob(userId, jobId, (err, result) => {
    if (err) return next(err);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Job not found or unauthorized' });
    }
    return res.status(200).json({ message: 'Job deleted' });
  });
};

module.exports = {
  addJob,
  getJobs,
  editJob,
  removeJob,
};
