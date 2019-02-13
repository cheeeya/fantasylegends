import express from 'express';

import { getPlayerListController } from './playerlistController';


const router = express.Router();

router.route('/fetch/playerlist')
  .get(getPlayerListController);

export default router;
