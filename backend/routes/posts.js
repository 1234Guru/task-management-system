import { Router } from 'express';
import { query, validationResult } from 'express-validator';
import { getPosts } from '../controllers/postsController.js';

const router = Router();

router.get(
  '/',
  [ query('q').optional().isString().isLength({ max: 100 }).trim().escape() ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  getPosts
);

export default router;