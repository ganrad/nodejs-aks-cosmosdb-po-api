let config = {}

config.host = process.env.HOST || "Substitute the value of URI here";
config.authKey = process.env.AUTH_KEY || "Substitute the value of PRIMARY KEY here";
config.databaseId = "OrderDB";
config.collectionId = "PurchaseOrders";

module.exports = config;
