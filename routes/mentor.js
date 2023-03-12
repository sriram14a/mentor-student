import {
  createMentor,
  deleteByID,
  EditMentor,
  getmentor,
  getMentorByID,
} from "../controller.js";

import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, id, gender, experience } = req.body;
    const isuserExist = await getMentorByID(id);
    if (isuserExist) {
      res.status(400).send({ message: "Userid already taken" });
      return;
    } else {
      await createMentor(name, id, gender, experience);
      res.send({ message: "ok" });
    }
  } catch (err) {
    console.log(err);
    res.send({ status: "failed" });
  }
});

router.get("/", async (req, res) => {
  const mentor = await getmentor(req);
  res.send(mentor);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const mentor = await getMentorByID(id);
  mentor
    ? res.send(mentor)
    : res.status(404).send({ message: "mentor not found" });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const mentor = await deleteByID(id);
  mentor
    ? res.send(mentor)
    : res.status(404).send({ message: "mentor not found" });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const mentorid = req.body.id;
  const isuserExist = await getMentorByID(mentorid);
  if (isuserExist) {
    res.status(400).send({ message: "Userid already taken" });
    return;
  } else {
    const updatedmentor = req.body;
    await EditMentor(id, updatedmentor);
    try {
      res
        .status(200)
        .json({ message: "successfully updated", data: updatedmentor });
    } catch {
      res.status(404).json({ message: "failed to update" });
    }
  }
});
export const mentorRouter = router;
