"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { React, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from "next/image"
import { fetchuser } from '@/actions/useractions'

const Navbar = () => {

    const { data: session } = useSession()
    console.log(session)
    const [showdrop, setShowdrop] = useState(false)
    const [currentuser, setCurrentuser] = useState(null)

    useEffect(() => {
        if (session?.user?.name) {
            getUser()
        }
    }, [session])

    const getUser = async () => {
        const u = await fetchuser(session.user.name)
        setCurrentuser(u)
    }


    if (session) {
        return <>
            <div className="flex justify-between items-center top-0 fixed z-50 w-full border-b border-[#760940]/25 bg-black/90 backdrop-blur-md text-white px-4 sm:px-8 md:px-16 py-3">
                <Link href="/">
                    <div className="logo text-xl sm:text-2xl font-bold text-white/80">
                        GetMe
                        <span className='text-[#762045]'>Tipsy</span>
                    </div>
                </Link>

                <div className="flex gap-1 justify-center items-center">

                    <div className="flex items-center gap-3">
                        <button onClick={() => {
                            setShowdrop(!showdrop)
                        }}
                            id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="transition-all rounded-lg inline-flex items-center justify-center text-white border border-transparent font-medium text-sm px-2 py-2 hover:bg-[#302f2f6f] cursor-pointer gap-2" type="button">
                            <div className="w-[30px] h-[30px] rounded-full overflow-hidden shrink-0 ring-[#760940] ring-2">
                                <img
                                    src={currentuser?.profilepic || session?.user?.image || "/default-avatar.svg"}
                                    width={30}
                                    height={30}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-white/80 text-sm sm:text-md font-semibold max-w-[120px] sm:max-w-none truncate">
                                {session.user.name}
                            </span>
                            <svg className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m19 9-7 7-7-7" /></svg>
                        </button>
                    </div>

                    <div className={`absolute right-3 sm:right-8 md:right-16 top-16 w-36 overflow-hidden rounded-lg border border-[#762045]/30 bg-[#111111]/95 backdrop-blur-xl shadow-2xl ${showdrop ? "block" : "hidden"}`}>
                        <ul className="text-sm p-1">
                            <li>
                                <Link
                                    href="/dashboard"
                                    onClick={() => setShowdrop(false)}
                                    className="block px-4 py-2 text-white/80 hover:bg-[#762045]/20 transition-all rounded-lg"
                                >
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={`/${session.user.name}`}
                                    onClick={() => setShowdrop(false)}
                                    className="block px-4 py-2 text-white/80 hover:bg-[#762045]/20 transition-all rounded-lg"
                                >
                                    Your Page
                                </Link>
                            </li>

                            <hr className="border-[#762045]/20 my-1" />

                            <li>
                                <button
                                    onClick={() => signOut()}
                                    className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 transition-all rounded-lg cursor-pointer"
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
        <nav className='top-0 fixed z-50 w-full border-b border-[#760940]/25 bg-black/90 backdrop-blur-md text-white px-4 sm:px-8 md:px-16'>
            <div className='flex justify-between items-center py-3.5 max-w-7xl mx-auto'>
                <Link href="/">
                    <div className="logo text-xl sm:text-2xl font-bold text-white/80">
                        GetMe
                        <span className='text-[#762045]'>Tipsy</span>
                    </div>
                </Link>
                <ul className='hidden md:flex gap-8 lg:gap-10 text-[#ffffff6f] text-sm font-medium'>
                    <Link href={"/"}><li className="hover:text-[#ffffffb4] cursor-pointer transition-all">Home</li></Link>
                    <li className="hover:text-[#ffffffb4] cursor-pointer transition-all">About</li>
                    <li className="hover:text-[#ffffffb4] cursor-pointer transition-all">Projects</li>
                </ul>

                <div className="buttons flex gap-2 sm:gap-3 items-center">
                    <Link href={"/login"}>
                        <button
                            className='bg-[#ffffff]/80 px-3 py-1.5 rounded-lg text-black text-xs sm:text-sm font-semibold cursor-pointer hover:bg-[#ffffff6f] transition-all'>Login</button></Link>
                    <Link href={"/login"}>
                        <button className='px-2.5 py-1.5 rounded-lg text-[#ff4081] text-xs sm:text-sm border cursor-pointer hover:bg-[#2323236d] border-[#760940]/80 font-semibold transition-all'>Sign Up</button>
                    </Link>
                </div>

            </div>

        </nav >
    )
}


export default Navbar
