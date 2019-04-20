import './db';
import app from './app';
import dotenv from 'dotenv';
dotenv.config();
import js from './js';
import './models/Video';
import './models/Comment';

const PORT = process.env.PORT||4000;

const handleListening=()=>{
    js.log(`listening on port ${PORT}`);
}

app.listen(PORT, handleListening);