import exp from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import { employeeApp } from './APIs/EmployeeAPI.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

config();

const app=exp();

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials: true,
}));

// Body parser middleware
app.use(exp.json());

// Cookie parser middleware (from Blog App)
app.use(cookieParser());

// Path-level middleware
app.use("/emp-api",employeeApp);

// Connect to DB then start server
const connectDB=async()=>{
    try
    {
        await connect(process.env.DB_URL);
        console.log("Database Connection Established");

        const port=process.env.PORT||6002;
        app.listen(port,()=>console.log(`Server is listening on Port ${port}...`));
    }
    catch(err)
    {
        console.log("Error in Database Connection", err.message);
    }
};

connectDB();

// 404 handler for invalid paths
app.use((req, res, next) => {
    console.log(req.url);
    res.status(404).json({ message: `Path ${req.url} is invalid` });
});

// Centralized Error-handling middleware (from Blog App)
app.use((err, req, res, next) => {
    console.log("Error name:", err.name);
    console.log("Error code:", err.code);
    console.log("Error cause:", err.cause);
    console.log("Full error:", JSON.stringify(err, null, 2));

    // ValidationError
    if (err.name === "ValidationError") {
        return res.status(400).json({ message: "error occurred", error: err.message });
    }
    // CastError
    if (err.name === "CastError") {
        return res.status(400).json({ message: "error occurred", error: err.message });
    }

    const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
    const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

    if (errCode === 11000) {
        const field = Object.keys(keyValue)[0];
        const value = keyValue[field];
        return res.status(409).json({
            message: "error occurred",
            error: `${field} "${value}" already exists`,
        });
    }

    // Generic server error
    res.status(500).json({ message: "error occurred", error: "Server side error" });
});
