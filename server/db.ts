import 'dotenv/config';
import mongoose from 'mongoose';

const connectDb = async () => {
  await mongoose.connect(`${process.env.DB_HOST}/${process.env.DB_NAME}`);
  console.log('success connected');
};

export default connectDb;
