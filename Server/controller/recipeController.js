import recipe from '../model/recipork';

class Recipork {
  static getRecipork(req, res) {
    // checks url for sort=upvotes  & order=desc
    if (req.query.sort === 'upvotes' && req.query.sort === 'desc') {
      recipe.sort((recipe1, recipe2) => recipe2 - recipe1);
    } else {
      recipe.sort((recipe1, recipe2) => recipe1 - recipe2);
    }
    return res.status(201).send({ status: true, feed: recipe });
  }

  static createNewRecipork(req, res) {
    // push new record to dummy storage
    recipe.push({
      //            increases the id by 1 to get its current length
      id: recipe.length + 1,
      //            attachs body of message to a unique key in dummy data
      ingredients: req.body.ingredients,
      description: req.body.description,
    });
    // return successful message
    res.status(200).send({ status: true, message: recipe.slice(-1) });
  }

  static updateRecipork(req, res) {
    for (let i = 0; i <= recipe.length; i += 1) {
      //            check if selected id = provided id
      if (recipe[i].id === req.params.recipeid) {
        recipe[i].meal = req.body.meal;
        recipe[i].ingredients = req.body.ingredients;
        recipe[i].description = req.body.description;

        return res.status(200).send({ status: true, message: recipe[i] });
      }
    }
  }

  static deleteRecipork(req, res) {
    for (let i = 0; i <= recipe.length; i += 1) {
      if (recipe[i].id === parseInt(req.params.recipeid, 10)) {
        recipe.slice(i, 1);
        return res.status(200).send({ status: true, message: recipe[i] });
      }
    }
  }
}

export default Recipork;
