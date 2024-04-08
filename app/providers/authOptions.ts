import CredentialsProvider from "next-auth/providers/credentials";

import { AuthOptions } from "next-auth";
// import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
    // error: "/signin",
    // signOut: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          email: credentials?.email,
          password: credentials?.password,
        };

        if (user) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
