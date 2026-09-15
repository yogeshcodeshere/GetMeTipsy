"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import { fetchuser, updateProfile } from "@/actions/useractions";




const Dashboard = () => {

  const { data: session, update } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!session) {
      router.push('/login');
      return;

    }
    getData(); 
  }, [router, session]);

  const getData = async () => {
    let u = await fetchuser(session.user.name);
    setForm(u);
    }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    let a = await updateProfile(session.user.name, e);
    alert("profile updated successfully");
  }

  return (
    <>
      <div className="mt-25 flex flex-col gap-10 justify-center items-center mb-20">
        <div className="text-4xl font-bold text-[#760940]">
          Welcome to your dashboard
        </div>

        <form className="max-w-screen mx-auto" action={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2.5 text-sm font-medium text-heading">Name</label>
            <input onChange={handleChange} value={form.name?form.name: ""} name='name' type="text" id="name" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full px-3 py-2.5" placeholder="Enter your name" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Email</label>
            <input onChange={handleChange} value={form.email?form.email: ""} name='email' type="email" id="email" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full px-3 py-2.5" placeholder="Enter your email" required />
          </div>
          <div className="mb-5">
            <label htmlFor="username" className="block mb-2.5 text-sm font-medium text-heading">Username</label>
            <input onChange={handleChange} value={form.username?form.username: ""} name='username' type="text" id="username" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full px-3 pl-3 py-2.5" placeholder="Enter your username" required />
          </div>
          <div className="mb-5">
            <label htmlFor="profilepic" className="block mb-2.5 text-sm font-medium text-heading">Profile Picture</label>
            <input onChange={handleChange} value={form.profilepic?form.profilepic: ""} name='profilepic' type="text" id="profilepic" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full px-3 py-2.5" placeholder="Enter your profile picture URL" required />
          </div>
          <div className="mb-5">
            <label htmlFor="coverpic" className="block mb-2.5 text-sm font-medium text-heading">Cover picture</label>
            <input onChange={handleChange} value={form.coverpic?form.coverpic: ""} name='coverpic' type="text" id="coverpic" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full px-3 py-2.5" placeholder="Enter your cover picture URL" required />
          </div>
          <div className="mb-5">
            <label htmlFor="razorkey" className="block mb-2.5 text-sm font-medium text-heading">Razorpay key</label>
            <input onChange={handleChange} value={form.razorkey?form.razorkey: ""} name='razorkey' type="text" id="razorkey" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full px-3 py-2.5" placeholder="Enter your Razorpay key" required />

          </div>
          <div className="mb-5">
            <label htmlFor="rs" className="block mb-2.5 text-sm font-medium text-heading">Razorpay secret</label>
            <input onChange={handleChange} value={form.rs?form.rs: ""} name='rs' type="password" id="rs" className="bg-[#3636366f] focus:outline-none text-heading text-sm rounded-md block w-full px-3 py-2.5" placeholder="Enter your Razorpay Secret" required />

          </div>
          <button type="submit" className="bg-[#760940] hover:bg-[#5a0730] text-white py-2 px-50 rounded-md mt-2 cursor-pointer">
            Save Changes
          </button>
        </form>

      </div>
    </>
  )
}

export default Dashboard;
