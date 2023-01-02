const express = require('express')
const restaurant=require('../controllers/Restaurant')
const mealtype=require('../controllers/Mealtype')
const city = require('../controllers/City')

const router = express.Router()


router.get('/getAllRestaurants',restaurant.getAllRestaurants);
router.get('/getRestaurantByName/:name',restaurant.getRestaurantByName);
router.get('/getRestaurantByCity/:id',restaurant.getRestaurantByCity);
router.post('/filter/:pageNo',restaurant.FilterRestaurant)
router.post('/meal/:pageNo',mealtype.getMeal)
router.get('/mealtype',mealtype.getMealtypes)
router.post('/city/:pageNo',city.getcity)
router.get('/',city.getlocations)
module.exports = router; 