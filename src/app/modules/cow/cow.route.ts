import express from 'express';
import { CowController } from './cow.controller';
import validateRequest from '../../middlewares/validateRequest';
import { CowValidation } from './cow.validation';

const router = express.Router();

router.post(
  '/create-cow',
  validateRequest(CowValidation.createCowZodSchema),
  CowController.createCow
);
router.get('/', CowController.getAllCows);
router.get('/:id', CowController.getSingleCow);
router.patch('/:id', CowController.updateCow);
router.delete('/:id', CowController.deleteCow);

export const CowRouter = router;
