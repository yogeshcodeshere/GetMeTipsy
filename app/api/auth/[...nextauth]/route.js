import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import connectDB from "@/db/connectDB";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET || process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github" || account.provider === "google") {
        await connectDB();

        const defaultProfilePic = "/default-avatar.svg";
        const defaultCoverPic = "/default-cover.svg";

        // Check if current user already exists in the database
        let userExists = await User.findOne({ email: user.email });

        if (!userExists) {
          // Generate a clean, URL-safe base username from email or name
          let rawBase = user.email
            ? user.email.split("@")[0]
            : user.name || "user";
          let baseUsername = rawBase
            .toLowerCase()
            .replace(/[^a-z0-9_]/g, "");

          if (!baseUsername) {
            baseUsername = "user";
          }

          // Ensure unique username in database
          let uniqueUsername = baseUsername;
          let counter = 1;
          while (await User.findOne({ username: uniqueUsername })) {
            uniqueUsername = `${baseUsername}${counter}`;
            counter++;
          }

          // Create new user with default avatar and cover picture
          const newUser = await User.create({
            email: user.email,
            name: user.name || uniqueUsername,
            username: uniqueUsername,
            profilepic: user.image || defaultProfilePic,
            coverpic: defaultCoverPic,
          });

          user.name = newUser.username;
        } else {
          // Ensure existing users also have pfp and cover if previously empty
          let updated = false;
          if (!userExists.profilepic) {
            userExists.profilepic = user.image || defaultProfilePic;
            updated = true;
          }
          if (!userExists.coverpic) {
            userExists.coverpic = defaultCoverPic;
            updated = true;
          }
          if (updated) {
            await userExists.save();
          }

          user.name = userExists.username;
        }
      }
      return true;
    },
    async session({ session }) {
      await connectDB();
      if (session?.user?.email) {
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.name = dbUser.username;
          session.user.profilepic = dbUser.profilepic || "/default-avatar.svg";
          session.user.coverpic = dbUser.coverpic || "/default-cover.svg";
          session.user.image = dbUser.profilepic || session.user.image || "/default-avatar.svg";
        }
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };