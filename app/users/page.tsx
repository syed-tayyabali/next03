import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return (
    <>
      <section>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
        <br />
        {users.map((user: User) => (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        ))}
      </section>
    </>
  );
}
