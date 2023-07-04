import express from 'express';
import { CowController } from './cow.controller';

const router = express.Router();

router.post('/create-cow', CowController.createCow);
router.get('/', CowController.getAllCows);
router.get('/:id', CowController.getSingleCow);

export const CowRouter = router;
