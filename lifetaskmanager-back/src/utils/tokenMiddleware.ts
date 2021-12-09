import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

  export async function verifyToken(req: Request, res: Response, next: NextFunction) {
    const SECRET = "secretword";
    console.log('Request...');
        const bearerToken = req.headers["authorization"]; 
    
        if (bearerToken !== undefined && bearerToken != "null"){
            try{
                const realToken = bearerToken.substring(1, bearerToken.length-1);
                console.log(realToken);
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



/*
const handlerNotFound = (req, res) => {
    res.status(404).json(
        {
            error: "Route does not exist."
        }
    );
};

const handlerError = (error, req, res, next)=>{ 
    console.error(error.name); 

    if(error.name === "CastError"){
        res.status(400).send({error:"Id invalido"});
    }
    else if(error.name === "SyntaxError"){
        res.status(400).send({error:"Error de sintáxis"});
    }
    else if(error.name === "ReferenceError"){
        res.status(400).send({error: error.name, message: error.message});
    }
    else if(error.name === "ValidationError"){
        res.status(400).send({error: error.name, message: error.message});
    }
    else if(error.name === "ErrorToken"){
        res.status(401).send({error: error.name, message: error.message});
    }
    else if(error.name === "JsonWebTokenError"){
        res.status(403).send({error: error.name, message: error.message});
    }
    else if(error.name === "TokenExpiredError"){
        res.status(401).send({error: error.name, message: error.message});
    }
    else if(error.name === "UsuarioExistenteError"){
        res.status(401).send({error: error.name, message: error.message});
    }
    else{
        res.status(500).send({error:"Server inernal error"});
    }
    console.error(error.message);
    next(error);
};

const logger = ((req, res, next) => {
    console.log(req.path);
    console.log(req.method);
    next();
});
*/
