import express from 'express'
import { authencticate } from './../auth/verifyToken.js';
import { getCheckoutSession } from '../Controllers/bookingController';

const router = express.Router()

router.post('/checkout-session/:doctorId', authencticate, getCheckoutSession)

export default router;