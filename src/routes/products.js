// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");

// ************ Controller Require ************
const productsController = require('../controllers/productsController');


/*** CONFIGURING MULTER ***/
const storage = multer.diskStorage({
  destination:(req, file, callback)=>{
    callback(null, "public/images/products");
  },
  filename:(req, file, callback)=>{
    callback(null, `${Date.now()}_img_${file.originalname}`);
  }
});

const uploadFile = multer({storage:storage});



/*** GET ALL PRODUCTS ***/ 
router.get('/products', productsController.index); 


/*** CREATE ONE PRODUCT ***/ 
router.get('/products/create', productsController.create); 
router.post('/products/create', uploadFile.single("image"), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/products/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/products/edit/:id', productsController.edit); 
router.put('/products/edit/:id', uploadFile.single("image"), productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/products/:id', productsController.destroy); 


module.exports = router;
