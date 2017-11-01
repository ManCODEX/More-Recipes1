//import express from 'express';
//import Recipe from '../controller/recipeController';


//const app = express.Router();
app.get('/api', (req, res) => res.status(200).send({ message: 'Welcome to Recipe API!' }));
app.get('/api/v1/recipe', Recipe.getRecipork);
app.post('/api/v1/recipe', Recipe.createNewRecipork);
app.put('/api/v1/recipe/:recipeid', Recipe.updateRecipork);
app.delete('/api/v1/recipe/:recipeid', Recipe.deleteRecipork);

module.exports = app;

