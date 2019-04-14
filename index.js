import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import js from "./js";
//const express = require('express');
const app = express();
const PORT = 3000;

const handleListening=()=>{
    js.log(`running on ${PORT}`);
}

const handleHome=(req, res)=>{
    res.send('home sweet home');
}

const handleProfile=(req, res)=>{
    res.send('profile');
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(helmet());
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);