import { jokes } from "@/lib/data";

// 1. create handler function
// 2. select random Id
// 3. find respective Joke
// 4. send joke back to client (and set status)

export default function handler(request, response) {
  // const random = Math.random();
  // const randomRange = random * jokes.length;
  // const randomId = Math.floor(randomRange);

  // console.log(random);
  // console.log(randomRange);
  // console.log(randomId);
  const randomID = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomID];
  response.status(200).json(joke);
}
