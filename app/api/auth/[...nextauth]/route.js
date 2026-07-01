import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose";
import User from "@/models/user";
import payment from "@/models/payment";

import connectDB from "@/db/connectDB";


export const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        await connectDB();
        //check if current user already exists in the database
        const userExists = await User.findOne({ email: user.email })
        if(!userExists){
          //create a new user
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
          user.name = newUser.username
        }
        else{

          user.name = userExists.username
        }
        
      }
      return true;
    },
    async session({ session, token, user }) {
      await connectDB();


      const dbUSer = await User.findOne({ email: session.user.email })
      return session
  },
}
});


export { authOptions as GET, authOptions as POST }