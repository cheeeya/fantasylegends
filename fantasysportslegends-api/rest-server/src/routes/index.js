import express from 'express';

import playerListRouter from '../components/playerList/playerListRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/playerList', playerListRouter);

export default router;
