import {
  createStudent,
  deleteStudentByID,
  EditStudent,
  getStudentbyId,
} from "../controller.js";
import { getStudent } from "../controller.js";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, standard, gender, id } = req.body;

    const isuserExist = await getStudentbyId(id);
    if (isuserExist) {
      res.status(400).send({ message: "Userid already taken" });
    }else{
      await createStudent(name, standard, gender, id);
    res.send({ message: "ok" });
    }
    
  } catch (err) {
    console.log(err);
    res.send({ status: "failed" });
  }
});

router.get("/", async (req, res) => {
  const student = await getStudent(req);
  res.send(student);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const student = await getStudentbyId(id);
  res.send(student);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const student = await deleteStudentByID(id);
  student
    ? res.send(student)
    : res.status(404).send({ message: "mentor not found" });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedstudent = req.body;
  await EditStudent(id, updatedstudent);
  try {
    res
      .status(200)
      .json({ message: "successfully updated", data: updatedstudent });
  } catch {
    res.status(404).json({ message: "failed to update" });
  }
});

export const studentRouter = router;
