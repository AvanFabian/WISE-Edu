// Remove or comment out the TypeScript import
// import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// Define authOptions without type annotations
export const authOptions = {
  // Secret for NextAuth; without this, JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
