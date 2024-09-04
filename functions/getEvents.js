const { db } = require("../dynamodb");

exports.handler = async (event, context) => {
  try {
  } catch (error) {}
  const params = {
    TableName: "Event",
  };

  const events = await client.scan(params);
  const response = {
    statusCode: 200,
    body: JSON.stringify({ events }),
  };
  return response;
};
