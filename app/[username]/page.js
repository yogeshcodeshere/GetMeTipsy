import Script from "next/script";
import PaymentPage from "@/components/paymentpage";



export default async function Username({ params }) {

    const { username } = await params;

    return (
        <>
            <PaymentPage username={username} />
            <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive"
></Script>
        </>
    )
}   