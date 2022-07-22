const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipeController')


router.get('/', recipeController.homepage)

router.get('/recipe/:id', recipeController.viewRecipe)
router.get('/categories', recipeController.allCategories)
router.get('/categories/:id', recipeController.allCategoriesById)






module.exports = router