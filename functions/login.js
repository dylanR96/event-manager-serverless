const { db } = require("../dynamodb");

module.exports.handler = async (event, context) => {
  const { username, password } = JSON.parse(event.body);
  try {
    const result = await db.get({
      TableName: "User",
      Key: {
        Username: username,
      },
    });

    if (result.Item && result.Item.Password === password) {
      const response = {
        statusCode: 200,
        body: JSON.stringify({ message: `Welcome ${result.Item.Username}!` }),
      };
      return response;
    } else {
      const response = {
        statusCode: 401,
        body: JSON.stringify({ message: "Username not found!" }),
      };
      return response;
    }
  } catch (error) {
    return console.error(error);
  }
};
