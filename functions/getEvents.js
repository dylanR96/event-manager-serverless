import { DynamoDB } from "@aws-sdk/client-dynamodb";

const region = "eu-north-1";

const client = new DynamoDB({ region });

export const handler = async (event) => {
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
