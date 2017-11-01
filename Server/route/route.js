import Recipe from '../controller/recipeControllers';
import Users from '../controller/userControllers';
import recipe from '../controller/recipes';
import instLogin from '../middleware/isLoggedIn';
import Check from '../middleware/InstUser';
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Way things work!',
}));
    //    endpoints for users
    app.post('/api/v1/users', Users.createTheUser);
    app.get('/api/v1/users', Users.getUsers);
    app.post('/api/v1/users/signin',  Users.signin);
//  route checks for token availability then token originality before permission to add recipe
    app.post('/api/v1/recipes', instLogin.checkLogin, Check.checkUser, recipe.addRecipess);
    app.delete('/api/recipes/recipeId',recipe.deleteRecipe);
};
