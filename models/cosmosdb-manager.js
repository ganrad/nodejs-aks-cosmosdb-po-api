let DocumentDBClient = require('documentdb').DocumentClient;

module.exports = {
getOrCreateDatabase: (client, databaseId, callback) => {
    let querySpec = {
    query: 'SELECT * FROM root r WHERE r.id = @id',
    parameters: [{ name: '@id', value: databaseId }]
    };

    client.queryDatabases(querySpec).toArray((err, results) => {
    if (err) {
        callback(err);
    } else {
        if (results.length === 0) {
        let databaseSpec = { id: databaseId };
        client.createDatabase(databaseSpec, (err, created) => {
            callback(null, created);
        });
        } else {
        callback(null, results[0]);
        }
    }
    });
},

getOrCreateCollection: (client, databaseLink, collectionId, callback) => {
    let querySpec = {
    query: 'SELECT * FROM root r WHERE r.id=@id',
    parameters: [{ name: '@id', value: collectionId }]
    };

    client.queryCollections(databaseLink, querySpec).toArray((err, results) => {
    if (err) {
        callback(err);
    } else {
        if (results.length === 0) {
        let collectionSpec = { id: collectionId };
        client.createCollection(databaseLink, collectionSpec, (err, created) => {
            callback(null, created);
        });
        } else {
        callback(null, results[0]);
        }
    }
    });
}
};
