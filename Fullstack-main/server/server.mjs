import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import classes from "./routes/classes.mjs";
console.log("1")
const PORT = process.env.PORT || 5050;
const app = express();
console.log("2")
app.use(cors());
app.use(express.json());
console.log("3")
app.use("/classes", classes);
console.log("4")
    // start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
console.log("5")