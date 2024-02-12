import "dotenv/config" 
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"





const app = express()
app.use(express.static("public"));
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use(express.urlencoded({extended: true}))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});



const PORT = process.env.PORT || 5000

app.listen(PORT , () => console.log("http://localhost:" + PORT))