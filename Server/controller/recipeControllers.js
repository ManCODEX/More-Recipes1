import database from '../models/index';
import user from '../models/user';
import jsonwebtoken from 'jsonwebtoken';
const recipe = database.Recipes;
const Key = 'doxa';
class recipes{
//  create recipes
  //  sign up controller
  static editRecipe(req, res){
     recipe.findById(req.params.id) //finds the recipe id attached to the url
     
      .then((recipes) => {
       //console.log(recipes.userID);
        if(recipes.userID !== req.body['userID']){
          return res.status(400).json({status: 'Sorry Failed', message: 'Eeyah ,You are not authorized to edit this recipe!!!!'})
        }
        if(recipes.userID === req.body['userID']){
          const {recipe_name, ingredients, description} = req.body;
          recipes.update({
            recipe_name, ingredients, description, //update recipe
          })
          .then(recipe => res.status(201).json(recipe)) // whatever
          .catch(() => res.status(400).json({ status: 'Failed.', error: 'Chei!!! You just Could not update recipe' }));
          
        } 
      })
     
    }
  
  static deleteRecipe(req, res){
      { token} = req.header
      jsonwebtoken.verify({id: user.id}, Key, (err, decoded) => {
          
      });
    recipe.findById(req.params.id)
      .then((recipe) => {
      //console.log(req.params.id);
      //console.log(recipe.userID);
        if(recipe.userID !== req.body.['userID']){
          return res.status(400).json({status: 'Failed', message: 'You are not authorized to delete this recipe!!!!'})
        }
        if(recipe.clientsID === req.body['clientsID']){
          recipe.destroy({force : true})
          .then(recipe => res.status(201).json({ status: 'Successful', error: 'Record Deleted' }))
          .catch(() => res.status(400).json({ status: 'Failed.', error: 'Could not delete recipe' }))
        }
    })
  }
  
  static getRecipes(req, res){
    recipe.findAll() 
      .then( (recipes) => {
        return res.status(200).json({status: 'successful', message: recipes})    
      })
  }
}
    export default recipes;