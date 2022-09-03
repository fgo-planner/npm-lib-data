import mongoose from 'mongoose';

export const mongooseConnection = (uri: string): Promise<typeof mongoose> => {

    mongoose.connection.on('connected', () => {
        console.log(`Mongoose connected to ${uri}`);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });

    return mongoose.connect(uri);

};