import {Router} from 'express';
import * as pageController from '../controllers/pageController';

const router = Router();

router.get('/', pageController.main);

export default router;