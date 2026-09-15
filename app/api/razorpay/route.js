import { NextResponse } from "next/server";
import {validatePaymentVerification} from "razorpay/dist/utils/razorpay-utils";

import payment from "@/models/payment";  
import connectDB from "@/db/connectDB.js";

export const POST = async (req) => {
        await connectDB();
        let body = await req.formData();
        body = Object.fromEntries(body);

        //check if razorpay orderid is present in the server

        let p = await payment.findOne({o_id: body.razorpay_order_id});
        if(!p){
            return NextResponse.json({success: false, message: "Order id not found in the server"});
        }
        //verify the payment

        let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, process.env.KEY_SECRET);

        if(xx){
            const paymentupdate = await payment.findOneAndUpdate({o_id: body.razorpay_order_id}, {done:true}, {new:true});
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${paymentupdate.to_user}?paymentdone=true`);
        }
        else{
            return NextResponse.json({success: false, message: "Payment verification failed"});
        }
}