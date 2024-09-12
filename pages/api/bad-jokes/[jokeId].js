import { jokes } from "@/lib/data";

export default function handler(request, response) {
  const { jokeId } = request.query;
  console.log("id: ", jokeId);
  const joke = jokes.find((joke) => joke.id === jokeId);
  response.status(200).json(joke);
}
