import {
    getoneStudentMentor ,
    getallStudentsbyid, 
    getMentorByID
  } from "../controller.js";
  import express from "express";
  
  const router = express.Router();
  
  
  router.get("/", async (req, res) => {
    const studentmentor = await getoneStudentMentor(req);
    res.send(studentmentor);
  });
  
  router.get("/:id", async (req, res) => {
      const { id } = req.params;
      const mentor = await getMentorByID(id);
      const allstudent = await getallStudentsbyid(mentor.name);
      if (!allstudent) {
        res.status(400).send({ message: "NO students assigned" });
      }else{
        res.send(allstudent);
      }
      
    });
  
 
    
  
  export const allstudentsRouter = router;
  