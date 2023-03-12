import { client } from "./index.js";

//mentor
export async function createMentor(name, id, gender, experience) {
  return await client.db("mentor-student").collection("mentor").insertOne({
    name: name,
    id: id,
    gender: gender,
    experience: experience,
  });
}

export async function getmentor(req) {
  return await client
    .db("mentor-student")
    .collection("mentor")
    .find(req.query)
    .toArray();
}

export async function deleteByID(id) {
  return await client
    .db("mentor-student")
    .collection("mentor")
    .deleteOne({ id: id });
}
export async function EditBook(id, updatedmentor) {
  return await client
    .db("mentor-student")
    .collection("mentor")
    .updateOne({ id: id }, { $set: updatedmentor });
}

export async function getMentorByID(id) {
  return await client
    .db("mentor-student")
    .collection("mentor")
    .findOne({ id: id });
}

export async function getMentorByname(updatedmentor) {
  return await client
    .db("mentor-student")
    .collection("mentor")
    .findOne({ name: updatedmentor });
}

export async function EditMentor(id, updatedmentor) {
  return await client
    .db("mentor-student")
    .collection("mentor")
    .updateOne({ id: id }, { $set: updatedmentor });
}

//student
export async function createStudent(name, standard, gender, id) {
  return await client.db("mentor-student").collection("student").insertOne({
    name: name,
    standard: standard,
    id: id,
    gender: gender,
  });
}
export async function getStudent(req) {
  return await client
    .db("mentor-student")
    .collection("student")
    .find(req.query)
    .toArray();
}
export async function deleteStudentByID(id) {
  return await client
    .db("mentor-student")
    .collection("student")
    .deleteOne({ id: id });
}
export async function getStudentbyId(id) {
  return await client
    .db("mentor-student")
    .collection("student")
    .findOne({ id: id });
}

export async function EditStudent(id, updatedstudent) {
  return await client
    .db("mentor-student")
    .collection("student")
    .updateOne({ id: id }, { $set: updatedstudent });
}

//student-mentor
export async function createStudentMentor(
  mentorname,
  studentname,
  id,
  studentid,
  mentorid
) {
  return await client
    .db("mentor-student")
    .collection("student-mentor")
    .insertOne({
      id: id,
      mentorname: mentorname,
      studentname: studentname,
      studentid: studentid,
      mentorid: mentorid,
    });
}
export async function getStudentMentor(req) {
  return await client
    .db("mentor-student")
    .collection("student-mentor")
    .find(req.query)
    .toArray();
}
export async function getStudentMentorbyid(id) {
  return await client
    .db("mentor-student")
    .collection("student-mentor")
    .findOne({ id: id });
}
export async function getSmstudentbyid(id) {
  return await client
    .db("mentor-student")
    .collection("student-mentor")
    .findOne({ id: id });
}
export async function getMentorByName(mentorname) {
  return await client
    .db("mentor-student")
    .collection("mentor")
    .findOne({ name: mentorname });
}

export async function deleteStudentmentorByName(id) {
  return await client
    .db("mentor-student")
    .collection("student-mentor")
    .deleteOne({ id: id });
}

export async function EditStudentmentor(id, updatedstudentmentor) {
  return await client
    .db("mentor-student")
    .collection("student-mentor")
    .updateOne({ id: id }, { $set: updatedstudentmentor });
}

//one student mentor

export async function createoneStudentMentor(
  mentorname,
  studentname,
  id,
  studentid,
  mentorid
) {
  return await client
    .db("mentor-student")
    .collection("one-student-mentor")
    .insertOne({
      id: id,
      mentorname: mentorname,
      studentname: studentname,
      studentid: studentid,
      mentorid: mentorid,
    });
}

export async function getoneStudentMentor(req) {
  return await client
    .db("mentor-student")
    .collection("one-student-mentor")
    .find(req.query)
    .toArray();
}

export async function getoneStudentMentorbyid(id) {
  return await client
    .db("mentor-student")
    .collection("one-student-mentor")
    .findOne({ id: id });
}

export async function getoneSmstudentbyid(id) {
  return await client
    .db("mentor-student")
    .collection("one-student-mentor")
    .findOne({ id: id });
}

export async function getoneSmmentorbyid(id) {
  return await client
    .db("mentor-student")
    .collection("one-student-mentor")
    .findOne({ id: id });
}

export async function deleteoneStudentmentorByName(id) {
  return await client
    .db("mentor-student")
    .collection("one-student-mentor")
    .deleteOne({ id: id });
}

export async function EditoneStudentmentor(id, updatedstudentmentor) {
  return await client
    .db("mentor-student")
    .collection("one-student-mentor")
    .updateOne({ id: id }, { $set: updatedstudentmentor });
}

//all students

export async function getallStudentsbyid(name) {
  return await client
    .db("mentor-student")
    .collection("student-mentor")
    .find({ mentorname: name })
    .toArray();
}
