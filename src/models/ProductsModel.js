const fs = require('fs');
const path = require('path');

const productsPath = path.resolve("src","data","productsDataBase.json");
const products = require("../data/productsDataBase.json");


const ProductsModel = {
  findAll:()=>{

    return products;
  },
  createProduct:(product)=>{

    products.push(product);
    const dbJSON = JSON.stringify(products);
    fs.writeFileSync(productsPath, dbJSON);
    return;

  }
}

module.exports = ProductsModel;