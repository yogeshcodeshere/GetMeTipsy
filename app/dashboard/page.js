"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"


const page = () => {
  return (
    <>
      <div className="mt-25 flex flex-col gap-10 justify-center items-center mb-20">
        <div className="text-4xl font-bold text-[#760940]">
          Welcome to your dashboard
        </div>

        <form className="max-w-screen mx-auto">
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Name</label>
            <input type="email" id="email" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full pr-76 pl-3 py-2.5" placeholder="Enter your name" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Email</label>
            <input type="email" id="email" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full pr-76 pl-3 py-2.5" placeholder="Enter your email" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Username</label>
            <input type="email" id="email" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full pr-76 pl-3 py-2.5" placeholder="Enter your username" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Profile Picture</label>
            <input type="email" id="email" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full pr-76 pl-3 py-2.5" placeholder="Enter your profile picture URL" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Cover picture</label>
            <input type="email" id="email" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full pl-3 py-2.5" placeholder="Enter your cover picture URL" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Razorpay key</label>
            <input type="email" id="email" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full pl-3 py-2.5" placeholder="Enter your Razorpay key" required />

          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Razorpay secret</label>
            <input type="password" id="email" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full pl-3 py-2.5" placeholder="Enter your Razorpay Secret" required />

          </div>
          <button type="submit" className="bg-[#760940] hover:bg-[#5a0730] text-white py-2 px-50 rounded-md mt-2 cursor-pointer">
            Save Changes
          </button>
        </form>

      </div>
    </>
  )
}

export default page
