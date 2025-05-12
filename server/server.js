import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/auth/auth-routes';

mongoose.connect('mongodb+srv://usmantufail837:Brainiacs827@cluster0.h7qmnjk.mongodb.net/')
.then(() => console.log('✅ MongoDB connected'))
.catch((error) => console.error('❌ MongoDB connection error:', error.message));

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Fixed origin and typo in 'Cache-Control'
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Cache-Control',
      'Expires',
      'Pragma'
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter)

app.listen(PORT, () => console.log(`🚀 Server is now running on port ${PORT}`));
