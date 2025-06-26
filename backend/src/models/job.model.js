const db = require('../config/db');

const createJob = (userId, job, cb) => {
  const sql = `INSERT INTO jobs (user_id, company, position, status, notes, applied_date)
               VALUES (?, ?, ?, ?, ?, ?)`;
               let appliedDate = job.applied_date?.split('T')[0] || null;
  const { company, position, status, notes } = job;
  db.query(sql, [userId, company, position, status, notes, appliedDate], cb);
};

const getJobsByUser = (userId, cb) => {
  const sql = `SELECT * FROM jobs WHERE user_id = ? ORDER BY created_at DESC`;
  db.query(sql, [userId], cb);
};

const updateJob = (userId, jobId, job, cb) => {
  const sql = `UPDATE jobs SET company=?, position=?, status=?, notes=?, applied_date=?
               WHERE id = ? AND user_id = ?`;
               let appliedDate = job.applied_date?.split('T')[0] || null;

  const { company, position, status, notes } = job;
  db.query(sql, [company, position, status, notes, appliedDate, jobId, userId], cb);
};

const deleteJob = (userId, jobId, cb) => {
  const sql = `DELETE FROM jobs WHERE id = ? AND user_id = ?`;
  db.query(sql, [jobId, userId], cb);
};

module.exports = {
  createJob,
  getJobsByUser,
  updateJob,
  deleteJob,
};
