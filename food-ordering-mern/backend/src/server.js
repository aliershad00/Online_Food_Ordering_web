
const app = require("../api");
const connectToDB = require("./config/db");

const PORT=process.env.PORT
app.listen(PORT,async ()=>{
    await connectToDB()
    console.log("food ordering server running on port ", PORT)
})

