import app from './app';
import js from './js';

const PORT = 4000;

const handleListening=()=>{
    js.log(`listening on port ${PORT}`);
}

app.listen(PORT, handleListening);