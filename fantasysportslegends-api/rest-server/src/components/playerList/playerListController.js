import { success, error } from '../../lib/log';

import axios from 'axios';


export const getPlayerListController = async (req, res) => {
  try {
    const { data } = await axios.get(`http://api.sportradar.us/nba/trial/v5/en/seasons/2018/reg/leaders.json?api_key=${process.env.SR_NBA_KEY}`);
    return res.status(200).send(data);
  } catch (err) {
    error('getPlayerListController - error= ', err);
    return res.status(400).send(err);
  }
}
