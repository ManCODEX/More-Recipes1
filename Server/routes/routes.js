import userss from '../controller/userControllers.js';
import recipes from '../controller/recipeControllers';
import instLogin from '../middleware/InstLogin';
import  from '../middleware/InstUser';
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Generation of Lions!',
  }

    app.post('/api/v1/users', Users.createTheUser);
    app.get('/api/v1/users', Users.getUsers);
    app.post('/api/v1/users/signin',  Users.signin);
//  route checks for token availability then token originality before permission to add recipe
    app.post('/api/v1/recipes', instLogin.checkLogin, Check.checkUser, recipes.addRecipe);
));
    
//    dummy data api endpoints
//    app.get('/api/v1/recipe', Recipe.getRecipork);
//    app.post('/api/v1/recipe', Recipe.createRecipork);
//    app.put('/api/v1/recipe/:recipeid', Recipe.updateRecipork);
//    app.delete('/api/v1/recipe/:recipeid', Recipe.deleteRecipork);
//    app.post('/api/v1/recipe/:recipeId/upVote', Recipe.upVote)
//    app.get('/api/v1/recipe/:recipeid?sort=upvotes&order=desc', Recipe.getRecipork);
    
//    real data endpoints for users

    
};