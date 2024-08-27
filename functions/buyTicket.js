import { events } from "../events/events.js";

export const handler = async (event) => {
  const { id } = event.pathParameters;

  const foundEvent = events.find((event) => event.id === parseInt(id));

  const response = {
    statusCode: 200,
    body: JSON.stringify({ foundEvent }),
  };
  return response;
};
