import {
  getMentorByID,
  getStudentbyId,
  getStudentMentorbyid,
  createStudentMentor,
  getStudentMentor,
  deleteStudentmentorByName,
  EditStudentmentor,
  getSmstudentbyid,
  getMentorByName,
} from "../controller.js";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { mentorid, studentid, id } = req.body;
    const mentor = await getMentorByID(mentorid);
    if (!mentor) {
      res.send({ message: "mentor dosen't exist" });
    } else {
      const student = await getStudentbyId(studentid);
      if (!student) {
        res.send({ message: "student dosen't exist" });
      } else {
        const studentmentor = await getStudentMentorbyid(id);

        if (studentmentor) {
          res.send({ message: "mentor already exist" });
        } else {
          const studentidcheck = await getSmstudentbyid(studentid);

          if (studentidcheck) {
            res.send({ message: "student already exist" });
          } else {
            await createStudentMentor(
              mentor.name,
              student.name,
              id,
              student.id,
              mentor.id
            );
            res.send({ status: "ok" });
          }
        }
      }
    }
  } catch (err) {
    console.log(err);
    res.send({ status: "failed" });
  }
});

router.get("/", async (req, res) => {
  const studentmentor = await getStudentMentor(req);
  res.send(studentmentor);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const studentmentor = await getStudentMentorbyid(id);
  res.send(studentmentor);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const studentmentor = await deleteStudentmentorByName(id);
  studentmentor
    ? res.send(studentmentor)
    : res.status(404).send({ message: "mentor not found" });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const mentorname = req.body.mentorname;
  const isuserExist = await getMentorByName(mentorname);

  if (!isuserExist) {
    res.status(400).send({ message: "mentor doesn't exist" });
    return;
  } else {
    const updatedmentor = req.body;

    await EditStudentmentor(id, updatedmentor);
    try {
      res
        .status(200)
        .json({ message: "successfully updated", data: updatedmentor });
    } catch {
      res.status(404).json({ message: "failed to update" });
    }
  }
});

export const studentMentorRouter = router;
