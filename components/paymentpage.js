"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/navigation'
import { intiate, fetchuser, fetchuserpayments } from '@/actions/useractions'

const PaymentPage = ({ username, paymentdone }) => {
    const router = useRouter()
    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })

    const [currentuser, setCurrentuser] = useState({
        name: "",
        username: "",
    })

    const [payments, setpayments] = useState([])
    const [showThanksModal, setShowThanksModal] = useState(false)

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        getData();
        if (paymentdone) {
            setShowThanksModal(true);
        }
    }, [paymentdone])

    const handleCloseThanks = () => {
        setShowThanksModal(false);
        router.replace(`/${username}`);
    }


    const getData = async (params) => {
        let u = await fetchuser(username);
        setCurrentuser(u);
        let dbpayments = await fetchuserpayments(username);
        setpayments(dbpayments);
        console.log(u, dbpayments);
    }

    const pay = async (amount) => {
        //get the order id

        let a = await intiate(amount, username, paymentform)
        let o_id = a.id
        const razorKey = a?.key || currentuser?.razorkey;
        if (!razorKey) {
            alert("Razorpay Key is missing! Please make sure KEY_ID is set in environment variables or enter your keys in Dashboard.");
            return;
        }

        const callbackUrl = typeof window !== "undefined" && window.location.origin
            ? `${window.location.origin}/api/razorpay`
            : `${process.env.NEXT_PUBLIC_URL}/api/razorpay`;

        let options = {
            "key": razorKey,
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "GetMeTipsy", //your business name
            "description": `Tip to ${username}`,
            "image": currentuser?.profilepic || "/logo.png",
            "order_id": o_id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": callbackUrl,
            "prefill": {
                "name": paymentform.name || "Supporter",
            },
            "notes": {
                "to_user": username
            },
            "theme": {
                "color": "#760940"
            }
        }
        let rzp1 = new window.Razorpay(options);
        rzp1.open();
    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className="min-h-screen">

                <div className="banner w-full relative">
                    <img className="opacity-70 object-cover w-full h-90 border-b border-white/40" src={currentuser?.coverpic || "/default-cover.svg"} alt="" />
                    <div className="absolute top-70 left-1/2 -translate-x-1/2 w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-white">
                        <img
                            src={currentuser?.profilepic || "/default-avatar.svg"}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="text-white text-3xl font-bold flex flex-col gap-4 justify-center items-center my-25">
                    @{username}
                    <p className="text-sm text-white/90 font-normal w-68 text-center">creating vibe coded websites that dont look vibe coded and serves an actual purpose</p>
                    <div className="flex gap-2 text-sm text-white/50 font-semibold">
                        <ul className="flex list-disc gap-8">
                            <li className="list-none">3500 members</li>
                            <li>111 posts</li>
                            <li>₹1100/release</li>
                        </ul>

                    </div>

                </div>

                <div className="chat flex gap-10 justify-center items-center mb-10">
                    <div className="supporters w-[40vw] h-[70vh] bg-[#1f1f1f99] rounded-2xl flex flex-col text-justify gap-15 items-center">
                        <p className="font-bold text-2xl text-center mt-7 text-[#760940] p-3">Supporters</p>
                        <ul className="flex flex-col gap-2 text-white text-md">
                            {payments.length === 0 && <p className="text-white/50 text-sm text-center">No supporters yet</p>}
                            {payments.map((p, i) => {
                                return <li className="flex items-center gap-2 "> <span><lord-icon
                                    src="https://cdn.lordicon.com/hhljfoaj.json"
                                    trigger="loop"
                                    delay="2000"
                                    colors="primary:#121331,secondary:#762045,tertiary:#faefd1"
                                    style={{ width: "30px", height: "30px" }}>
                                </lord-icon></span> <span>
                                        {p.name} donated ₹{Number.parseInt(p.amount / 100)} with a message{" "}
                                        <span className="font-bold">{p.message}</span>
                                    </span></li>
                            })}

                        </ul>
                    </div>
                    <div className="payment w-[40vw] h-[70vh] bg-[#1f1f1f99] rounded-2xl ">
                        <p className="flex gap-2 justify-center font-bold text-2xl text-center mt-9.5 text-[#ffffff]">Support  <span className="text-[#760940]"> @{username}</span></p>
                        <div className="flex flex-col gap-4 justify-center mt-6.5 items-center">

                            <div className="flex flex-col gap-4 justify-center items-center mt-10">
                                <input onChange={handleChange} name='name' value={paymentform.name} type="text" placeholder="Enter Name" className="bg-[#1f1f1f] border border-[#2e2d2e] rounded-lg w-full px-3 py-2 text-white/70 focus:outline-none " />
                                <input onChange={handleChange} name='message' value={paymentform.message} type="text" placeholder="Enter Message" className="bg-[#1f1f1f] border border-[#2e2d2e] rounded-lg w-full px-3 py-2 text-white/70 focus:outline-none " />
                                <input onChange={handleChange} name='amount' value={paymentform.amount} type="text" placeholder="Enter Amount" className="bg-[#1f1f1f] border border-[#2e2d2e] rounded-lg w-full px-3 py-2 text-white/70 focus:outline-none " />
                                <button onClick={() => {
                                    pay(Number(paymentform.amount) * 100)
                                }} className="bg-[#760940] text-white px-51 py-2 rounded-lg hover:bg-[#762045] transition-all cursor-pointer">Pay</button>
                            </div>
                            <div className="pills flex gap-2 mt-5">
                                <div onClick={() => {
                                    pay(500)
                                }
                                } className="px-2 py-1.5  rounded-xl  border border-[#2e2d2e] overflow-hidden hover:bg-[#762045] cursor-pointer">pay ₹5 </div>
                                <div onClick={() => {
                                    pay(1000)
                                }
                                } className="px-2 py-1.5  rounded-xl border border-[#2e2d2e] overflow-hidden hover:bg-[#762045] cursor-pointer">pay ₹10 </div>
                                <div onClick={() => {
                                    pay(2500)
                                }
                                } className="px-2 py-1.5  rounded-xl border border-[#2e2d2e] overflow-hidden hover:bg-[#762045] cursor-pointer">pay ₹25 </div>
                                <div onClick={() => {
                                    pay(5000)
                                }
                                } className="px-2 py-1.5  rounded-xl border border-[#2e2d2e] overflow-hidden hover:bg-[#762045] cursor-pointer">pay ₹50 </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {showThanksModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
                    <div className="bg-[#141416] border border-[#760940] p-8 rounded-2xl max-w-md w-full text-center shadow-[0_0_50px_rgba(118,9,64,0.4)] flex flex-col items-center gap-5">
                        <div className="w-20 h-20 rounded-full bg-[#760940]/25 border-2 border-[#ff4081] flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(255,64,129,0.5)]">
                            🎉
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold text-white">
                                Thank You!
                            </h2>
                            <p className="text-white/80 text-base mt-2">
                                Your donation to <span className="text-[#ff4081] font-bold">@{username}</span> was successful!
                            </p>
                            <p className="text-white/50 text-xs mt-1">
                                Your support helps keep the creativity alive. 🥂
                            </p>
                        </div>
                        <button
                            onClick={handleCloseThanks}
                            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#760940] to-[#a8135c] hover:from-[#8f0c4e] hover:to-[#bd186a] text-white font-semibold transition-all shadow-lg cursor-pointer"
                        >
                            Back to @{username}&apos;s Page
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default PaymentPage;
