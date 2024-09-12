import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Joke() {
  const router = useRouter();
  const { myOwnName } = router.query;

  const { data, isLoading } = useSWR(`/api/bad-jokes/${myOwnName}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return "error";
  }

  return (
    <>
      <small>ID: {myOwnName}</small>
      <h1>{data.joke} </h1>
      <Link href="/">Back to all</Link>
    </>
  );
}
