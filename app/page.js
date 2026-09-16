"use client"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="py-20 sm:py-28 md:py-32 px-4">
        <div className="flex flex-col justify-center text-center gap-6 sm:gap-8 items-center text-white max-w-4xl mx-auto">
          <div className="icons flex gap-2 sm:gap-4">

            <lord-icon
              src="https://cdn.lordicon.com/nvsfzbop.json"
              trigger="loop"
              stroke="bold"
              delay="2000"
              colors="primary:#762045,secondary:#faefd1"
              style={{ height: 80, width: 80 }}>
            </lord-icon>

            <lord-icon
              src="https://cdn.lordicon.com/yvgmrqny.json"
              trigger="loop"
              stroke="bold"
              delay="2000"
              colors="primary:#762045,secondary:#faefd1"
              style={{ height: 80, width: 80 }}>
            </lord-icon>

            <lord-icon
              src="https://cdn.lordicon.com/bsdkzyjd.json"
              trigger="loop"
              stroke="bold"
              delay="2000"
              colors="primary:#762045,secondary:#faefd1"
              style={{ height: 80, width: 80 }}>
            </lord-icon>
          </div>
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl text-white/90 text-center leading-tight">
            Buy your favorite creators a
            <span className="text-[#ff4081] inline-block ml-2"> Virtual drink </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto text-center text-white/70 px-4">
            Support creators with small contributions that make a big impact. Every tip helps turn passion into the next great creation.
          </p>
          <div className="button flex flex-wrap gap-3 sm:gap-4 justify-center pb-6 sm:pb-10">
            <button className="bg-white/90 text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-white transition-all cursor-pointer shadow-lg text-sm sm:text-base">
              Get Started
            </button>

            <button className="border border-white/20 bg-transparent text-white px-6 py-2.5 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer text-sm sm:text-base">
              Read More
            </button>
          </div>
        </div>
        <div className="h-px w-[90vw] max-w-5xl bg-[#762045]/35 mx-auto my-12 md:my-16"></div>
        <div>
          <div className="text-2xl sm:text-3xl text-center font-semibold pb-6">Your fans can get you <span className="text-[#ff4081]">Tips-y !</span></div>
          <div className="cards flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 lg:gap-8 w-full max-w-6xl mx-auto py-8">
            <div className="card bg-[#141416]/90 flex flex-col gap-4 border border-white/10 w-full sm:w-80 md:w-72 lg:w-80 min-h-[300px] items-center rounded-2xl p-6 shadow-xl text-center">
              <lord-icon
                src="https://cdn.lordicon.com/ysqeagpz.json"
                trigger="loop"
                delay="3000"
                colors="primary:#762045,secondary:#faefd1"
                style={{ width: 80, height: 80 }}>
              </lord-icon>
              <p className="font-bold text-lg text-white">All Payments accepted</p>
              <p className="text-center text-sm text-white/70 py-1">Pay your way with fast, secure, and trusted payment options.</p>
            </div>
            <div className="card bg-[#141416]/90 flex flex-col gap-4 border border-white/10 w-full sm:w-80 md:w-72 lg:w-80 min-h-[300px] items-center rounded-2xl p-6 shadow-xl text-center">
              <lord-icon
                src="https://cdn.lordicon.com/jdgfsfzr.json"
                trigger="loop"
                delay="3000"
                colors="primary:#762045,secondary:#faefd1"
                style={{ width: 80, height: 80 }}>
              </lord-icon>
              <p className="font-bold text-lg text-white">Give meaningful Messages</p>
              <p className="text-center text-sm text-white/70 py-1">Pair every contribution with a warm and supportive message.</p>
            </div>
            <div className="card bg-[#141416]/90 flex flex-col gap-4 border border-white/10 w-full sm:w-80 md:w-72 lg:w-80 min-h-[300px] items-center rounded-2xl p-6 shadow-xl text-center">
              <lord-icon
                src="https://cdn.lordicon.com/fgxwhgfp.json"
                trigger="loop"
                delay="3000"
                colors="primary:#762045,secondary:#faefd1"
                style={{ width: 80, height: 80 }}>
              </lord-icon>
              <p className="font-bold text-lg text-white">Security Assured</p>
              <p className="text-center text-sm text-white/70 py-1">Built with security so every transaction stays safe and protected.</p>
            </div>
          </div>
        </div>
        <div className="h-px w-[90vw] max-w-5xl bg-[#762045]/35 mx-auto my-12 md:my-16"></div>
        <div>
          <div className="text-2xl sm:text-3xl text-center font-semibold pb-6">Learn more about <span className="text-[#f2bb08]">GetMeTipsy</span></div>
          <div className="cards flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 lg:gap-8 w-full max-w-5xl mx-auto py-8">
            <div onClick={() => window.open("https://github.com/yogeshcodeshere", "_blank")} className="card bg-[#141416]/90 flex flex-col gap-5 border border-white/10 items-center justify-center rounded-2xl w-full sm:w-64 md:w-72 py-10 cursor-pointer hover:border-[#ff4081]/50 hover:scale-105 transition-all shadow-xl">
              <lord-icon
                src="https://cdn.lordicon.com/jjxzcivr.json"
                trigger="loop-on-hover"
                colors="primary:#ff4081,secondary:#760940"
                style={{ width: 120, height: 120 }}>
              </lord-icon>
            </div>
            <div className="card bg-[#141416]/90 flex flex-col gap-5 border border-white/10 items-center justify-center rounded-2xl w-full sm:w-64 md:w-72 py-10 cursor-pointer hover:border-[#66a1ee]/50 hover:scale-105 transition-all shadow-xl">
              <lord-icon
                src="https://cdn.lordicon.com/qgebwute.json"
                trigger="loop-on-hover"
                colors="primary:#66a1ee,secondary:#ffffff"
                style={{ width: 120, height: 120 }}>
              </lord-icon>
            </div>
            <div className="card bg-[#141416]/90 flex flex-col gap-5 border border-white/10 items-center justify-center rounded-2xl w-full sm:w-64 md:w-72 py-10 cursor-pointer hover:border-[#eee966]/50 hover:scale-105 transition-all shadow-xl">
              <lord-icon
                src="https://cdn.lordicon.com/ozlkyfxg.json"
                trigger="loop-on-hover"
                colors="primary:#eee966,secondary:#eee966"
                style={{ width: 120, height: 120 }}>
              </lord-icon>
            </div>
          </div>
        </div>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </div>
    </>

  );
}
