import { Router } from 'express';
import todoRouter from './Todo';

const router = Router();

router.use('/api', todoRouter);

export default router;
