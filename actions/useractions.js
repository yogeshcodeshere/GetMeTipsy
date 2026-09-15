"use server"
import Razorpay from "razorpay"
import payment from "@/models/payment"
import connectDB from "@/db/connectDB"
import user from "@/models/user"

export const intiate = async (amount, to_user, payment_form) => {
    await connectDB()
    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",

    }

    let x = await instance.orders.create(options)

    //create a payment object which shows pending 
    await payment.create({
        name: payment_form.name,
        amount: amount,
        to_user: to_user,
        o_id: x.id,
        message: payment_form.message,
    })

    return x;

}

export const fetchuser = async (username) => {
    await connectDB();

    const u = await user.findOne({ username }).lean();

    if (!u) return null;

    return {
        ...u,
        _id: u._id.toString(),
    };
};

export const fetchuserpayments = async (username) => {
    await connectDB();

    const payments = await payment
        .find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .lean();

    return payments.map((p) => ({
        ...p,
        _id: p._id.toString(),
    }));
};

export const updateProfile = async (oldusername, data) => {
    await connectDB();
    let ndata = Object.fromEntries(data);
    //check if the new username is already taken
    if (oldusername !== ndata.username) {
        let u = await user.findOne({ username: ndata.username });

        if (u) {
            return { error: "Username already taken" };
        }
    }

    await user.updateOne({ email: ndata.email }, ndata);


}