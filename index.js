import * as dotenv from "dotenv";
import cors from "cors"
import express from "express";
import { MongoClient } from "mongodb";
import { mentorRouter } from "./routes/mentor.js";
import { studentRouter } from "./routes/student.js";
import { studentMentorRouter } from "./routes/student-mentor.js";
import { onestudentMentorRouter } from "./routes/one-std-men.js"
import { allstudentsRouter } from "./routes/allstudents.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  try{const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDb is connected");
    return client;
  }
  catch{
    console.log("MongoDb is not connected");
  }
}

export const client = await createConnection();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hi there");
});

app.use("/mentor", mentorRouter);
app.use("/student", studentRouter);
app.use("/studentmentor",studentMentorRouter);
app.use("/onestudentmentor",onestudentMentorRouter);
app.use("/allstudents",allstudentsRouter);




app.listen(PORT, () => console.log("Server listening to PORT", PORT));

