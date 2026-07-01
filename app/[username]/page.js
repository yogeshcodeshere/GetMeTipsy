export default async function Username({ params }) {
    const { username } = await params;

    return (
        <>
            <div className="min-h-screen">

                <div className="banner w-full relative">
                    <img className="opacity-70 object-cover w-full h-90 border-b border-white/40" src="https://i.pinimg.com/originals/2b/81/ce/2b81ce082e546a94efa281a933d9d6f8.gif" alt="" />
                    <img className="absolute top-70 left-1/2 -translate-x-1/2 rounded-[200px] border-4 ring-pink-400" width={150} height={150} src="https://i.pinimg.com/originals/62/f5/9a/62f59a8bb55dc2d8eb2c08f07567c51f.gif" alt="" />
                </div>
                <div className="text-white text-3xl font-bold flex flex-col gap-4 justify-center items-center my-25">
                    @{username}
                    <p className="text-sm text-white/90 font-normal w-68 text-center">creating vibe coded websites that dont look vibe coded and serves an actual purpose</p>
                    <div className="flex gap-2 text-sm text-white/50 font-semibold">
                        <ul className="flex list-disc gap-8">
                            <li className="list-none">3500 members</li>
                            <li>111 posts</li>
                            <li>$1100/release</li>
                        </ul>

                    </div>

                </div>

                <div className="chat flex gap-10 justify-center items-center mb-10">
                    <div className="supporters w-[40vw] h-[70vh] bg-[#1f1f1f99] rounded-2xl flex flex-col text-justify gap-15 items-center">
                        <p className="font-bold text-2xl text-center mt-7 text-[#760940] p-3">Supporters</p>
                        <ul className="flex flex-col gap-2 text-white text-md">
                            <li className="flex items-center gap-2 "> <span><lord-icon
                                src="https://cdn.lordicon.com/hhljfoaj.json"
                                trigger="loop"
                                delay="2000"
                                colors="primary:#121331,secondary:#762045,tertiary:#faefd1"
                                style={{ width: "30px", height: "30px" }}>
                            </lord-icon></span> <span className="">Bhumit donated $30 with a message <span className="font-bold">Get well soon buddy 💕</span></span> </li>
                            <li className="flex items-center gap-2 "> <span><lord-icon
                                src="https://cdn.lordicon.com/hhljfoaj.json"
                                trigger="loop"
                                delay="2000"
                                colors="primary:#121331,secondary:#762045,tertiary:#faefd1"
                                style={{ width: "30px", height: "30px" }}>
                            </lord-icon></span> <span className="">Aryan donated $5 with a message <span className="font-bold">lots of love 🫂</span></span> </li>
                            <li className="flex items-center gap-2 "> <span><lord-icon
                                src="https://cdn.lordicon.com/hhljfoaj.json"
                                trigger="loop"
                                delay="2000"
                                colors="primary:#121331,secondary:#762045,tertiary:#faefd1"
                                style={{ width: "30px", height: "30px" }}>
                            </lord-icon></span> <span className="">Yash donated $10 with a message <span className="font-bold">Good wishes 🤞</span></span> </li>

                        </ul>
                    </div>
                    <div className="payment w-[40vw] h-[70vh] bg-[#1f1f1f99] rounded-2xl ">
                        <p className="flex gap-2 justify-center font-bold text-2xl text-center mt-9.5 text-[#ffffff]">Support  <span className="text-[#760940]"> @{username}</span></p>
                        <div className="flex flex-col gap-4 justify-center mt-6.5 items-center">

                            <div className="flex flex-col gap-4 justify-center items-center mt-10">
                                <input type="text" placeholder="Enter Name" className="bg-[#1f1f1f] border border-[#2e2d2e] rounded-lg pl-2 pr-60 py-2 text-white/70 focus:outline-none " />
                                <input type="text" placeholder="Enter Message" className="bg-[#1f1f1f] border border-[#2e2d2e] rounded-lg pl-2 pr-60 py-2 text-white/70 focus:outline-none " />
                                <input type="text" placeholder="Enter Amount" className="bg-[#1f1f1f] border border-[#2e2d2e] rounded-lg pl-2 pr-60 py-2 text-white/70 focus:outline-none " />
                                <button className="bg-[#760940] text-white px-51 py-2 rounded-lg hover:bg-[#762045] transition-all cursor-pointer">Pay</button>
                            </div>
                            <div className="pills flex gap-2 mt-5">
                                <div className="px-2 py-2  rounded-2xl border border-[#2e2d2e] overflow-hidden hover:bg-[#762045] cursor-pointer">pay $5 </div>
                                <div className="px-2 py-2  rounded-2xl border border-[#2e2d2e] overflow-hidden hover:bg-[#762045] cursor-pointer">pay $10 </div>
                                <div className="px-2 py-2  rounded-2xl border border-[#2e2d2e] overflow-hidden hover:bg-[#762045] cursor-pointer">pay $25 </div>
                                <div className="px-2 py-2  rounded-2xl border border-[#2e2d2e] overflow-hidden hover:bg-[#762045] cursor-pointer">pay $50 </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <script src="https://cdn.lordicon.com/lordicon.js"></script>
        </>
    )
}