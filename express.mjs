import express from 'express';
import cors from 'cors';

const APP = express();
APP.use(express.json());
APP.use(cors());

export default APP;