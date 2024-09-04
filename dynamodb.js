const { DocumentClient } = require("aws-sdk/clients/dynamodb");

const db = new DocumentClient({
  region: "eu-north-1",
});

module.exports = { db };

// const client = new DynamoDB({ region });

// const createCustomerTable = async () => {
//   const params = {
//     TableName: "Event",
//     AttributeDefinitions: [
//       {
//         AttributeName: "id",
//         AttributeType: "N",
//       },
//     ],
//     KeySchema: [
//       {
//         AttributeName: "id",
//         KeyType: "HASH",
//       },
//     ],
//     ProvisionedThroughput: {
//       ReadCapacityUnits: 5,
//       WriteCapacityUnits: 5,
//     },
//   };

//   client.createTable(params, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   });
// };

// createCustomerTable();
