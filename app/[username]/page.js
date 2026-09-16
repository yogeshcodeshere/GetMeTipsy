import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Script from "next/script";
import PaymentPage from "@/components/paymentpage";
import Link from "next/link";

export default async function Username({ params, searchParams }) {
    const session = await getServerSession(authOptions);
    const { username } = await params;
    const resolvedSearchParams = await searchParams;
    const paymentdone = resolvedSearchParams?.paymentdone === "true";

    if (!session) {
        return (
            <div className="min-h-[85vh] flex flex-col justify-center items-center text-white px-4">
                <div className="bg-[#111111]/90 border border-[#760940]/40 p-10 rounded-2xl max-w-md w-full text-center shadow-2xl flex flex-col items-center gap-5 backdrop-blur-xl">
                    <div className="w-16 h-16 rounded-full bg-[#760940]/20 border border-[#760940]/50 flex items-center justify-center text-3xl">
                        🔒
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Login First</h2>
                        <p className="text-white/60 text-sm mt-2">
                            You must be logged in to view and support <span className="text-[#762045] font-semibold">@{username}</span>
                        </p>
                    </div>
                    <Link
                        href="/login"
                        className="w-full py-3 px-6 rounded-lg bg-[#760940] hover:bg-[#5a0730] text-white font-semibold transition-all shadow-lg hover:shadow-[#760940]/30 cursor-pointer"
                    >
                        Login to Continue
                    </Link>
                    <Link
                        href="/"
                        className="text-xs text-white/50 hover:text-white transition-all cursor-pointer"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <PaymentPage username={username} paymentdone={paymentdone} />
            <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive"></Script>
        </>
    );
}