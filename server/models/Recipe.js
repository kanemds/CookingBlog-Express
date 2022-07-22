const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: {
    type:String,
    required: ' This field is required.'
  },
  description: {
    type:String,
    required: ' This field is required.'
  },
  email: {
    type:String,
    required: ' This field is required.'
  },
  ingredients: {
    type:Array,
    required: ' This field is required.'
  },
  category: {
    type: String,
    enum: ['Sushi','Ramen','Seafood', 'Burger', 'Chinese Food', 'Pizza'],
    required: ' This field is required.'
  },
  image: {
    type:String,
    required: ' This field is required.'
  }
})

recipeSchema.index({ name: 'text', descriptioin: 'text' })


const recipe = mongoose.model('Recipe', recipeSchema)
 
module.exports = recipe
