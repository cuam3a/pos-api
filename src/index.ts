import express from 'express'
import cors from 'cors'
import { connectDB } from "./config/database";
import { router } from "./routers";
import { initConfig } from './utils/init';

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
connectDB();
app.use(cors());
app.use(express.json()); 
app.use(router);
initConfig()

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

//module.exports = app;
