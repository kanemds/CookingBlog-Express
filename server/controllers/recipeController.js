require('../models/database')
const Category = require('../models/Category')
const Recipe = require('../models/Recipe')

const homepage = async (req, res) => {
  try {
    const limitNumber = 6
    const limitLatest = 4
    const categories = await Category.find({}).limit(limitNumber)
    const latest = await Recipe.find({}).sort({_id: -1}).limit(limitLatest)
   
  
    const food = { latest } 

    res.render('index', { title: 'Home Page', categories, food } )
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





// adding hard code data to databoase as sample
// const insertRecipeData = async () => {
//     try {
//       await Recipe.insertMany([
//           {
//             "name": "Sushi rolls",
//             "description": 
//             `Put the rice in a small saucepan with 375ml water, leave to soak for 30 minutes, then bring to the boil.
//             Put the lid on and simmer gently for 10 minutes, until the water has been absorbed by the rice.
//             In a bowl, dissolve the sugar in the vinegar, then sprinkle over the rice mix, combining with a rubber spatula so as not to break up the rice.
//             Allow to cool for 20 minutes before using.
//             Deseed or peel the vegetables, then cut into fine strips or batons.
//             Place a sheet of nori on a bamboo sushi mat, then spread half the rice over the sheet except for 1cm clear at the top.
//             Add some vegetables in a horizontal line across the rice.
//             Begin rolling the mat from the near edge, keeping the filling in place with your fingers. Roll firmly but not too hard.
//             Remove the roll from the mat and cut into 6 or 8 pieces. Repeat with second piece of nori.`,
//             "email": "helloWorld@gmail.com",
//             "ingredients": [
//               '200 g sushi rice',
//               '1 tablespoon rice vinegar',
//               '2 sheets of nori',
//               '¼ of a cucumber',
//               '¼ of a red pepper',
//               '½ a carrot',
//               '½ a small ripe avocado',
//             ],
//             "category": "Sushi",
//             "image": "sushi.webp"
//           },
//           {
//             "name": "Sesame Ramen with Caramelized Pork",
//             "description": 
//             `Whisk the paste ingredients together and divide between two serving bowls. Cook the noodles according to instructions then rinse well under cold water. Set aside.

//             Heat a large frying pan over a medium heat and add 1 tablespoon of oil. Add the spring onions, ginger, garlic and chilli, and stir-fry for 1 minute. Add the pork, turn up to medium-high and fry for 4–5 minutes, breaking up the meat as you go, until browned and starting to dry out. Mix in the honey and fish sauce and stir-fry for a further couple of minutes. Turn off the heat. Set aside.
            
//             Fill a small saucepan with boiling water and bring to the boil over a medium heat. Add the eggs and cook for 6 minutes, then immediately remove and run under cold water for a minute or so. Peel and cut in half.
            
//             Bring the stock to the boil in a large pan. Add the broccoli and cook for 2 to 3 minutes, until just done. Remove and set aside. Add the cooked noodles and turn down the heat – you want them to reheat, not cook. Add a ladle of stock to each serving bowl and whisk to combine, then stir in the remaining stock.
            
//             Add the noodles, and top with the caramelized pork, the halved soft-boiled eggs, the broccoli and shredded carrot. Garnish with spring onions. Nice with a drizzle of soy or chilli oil.`,
//             "email": "helloWorld@gmail.com",
//             "ingredients": [
//             [ 'FOR THE PASTE',
//               '6 tablespoons tahini',
//               '1 tablespoon Thai red curry paste',
//               '½ tablespoon soft brown sugar',
//               '2 tablespoons light soy sauce',
//               '1 tablespoon grated ginger , (approx. 6cm)'
//             ],
//             [
//               'FOR THE PASTE',
//               '1 teaspoon grated ginger , (approx. 2cm)',
//               '1 clove of garlic , crushed',
//               '1 red chilli , finely sliced',
//               '200 g pork mince , preferably 15 to 20% fat content',
//               '2½ tablespoons honey',
//               '1½ tablespoons fish sauce'
//             ],
//             [
//               'FOR THE NOODLES',
//               '800 ml chicken stock',
//               '100 g tenderstem broccoli , cut into 5cm pieces',
//               '2 portions of ramen or medium egg or wheat noodles',
//               '1 carrot , shredded with a julienne peeler or cut into matchsticks',
//               '1 spring onion , finely sliced',
//             ]],
//             "category": "Ramen",
//             "image": "Ramen.webp"
//           },
//           {
//             "name": "Mussels with Guinness",
//             "description": 
//             `Peel and finely chop the shallot and garlic, and finely chop the bacon. Pick and finely chop the parsley and thyme.
//             In a pan, melt the butter and sweat the shallot, garlic and bacon for 4 to 5 minutes.
//             Add half the herbs, the bay, and a pinch of sea salt and black pepper.
//             Next, add the mussels (if any are open, give them a tap; if they don’t close, throw them away), then the Guinness. Boil, then lower the heat, cover and steam for 3 to 5 minutes, or until the mussels have opened (discard any unopened ones).
//             Stir in the cream and remaining herbs, adjust the seasoning and serve with bread.`,
//             "email": "helloWorld@gmail.com",
//             "ingredients": [
//               '1 shallot',
//               '2 cloves of garlic',
//               '2 rashers of higher-welfare smoked bacon',
//               '½ a bunch of fresh flat-leaf parsley',
//               '½ a bunch of fresh thyme',
//               '1 knob of unsalted butter',
//               '1 fresh bay leaf',
//               '1 kg mussels , cleaned and debearded, from sustainable sources',
//               '250 ml Guinness',
//               '50 ml double cream'
//             ],
//             "category": "Seafood",
//             "image": "Seafood.webp"
//           },
//           {
//             "name": "Bacon rarebit burger",
//             "description": 
//             `Trim the stalk and base off each mushroom, giving you a beautiful cross-section (saving the offcuts for another day). Place the mushrooms cut side down on one side of a large dry non-stick frying pan on a high heat. Cook for 5 minutes while you scrunch and work the mince with your hands. Divide into two equal balls, flatten each to just under ½cm thick, then pat and push a rasher of bacon on to each one.
            
//             Turn the mushrooms, put the burgers into the pan, bacon side down, sprinkle with a pinch of sea salt and black pepper, and fry hard and fast for 2 minutes, pressing down with a fish slice to crisp up the bacon, then flip to fry for just 1 minute on the other side. Move the mushrooms on top of the burgers, then halve the bun and quickly toast alongside. Remove the bun to a serving board, spread with the soured cream, stack in your burgers and mushrooms, then slice and add the gherkin.
            
//             Off the heat, coarsely grate the cheese in a pile at the cleanest side of the pan, pour the Worcestershire sauce on top, then tilt the pan and stir vigorously for 30 seconds until it combines into an oozy consistency. Pour the rarebit mixture over the burger stack and put the bun lid on. Devour.`,
//             "email": "helloWorld@gmail.com",
//             "ingredients": [
//               '3 chestnut mushrooms',
//               '125 g higher-welfare beef mince',
//               '2 rashers of higher-welfare smoked streaky bacon',
//               '1 soft bun',
//               '2 heaped teaspoons soured cream',
//               '1 gherkin',
//               '25 g Cheddar cheese',
//               '1 tablespoon Worcestershire sauce'
//             ],
//             "category": "Burger",
//             "image": "burger.webp"
//           },
//           {
//             "name": "Hot & sour soup",
//             "description": 
//             `Peel the garlic and deseed the chillies, then roughly chop and place into a pestle and mortar. Bash with a pinch of salt to a rough paste. Peel, finely chop and add the ginger, then bash until broken down and combined.
//             Finely slice the mushrooms and bamboo shoots. Heat a lug of oil in a large wok or heavy-based saucepan over a medium-high heat, add the mushrooms and fry for 4 minutes, or until lightly golden. Stir in the chilli paste and bamboo shoots and fry for a further minute.
//             Meanwhile, mix together 3 tablespoons of soy, 4 tablespoons of rice wine vinegar, the honey and a good pinch of white pepper. Stir the mixture into the pan and cook for a minute, then pour in the hot stock and bring gently to the boil. Reduce the heat to low and simmer for 10 minutes, or until slightly reduced. Meanwhile, chop the tofu into 1cm cubes, finely slice the spring onions and chives and whisk the egg well.
//             Once reduced, remove the soup from the heat. Using a chopstick, stir the soup in a clockwise direction until you get a little whirlpool, then slowly add the beaten egg, stirring continuously to form thin ribbons. Stir in the tofu and return to the heat for 1 minute to warm through. Season to taste with soy and vinegar, then serve immediately with the spring onions and chives scattered on top.
//             `,
//             "email": "helloWorld@gmail.com",
//             "ingredients": [
//               '2 cloves of garlic',
//               '1-2 fresh red chillies',
//               'sea salt',
//               'freshly ground white pepper',
//               '1 thumb-sized piece of ginger',
//               '250 g shiitake mushrooms , cleaned',
//               '225 g bamboo shoots , drained',
//               'groundnut oil , or vegetable oil',
//               'low-salt soy sauce',
//               'rice wine vinegar',
//               '1 teaspoon runny honey',
//               '225 g bamboo shoots , drained',
//               '1.5 litres hot organic vegetable stock',
//               '150 g firm tofu',
//               '2 spring onions',
//               '½ bunch of chives',
//               '1 large free-range egg'
//             ],
//             "category": "Chinese Food",
//             "image": "ChineseFood.webp"
//           },
//           {
//             "name": "Pizza twister bread",
//             "description": 
//             `Place the flour in a large dough with a good pinch of sea salt. Pour 325ml of tepid water into a jug. Add the yeast and mix with a fork for a couple of minutes, until dissolved. Add a pinch of the flour and mix well, then pour the yeast mixture into the bowl. Use a fork to mix it all together until you can’t move it anymore – this will stop the dough sticking to your hands.
//             Now get your clean hands in there and bring it together as a ball of dough, kneading and moving it around the bowl until the dough comes away from the sides.
//             Transfer the dough to a flour-dusted surface and keep it moving, kneading, pushing and stretching it for 5 minutes, or until you have a silky and elastic dough.
//             Use your floured hands to shape the dough into a rough ball, put it in an oiled bowl, and cover with a clean, damp tea towel. Allow it to prove for about an hour, or until doubled in size, ideally in a warm, draught-free place.
//             Meanwhile, drizzle 1 tablespoon each of extra virgin olive oil and balsamic vinegar into a large bowl. Tear in the basil leaves, then halve the tomatoes and finely slice the courgette, adding them to the bowl as you go. Squash, destone and tear over the flesh of the olives and toss everything together gently with your hands.
//             Once the dough has doubled in size, knock the air out by punching it with your fist, then knead on a flour-dusted surface for 30 seconds, or until smooth.
//             Use a rolling pin to roll out the dough to about the size of a tea towel, then rub the red pesto all over the dough using your hands, spreading it out to the edges. Scatter over the courgette mix evenly and tear over the mozzarella.
//             Roll up the dough lengthways, like a Swiss roll, wrapping all the lovely fillings inside, then with a sharp knife, cut into twelve chunks. Place the pieces close together, swirl-side up, in an ovenproof pan (about 26cm) or on a snug, oiled baking tray, then cover with a clean tea towel. Leave to prove again for 30 minutes to an hour, or until it has doubled in size.
//             Preheat the oven to 190ºC/350ºF/gas 4. Bake on the bottom of the oven for about 35 minutes, or until golden and crispy. Turn the loaf out onto a board and allow to cool slightly before serving. Delicious!
//             `,
//             "email": "helloWorld@gmail.com",
//             "ingredients": [
//               '500 g strong bread flour , plus extra for dusting',
//               '1 x 7 g sachet of dried yeast',
//               'olive oil',
//               'extra virgin olive oil',
//               'balsamic vinegar',
//               '½ a bunch of basil , (15g)',
//               '150 g mixed-colour cherry tomatoes',
//               '1 courgette',
//               '8 to 10 black olives , (stone in)',
//               '100 g red pesto',
//               '1 x 125 g ball of mozzarella cheese'
//             ],
//             "category": "Pizza",
//             "image": "Pizza.webp"
//           }
//         ])
//       } catch (error) {
//               console.log(error)
//     }
// }

// insertRecipeData()

module.exports = { 
  homepage,
  allCategories
}