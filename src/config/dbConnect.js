import mongoose, { mongo } from 'mongoose';

async function connectDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.pfbyq7s.mongodb.net/livraria?retryWrites=true&w=majority");
    return mongoose.connection;
}

export default connectDatabase;