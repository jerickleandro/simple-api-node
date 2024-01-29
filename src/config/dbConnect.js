import mongoose, { mongo } from "mongoose";

async function connectDatabase() {
  mongoose.connect(process.env.STRING_CONECCTION);
  return mongoose.connection;
}

export default connectDatabase;