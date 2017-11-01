//a full explanation'
import database from '../models/index';
import jsonwebtoken from 'jsonwebtoken';
const users = database.Users;
const key = 'doxa';
class userss {
//  sign up controller
    static createTheUser (req, res){
//      define this style of variable declaration?
        const {email, password,username} = req.body;
        if(password.length < 7 ){
          return res.status(400).send({status: false, message: "Password length must be greater than six (7)"  });
        }
//        bcrypt.hash(password, 5)
//        .then(hash) => {
//     
//        }
        return userss
          .create({
            email,
            password,
            username
          })
        .then (clients => res.status(201).send({
               success : true,
               message : "User Account has been Created",
        }))
//      needs catch statement
    }
  
  static signin (req, res){
//    find user
    users.findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((users) => {
      if (!users) {
        return res.status(400).send({ message: 'Eeyah Sorry User was not found.' });
      } else if (users.password !== req.body.password) {
        return res.status(400).send({ message: 'Oops!! Incorrect password.' });
      }
      const token = jsonwebtokent.sign({ id: users.id },Key, { expiresIn: 7000 });
      return res.status(201).send({ status: 'Success.', token, message: 'Login was successful.' });
    })
//    needs catch statement
  }
    static getUsers (req, res){
        return res.status(200).send({status: true, feed: clients });
    }
}
export default userss;