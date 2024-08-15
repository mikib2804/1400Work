import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async (): Promise<void> => {
  const connectionString = process.env.MONGO_DB_CONNECTION_STRING as string;
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 5000,
    } as ConnectOptions);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
