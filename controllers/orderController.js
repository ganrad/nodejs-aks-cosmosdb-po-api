let DocumentDBClient = require('documentdb').DocumentClient;
let async = require('async');

function OrderController(orderModel) {
	this.orderModel = orderModel;
}

OrderController.prototype = {
	// Display the list of all Purchase Orders.
	getOrderList: function(req, res) {
		console.log("OrderController.getOrderList()");
		let self = this;
		let querySpec = {
			query: 'SELECT * FROM root r',
			parameters: []
		};

		self.orderModel.find(querySpec, function(err, items) {
			if (err) {
				throw err;
			}
			else {
				res.json(items);
			};
		});
	},
	// Get the details of a single Purchase Order
	getOrderDetails: function(req, res) {
		console.log("OrderController.getOrderDetails()");
		let self = this;

		self.orderModel.getItem(req.params.id, function(err, item) {
			if (err) {
				throw err;
			}
			else {
				res.json(item);
			};
		});
	},
	// Create a Purchase Order
	createOrder: function(req, res) {
		console.log("OrderController.createOrder()");
		let self = this;
		let item = req.body;

		self.orderModel.addItem(item, function(err) {
			if (err) {
				throw err;
			}
			else
				console.log("Saved Purchase Order in CosmosDB");
			res.redirect('/');
		});
	},
	// Update a Purchase Order
	updateOrder: function(req, res) {
		console.log("OrderController.updateOrder()");
		let self = this;
		let item = req.body;

		self.orderModel.updateItem(req.params.id, item, function(err, doc) {
			if (err) {
				throw err;
			}
			else
				console.log("Updated Purchase Order [ID=" + req.params.id + "] in CosmosDB");
			res.json(doc);
		});
	},
	// Delete a Purchase Order
	deleteOrder: function(req, res) {
		console.log("OrderController.deleteOrder()");
		let self = this;

		self.orderModel.deleteItem(req.params.id, function(err, doc) {
			if (err) {
				throw err;
			}
			else
				console.log("Deleted Purchase Order [ID=" + req.params.id + "] in CosmosDB");
			res.redirect('/');
		});
	}
};

module.exports = OrderController;
