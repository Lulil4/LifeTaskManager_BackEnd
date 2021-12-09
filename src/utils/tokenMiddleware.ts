import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

  export async function verifyToken(req: Request, res: Response, next: NextFunction) {
    const SECRET = "secretword";
        const bearerToken = req.headers["authorization"]; 
    
        if (bearerToken !== undefined && bearerToken != "null"){
            try{
                const realToken = bearerToken.substring(1, bearerToken.length-1);
                const data = await jwt.verify(realToken, SECRET); 
                next(); 
            }
            catch(error){
                next(error);
            }
        }
        else{
            next({name:"ErrorToken", message:"No Token"});
        }
}