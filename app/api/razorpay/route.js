import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/models/payment";  
import user from "@/models/user";
import connectDB from "@/db/connectDB.js";

export const POST = async (req) => {
    try {
        await connectDB();
        let body = await req.formData();
        body = Object.fromEntries(body);

        // Check if razorpay orderid is present in the database
        let p = await payment.findOne({ o_id: body.razorpay_order_id });
        if (!p) {
            return NextResponse.json({ success: false, message: "Order id not found in the server" }, { status: 400 });
        }

        let u = await user.findOne({ username: p.to_user });
        const secret = u?.rs || process.env.KEY_SECRET;

        // Verify the payment signature
        let xx = validatePaymentVerification(
            { "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id },
            body.razorpay_signature,
            secret
        );

        if (xx) {
            const paymentupdate = await payment.findOneAndUpdate(
                { o_id: body.razorpay_order_id },
                { done: true },
                { new: true }
            );

            // Construct safe absolute URL from request origin
            const redirectUrl = new URL(`/${paymentupdate.to_user}?paymentdone=true`, req.url);
            // Use 303 See Other to ensure browser converts POST to GET
            return NextResponse.redirect(redirectUrl, 303);
        } else {
            return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 400 });
        }
    } catch (err) {
        console.error("Razorpay verification error:", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
};