import * as dao from "./dao.js";
import * as moduledao from "../Modules/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function CourseRoutes(app) {

  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  }

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.courseId);
    res.json(status);
  }

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  }

  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.courseId);
    res.json(course);
  }

  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    res.json(status);
  }
  app.get("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const modules = await moduledao.findModulesForCourse(courseId);
    res.json(modules);
  });
  app.post("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = await moduledao.createModule(module);
    res.send(newModule);
  });
 
  const findCourseNumber = async (req, res) => {
    const { courseId } = req.params;
    const courseNumber = await dao.findCourseNumber(courseId);
    res.json(courseNumber);
  }
  const findUsersForCourse = async (req, res) => {
    const { cid } = req.params;
    const users = await enrollmentsDao.findUsersForCourse(cid);
    res.json(users);
  };
  app.get("/api/courses/:cid/users", findUsersForCourse);
  app.post("/api/Courses", createCourse);
  app.delete("/api/Courses/:courseId", deleteCourse);
  app.get("/api/Courses", findAllCourses);
  app.get("/api/Courses/:courseId", findCourseById);
  app.put("/api/Courses/:courseId", updateCourse);
  app.get("/api/Courses/:courseId/CourseNumber", findCourseNumber);
}
