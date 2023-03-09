import express from "express"

import Connection from "./database/connection.js";
import route from "./Routes/route.js";
import bodyParser from "body-parser";
import cors from "cors"
const app = express();
app.use(express.json())
app.use(cors())

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use("/",route)


Connection()

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
