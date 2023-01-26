const fs = require('fs');
const path = require('path');

const productsPath = path.resolve("src","data","productsDataBase.json");
const products = require("../data/productsDataBase.json");


const ProductsModel = {
  findAll:()=>{

    return products;
  }
}

module.exports = ProductsModel;