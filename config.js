let config = {}

config.host = process.env.HOST || "https://vcs-cosmosdb.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "1pxILrCIRPhunE5p9R6tA4Y5ZrqJGyNiCKD3LBh3zUSAADMuoaMa0AtdHVujR8ysWDAGTsyRtwqibLoSlnwt0A==";
config.databaseId = "OrderDB";
config.collectionId = "PurchaseOrders";

module.exports = config;
