// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/products', productsController.index); 


/*** CREATE ONE PRODUCT ***/ 
router.get('/products/create', productsController.create); 
router.post('/products/create', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/products/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/products/edit/:id', productsController.edit); 
router.put('/products/edit/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/products/:id', productsController.destroy); 


module.exports = router;
