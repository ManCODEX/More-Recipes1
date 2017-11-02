import database from '../models/index';
import jsonwebtoken from 'jsonwebtoken';
const recipok = db.Recipes;
class recipes{
//  create recipes
  //  sign up controller
  static addRecipess(req, res) {
      const {
        userID, recipe_name, description, ingredients,} = req.body;
    console.log(userID)
       recipe
        .create({
          userID: userID,
          recipe_name,
          description,
          ingredients,
        })
        .then(recipe => res.status(201).json(recipe))
        .catch(() => res.status(400).json({ status: 'Oops!! Failed.', error: 'Something happening.' }));
    }

    static editRecipess(req, res){
    recipe.findById(req.params.id)
    .then((recipe) => {
    if(recipe.clientsID !== req.params.id){
      return res.status(400).json({status: 'Oops!! Failed', message: 'Oops!! you cant edit any receipe,sorry!'})
        }
        if(recipe.clientsID === req.params.id){
          const {recipe_name, description, ingredients,} = req.body;
          recipe.update({
            recipe_name, description, ingredients
          })
          .then(recipe => res.status(201).json(recipe))
          .catch(() => res.status(400).json({ status: 'Oops!! Failed.', error: 'Eeyah!! you cant update recipe' }));
        } 
      })
     
    }
  
//  static deleteRecipe(req, res){
//    recipe.findById(req.params.id)
//      .then((recipe) => {
//        if(recipe.clientsID !== req.params.id){
//          return res.status(400).json({status: 'Failed', message: 'You are not authorized to edit this recipe!!!!'})
//        }
//        if(recipe.clientsID === req.params.id){
//          recipe.delete({
//            
//          })
//          .then(recipe => res.status(201).json(recipe))
//          .catch(() => res.status(400).json({ status: 'Failed.', error: 'Could not update recipe' }));
//        }
//    })
//  }
  
  static getRecipess(req, res){
    recipe.findAll()
//      .then((recipe) => {
//          
//            })
  }
}