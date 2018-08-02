let config = {}

config.host = process.env.HOST || "Substitute URI value here";
config.authKey = process.env.AUTH_KEY || "Substitute PRIMARY KEY value here";
config.databaseId = "OrderDB";
config.collectionId = "PurchaseOrders";

module.exports = config;
