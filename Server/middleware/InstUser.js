import jsownwebtoken from 'jsonwebtoken';
import user from '../models';
const secretKkey = 'doxa';
class Check{
  
  static checkUser(req, res, next){
    let verify_jwt;
    try{
      verify_jwt = jwt.verify(req.token, secret_key);
    }
    catch(error){
      res.status(400).send({status: 'failed', message: 'Unauthorized User, please do provide your correct information'});
    }
    
    users.findById(verify_jwt.id)
      .then((user) => {
//      token valid but user id not valid
        if(!users){
          const error = res.status(403).send({status: failed, message: 'Invalid token'});
          return next(error);
        }
      //find out what next() represent
        req.userID = verify_jsonwebtoken.id;
        next();
      
      })
      .catch( res.status(400).send({status: 'Application Error', message: 'oops!! sorry it could not run application at this time'}));
  }
  
}
export default Check;