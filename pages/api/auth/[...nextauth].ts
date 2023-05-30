import mongoConnect from "@/lib/mongo_connect";
import bcrypt from "bcrypt";
import NextAuth, { NextAuthOptions, SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Auth provider array
  providers: [
    CredentialsProvider({
      // id to identify the credential
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "passwprd", type: "password" },
      },
      async authorize(credentials) {
        const { db, client } = await mongoConnect().catch((err) => {
          throw new Error(err);
        });

        const user = await db
          .collection("users")
          .findOne({ email: credentials?.email });

        if (!user) {
          throw new Error("Invalid credentials");
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Invalid Credentials");
        }
        client.close();

        return user as any
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 1800,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user;
      session.user = user;
      return session;
    },
  },
};

export default NextAuth(authOptions);
