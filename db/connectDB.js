import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/getmetipsy"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default connectDB;