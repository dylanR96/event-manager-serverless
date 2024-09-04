const { db } = require("../dynamodb");

exports.handler = async (event, context) => {
  const { id, artist, date, arena, time, price } = JSON.parse(event.body);

  try {
    const result = await db
      .put({
        TableName: "Event",
        Item: {
          id: id,
          artist: artist,
          date: date,
          arena: arena,
          time: time,
          price: price,
        },
      })
      .promise();
    return console.log("Success");
  } catch (error) {
    return console.error(error);
  }
};
