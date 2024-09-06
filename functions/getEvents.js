const { db } = require("../dynamodb");

module.exports.handler = async (event, context) => {
  try {
    const result = await db.scan({
      TableName: "Event",
    });

    const response = {
      statusCode: 200,
      body: JSON.stringify({ message: result.Items }),
    };
    return response;
  } catch (error) {
    return console.error(error);
  }
};
