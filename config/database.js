const mongoose = require("mongoose");

connectDB =  async () => {

    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 3000,
        connectTimeoutMS: 3000,
        socketTimeoutMS: 3000
    })
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => {
            console.error('MongoDB connection error details:', {
                name: err.name,
                message: err.message,
                code: err.code
            });
            console.error('Stack trace:', err.stack);
        });

};

module.exports = connectDB;