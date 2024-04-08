"use client";
import { signOut } from "next-auth/react";
import React from "react";
const handleSignout = () => {
  signOut();
  alert("Signed out");
};
export default function Test() {
  return <button onClick={handleSignout}>Sign out</button>;
}
