require('../models/database')
const Category = require('../models/Category')

const homepage = async (req, res) => {
  try {
    const limitNumber = 6
    const categories = await Category.find({}).limit(limitNumber)
    res.render('index', { title: 'Home Page', categories } )
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" })
  }
}

const allCategories = async (req, res) => {
  try {
    const limitNumber = 20
    const categories = await Category.find({}).limit(limitNumber)
    res.render('categories', { title: 'Categories', categories } )
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" })
  }
}

// hard code insert data blow to start
// const insertCategoryData = async () => {
//   try {
//     await Category.insertMany([
//       {
//         "name": "Sushi",
//         "image": "sushi.jpg"
//       },
//       {
//         "name": "Ramen",
//         "image": "ramen.jpg"
//       },
//       {
//         "name": "Seafood",
//         "image": "seafood.jpg"
//       },
//       {
//         "name": ">Burgers",
//         "image": "burgers.jpg"
//       },
//       {
//         "name": "Beijing Duck",
//         "image": "duck.jpg"
//       },
//       {
//         "name": "Pizza",
//         "image": "pizza.jpg"
//       }
//     ])

//   } catch (error) {
//     console.log(error)
//   }
// }

// insertCategoryData()

module.exports = { 
  homepage,
  allCategories
}