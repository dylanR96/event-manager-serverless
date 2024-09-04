const { db } = require("../dynamodb");

exports.handler = async (event, context) => {
  const { id, artist, date, arena, time, price } = JSON.parse(event.body);

  try {
    await db
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

const events = {
  id: { N: "1" },
  artist: { S: "Lasse-Stefans" },
  date: { S: "21 MAR" },
  arena: { S: "Kjell Härnqvistsalen" },
  time: { S: "19.00 - 21.00" },
  price: { S: "350 sek" },
};

createEvents(events);
