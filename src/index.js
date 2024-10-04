import dotenv from "dotenv";

import connectDB from "./db/index.js";


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Your server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
console.log("error connecting the db",err)
})



dotenv.config({ path: "./env" });
