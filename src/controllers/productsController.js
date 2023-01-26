const fs = require('fs');
const path = require('path');
const {v4:makeId} = require("uuid");

// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const ProductsModel = require("../models/ProductsModel");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {

		const products = ProductsModel.findAll();

		res.render("products.ejs", {products});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
	},

	// Create - Form to create
	create: (req, res) => {

		res.render("product-create-form.ejs");
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const {name, price, discount, category, description} = req.body;


	
		const image = req.file.filename;

		const discountPrice = parseFloat(price) * (parseInt(discount)/100);
		const finalPrice = price - discountPrice;

		const newProduct = {
			id:makeId(),
			name,
			price: finalPrice,
			discount,
			category,
			description,
			image
		}

		ProductsModel.createProduct(newProduct);

		res.redirect("/products");
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;