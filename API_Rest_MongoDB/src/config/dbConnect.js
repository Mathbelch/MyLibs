import mongoose from "mongoose";

mongoose.connect("mongodb+srv://math:root@livariaalura.iu4zkew.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;