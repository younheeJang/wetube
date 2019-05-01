import dotenv from 'dotenv';
import './db';
import app from './app';

dotenv.config();
import js from './js';
import './models/Video';
import './models/Comment';
import './models/User';

const PORT = process.env.PORT || 4000;

const handleListening=()=>{
    js.log(`listening on port ${PORT}`);
}

app.listen(PORT, handleListening);