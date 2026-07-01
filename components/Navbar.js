"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { React, useState } from 'react'
import Link from 'next/link'
import Image from "next/image"

const Navbar = () => {

    const { data: session } = useSession()
    console.log(session)
    const [showdrop, setShowdrop] = useState(false)

    if (session) {
        return <>
            <div className="flex justify-between items-center top-0 fixed z-50 w-full border-b border-[#760940]/25 bg-black text-white px-20 py-3 ">
                <Link href="/">
                <div className="logo text-2xl font-bold text-white/80">
                    GetMe
                    <span className='text-[#762045]'>Tipsy</span>
                </div>
                </Link>

                <div className="flex gap-1 justify-center align-center">

                    <div className="flex items-center gap-3">
                        

                        <button onClick={() => {
                            setShowdrop(!showdrop)
                        }}
                            id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="transition-all rounded-lg inline-flex items-center justify-center text-white box-border border border-transparent hover:bg-brand-strong shadow-xs font-medium leading-5 rounded-base text-sm px-2 py-2.5 hover:bg-[#302f2f6f] cursor-pointer gap-2 " type="button">
                            <Image
                            src={session.user.image}
                            width={30}
                            height={30}
                            alt="Profile"
                            className="rounded-full ring-2 ring-[#762045]/60 hover:ring-[#762045] transition"
                        />
                            <span className="text-white/80 text-md font-semibold">
                                {session.user.name}
                            </span>
                            <svg className="w-4 h-4  mt-0.75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m19 9-7 7-7-7" /></svg>
                        </button>
                    </div>

                    <div className={`absolute right-20 top-17 w-30 overflow-hidden rounded-lg border border-[#762045]/25 bg-[#111111]/95 backdrop-blur-xl shadow-2xl ${showdrop ? "block" : "hidden"}`}>
                        <ul className="text-sm">
                            <li>
                                <Link
                                    href="/dashboard"
                                    className="block px-4 py-2 text-white/80 hover:bg-[#762045]/20 transition-all rounded-xl"
                                >
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={`/${session.user.name}`}
                                    className="block px-4 py-2 text-white/80 hover:bg-[#762045]/20 transition-all rounded-xl "
                                >
                                    Your Page
                                </Link>
                            </li>

                            <hr className="border-[#762045]/20 my-1" />

                            <li>
                                <button
                                    onClick={() => signOut()}
                                    className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 transition-all rounded-xl cursor-pointer "
                                >
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    }

    return (
        <nav className='top-0 fixed z-50 w-full border-b border-[#760940]/25 bg-black text-white px-10'>
            <div className='flex justify-around items-center py-4.5'>
                <div className="logo text-2xl font-bold text-white/80">
                    GetMe
                    <span className='text-[#762045]'>Tipsy</span>
                </div>
                <ul className='flex gap-10 text-[#ffffff6f]'>
                    <Link href={"/"}><li className="hover:text-[#ffffffb4] cursor-pointer transition-all">Home</li></Link>
                    <li className="hover:text-[#ffffffb4] cursor-pointer transition-all">About</li>
                    <li className="hover:text-[#ffffffb4] cursor-pointer transition-all">Projects</li>
                </ul>

                <div className="buttons flex gap-3">
                    <Link href={"/login"}>
                        <button
                            className='bg-[#ffffff]/80 px-3 py-1 rounded-lg text-black font-semibold cursor-pointer hover:bg-[#ffffff6f] transition-all'>Login</button></Link>
                    <button className='px-2 py-1 rounded-lg text-[#760940] border cursor-pointer hover:bg-[#2323236d]
                border-[#76094067] hover:border-[#760940c4]  font-semibold transition-all'>sign up</button>
                </div>

            </div>

        </nav >
    )
}


export default Navbar
