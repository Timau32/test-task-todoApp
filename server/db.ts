import 'dotenv/config';
import mongoose from 'mongoose';

const connectDb = async () => {
  await mongoose.connect(
    `${process.env.DB_HOST}/${process.env.APP_MODE === 'test' ? process.env.DB_TEST_NAME : process.env.DB_NAME}`
  );
  console.log(`${process.env.APP_MODE === 'test' ? 'test db' : 'db'} success connected`);
};

export default connectDb;
