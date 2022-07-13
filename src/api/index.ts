import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post(
  '/register', [ 
    body('email').isEmail(), body('password').isAlphanumeric(),
    body('password').isLength({ min: 8 })
  ], async(req: Request, res: Response) => {
    
    return res.status(200).json({ 
      success: true, message:"Completed", data: {}
    });
});



export default router;
