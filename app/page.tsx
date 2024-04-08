"use client";
import React from "react";
import Test from "./(components)/Test";
import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();
  const session = await getSession();
  console.log(session?.user);
  if (!session) {
    router.replace("/signin");
  }
  return (
    <div>
      Home
      <Test />
      {session?.user?.email}
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
