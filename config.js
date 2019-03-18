let config = {}

// Configure the host and authkey before deploying this app!!
config.host = process.env.HOST || "https://grts-cosmosdb.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "DIneKeNe5fDNZwYNSCmcC8Sprpsnl5SsCF1LCgRkIm7zTYsKEYkjRhtS1vjPWqy1cJ3ZWR3SUxsedSBSQuVPgw==";
config.databaseId = "OrderDB";
config.collectionId = "PurchaseOrders";

module.exports = config;
