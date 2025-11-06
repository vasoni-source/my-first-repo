import { validationResult } from "express-validator";

const errorValidation = async(req,res,next)=>{
    const error = await validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
    next();
}
export default errorValidation;