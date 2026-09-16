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
    if (u) {
      setForm({
        ...u,
        profilepic: u.profilepic || "/default-avatar.svg",
        coverpic: u.coverpic || "/default-cover.svg",
      });
    }
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
      <div className="mt-20 sm:mt-24 flex flex-col gap-8 justify-center items-center mb-20 px-4 w-full">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#760940] text-center">
          Welcome to your dashboard
        </div>

        <form className="w-full max-w-lg mx-auto bg-[#141416]/60 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl" action={handleSubmit}>
          <div className="mb-4 sm:mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white/90">Name</label>
            <input onChange={handleChange} value={form.name?form.name: ""} name='name' type="text" id="name" className="bg-[#242428] border border-white/10 focus:outline-none focus:border-[#760940] text-white text-sm rounded-lg block w-full px-3.5 py-2.5" placeholder="Enter your name" required />
          </div>
          <div className="mb-4 sm:mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/90">Email</label>
            <input onChange={handleChange} value={form.email?form.email: ""} name='email' type="email" id="email" className="bg-[#242428] border border-white/10 focus:outline-none focus:border-[#760940] text-white text-sm rounded-lg block w-full px-3.5 py-2.5" placeholder="Enter your email" required />
          </div>
          <div className="mb-4 sm:mb-5">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white/90">Username</label>
            <input onChange={handleChange} value={form.username?form.username: ""} name='username' type="text" id="username" className="bg-[#242428] border border-white/10 focus:outline-none focus:border-[#760940] text-white text-sm rounded-lg block w-full px-3.5 py-2.5" placeholder="Enter your username" required />
          </div>
          <div className="mb-4 sm:mb-5">
            <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-white/90">Profile Picture</label>
            <input onChange={handleChange} value={form.profilepic?form.profilepic: ""} name='profilepic' type="text" id="profilepic" className="bg-[#242428] border border-white/10 focus:outline-none focus:border-[#760940] text-white text-sm rounded-lg block w-full px-3.5 py-2.5" placeholder="Enter your profile picture URL" required />
          </div>
          <div className="mb-4 sm:mb-5">
            <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-white/90">Cover picture</label>
            <input onChange={handleChange} value={form.coverpic?form.coverpic: ""} name='coverpic' type="text" id="coverpic" className="bg-[#242428] border border-white/10 focus:outline-none focus:border-[#760940] text-white text-sm rounded-lg block w-full px-3.5 py-2.5" placeholder="Enter your cover picture URL" required />
          </div>
          <div className="mb-4 sm:mb-5">
            <label htmlFor="razorkey" className="block mb-2 text-sm font-medium text-white/90">Razorpay key</label>
            <input onChange={handleChange} value={form.razorkey?form.razorkey: ""} name='razorkey' type="text" id="razorkey" className="bg-[#242428] border border-white/10 focus:outline-none focus:border-[#760940] text-white text-sm rounded-lg block w-full px-3.5 py-2.5" placeholder="Enter your Razorpay key" />
          </div>
          <div className="mb-6">
            <label htmlFor="rs" className="block mb-2 text-sm font-medium text-white/90">Razorpay secret</label>
            <input onChange={handleChange} value={form.rs?form.rs: ""} name='rs' type="password" id="rs" className="bg-[#242428] border border-white/10 focus:outline-none focus:border-[#760940] text-white text-sm rounded-lg block w-full px-3.5 py-2.5" placeholder="Enter your Razorpay Secret" />
          </div>
          <button type="submit" className="bg-[#760940] hover:bg-[#5a0730] text-white py-3 w-full font-semibold rounded-lg mt-2 cursor-pointer transition-all shadow-lg">
            Save Changes
          </button>
        </form>
      </div>
    </>
  )
}

export default Dashboard;
