import { db } from "../dynamodb";

export default handler = async (event, context) => {
  const { id } = JSON.parse(event.body);

  try {
    const result = await db.put({
      TableName: "Event",
      Item: {
        id: id,
        artist: artist,
        date: date,
        arena: arena,
        time: time,
        price: price,
      },
    });
    return console.log("Success");
  } catch (error) {
    return console.error(error);
  }
};
