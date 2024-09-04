const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDB({
  region: "eu-north-1",
});

const db = DynamoDBDocument.from(client);

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
