const express = require('express');
const router=express.Router();
const Locations= require('../controllers/City');

router.get('/',Locations.getlocations);

module.exports=router;