import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT-based sessions
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Ensure JWT secret is set
    encryption: true, // Enable encryption for security
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub; // Ensure user ID is included in the session
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id; // Attach user ID to the token
      }
      return token;
    },
  },
};
