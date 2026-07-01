"use client"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="py-35">
        <div className="flex flex-col justify-center text-center gap-9 items-center text-white">
          <div className="icons flex gap-2">

            <lord-icon
              src="https://cdn.lordicon.com/nvsfzbop.json"
              trigger="loop"
              stroke="bold"
              delay="2000"
              colors="primary:#762045,secondary:#faefd1"
              style={{ height: 110, width: 110 }}>
            </lord-icon>

            <lord-icon
              src="https://cdn.lordicon.com/yvgmrqny.json"
              trigger="loop"
              stroke="bold"
              delay="2000"
              colors="primary:#762045,secondary:#faefd1"
              style={{ height: 110, width: 110 }}>
            </lord-icon>

            <lord-icon
              src="https://cdn.lordicon.com/bsdkzyjd.json"
              trigger="loop"
              stroke="bold"
              delay="2000"
              colors="primary:#762045,secondary:#faefd1"
              style={{ height: 110, width: 110 }}>
            </lord-icon>
          </div>
          <p className="font-bold text-6xl text-white/85 flex justify-center gap-2 items-center">Buy your favorite creators a
            <span className="text-[#762045] flex items-center justify-center gap-2"> Virtual drink </span>
          </p>
          <p className="text-[18px] w-126.75 mx-auto text-justify text-white/60">Support creators with small contributions that make a big impact.
            Every tip helps turn passion into the next great creation.</p>
          <div className="button flex gap-4 justify-center pb-10">
            <button className="bg-[#ffffff]/80 text-black font-semibold px-5 py-2.5 rounded-md hover:bg-[#b6b4b4]/80 transition-all cursor-pointer ">
              Get Started
            </button>

            <button className="border border-white/20 bg-transparent text-white px-5 py-2.5 rounded-md hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer">
              Read More
            </button>
          </div>
        </div>
        <div className="h-px w-[80vw] bg-[#762045]/35 mx-auto my-19"></div>
        <div>
          <div className="text-3xl text-center font-semibold pb-10">Your fans can get you <span className="text-[#762045]">Tips-y !</span></div>
          <div className="cards flex justify-center py-10 gap-30 w-[76vw] mx-auto pt-20 pb-20">
            <div className="card bg-[#000000] flex flex-col gap-5 border-white/30 h-90 w-90 items-center rounded-xl p-5">
              <lord-icon
                src="https://cdn.lordicon.com/ysqeagpz.json"
                trigger="loop"
                delay="3000"
                colors="primary:#762045,secondary:#faefd1"
                style={{ width: 100, height: 100 }}>
              </lord-icon>
              <p className="font-bold">All Payments accepted</p>
              <p className="text-center py-1">Pay your way with fast, secure, and trusted payment options.</p>
            </div>
            <div className="card bg-[#000000]/80 flex flex-col gap-5  border-white/30 h-90 w-90 items-center rounded-xl p-5">
              <lord-icon
                src="https://cdn.lordicon.com/jdgfsfzr.json"
                trigger="loop"
                delay="3000"
                colors="primary:#762045,secondary:#faefd1"
                style={{ width: 100, height: 100 }}>
              </lord-icon>
              <p className="font-bold">Give meaningful Messages</p>
              <p className="text-center py-1">Pair every contribution with a warm and supportive message.</p>
            </div>
            <div className="card bg-[#000000]/80 flex flex-col gap-5  border-white/30 h-90 w-90 items-center rounded-xl p-5">
              <lord-icon
                src="https://cdn.lordicon.com/fgxwhgfp.json"
                trigger="loop"
                delay="3000"
                colors="primary:#762045,secondary:#faefd1"
                style={{ width: 100, height: 100 }}>
              </lord-icon>
              <p className="font-bold">Security Assured</p>
              <p className="text-center py-1">Built with security so every transaction stays safe and protected.</p>
            </div>
          </div>
        </div>
        <div className="h-px w-[80vw] bg-[#762045]/35 mx-auto mb-20"></div>
        <div>
          <div className="text-3xl text-center font-semibold pb-10">Learn more about <span className="text-[#f2bb08]">GetMeTipsy</span></div>
          <div className="cards flex justify-center gap-30 w-[76vw] mx-auto pt-20 pb-20">
            <div onClick={() => window.open("https://github.com/yogeshcodeshere", "_blank")} className="card bg-[#000000] flex flex-col gap-5 border border-white/30  items-center rounded-xl px-15 py-23 cursor-pointer hover:bg-[#6a128a30] hover:scale-103 transition-all">
              <lord-icon
                src="https://cdn.lordicon.com/jjxzcivr.json"
                trigger="loop-on-hover"
                colors="primary:#500589,secondary:#500589"
                style={{ width: 160, height: 160 }}>
              </lord-icon>
            </div>
            <div className="card bg-[#000000] flex flex-col gap-5 border border-white/30  items-center rounded-xl px-15 py-23 cursor-pointer hover:bg-[#66a1ee30] hover:scale-103 transition-all">
              <lord-icon
                src="https://cdn.lordicon.com/qgebwute.json"
                trigger="loop-on-hover"
                colors="primary:#66a1ee,secondary:#ffffff"
                style={{ width: 160, height: 160 }}>
              </lord-icon>
            </div>
            <div className="card bg-[#000000] flex flex-col gap-5 border border-white/30  items-center rounded-xl px-15 py-23 cursor-pointer hover:bg-[#eee96630] hover:scale-103 transition-all">
              <lord-icon
                src="https://cdn.lordicon.com/ozlkyfxg.json"
                trigger="loop-on-hover"
                colors="primary:#eee966,secondary:#eee966"
                style={{ width: 160, height: 160 }}>
              </lord-icon>
            </div>
          </div>
        </div>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </div>
    </>

  );
}
