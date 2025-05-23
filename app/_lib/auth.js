import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "@/app/_lib/data-service.js";
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingGuest = await getGuest(user.email);
        if (!existingGuest) {
          await createGuest({ email: user.email, fullName: user.name });
        }
        return true;
      } catch (err) {
        console.error("Sign-in error:", err);
        return false;
      }
    },

    async session({ session, user }) {
      try {
        const guest = await getGuest(session.user.email);
        session.user.guestId = guest?.id || null;
      } catch (err) {
        console.error("Error in session callback:", err);
        session.user.guestId = null;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
