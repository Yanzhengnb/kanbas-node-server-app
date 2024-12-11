import model from "./model.js";
import { v4 as uuidv4 } from 'uuid';

export const createCourse = async(course) => {
    const newCourse = { ...course, _id: uuidv4() }; 
  
return model.create(newCourse);
}

export const findAllCourses = () => model.find();

export const findCourseById = (courseId) => model.findOne({ id: courseId });

export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });

export const findCourseNumber = (courseId) => model.findById(courseId).select('number');
