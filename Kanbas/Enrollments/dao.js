import Database from '../Database/index.js';
import model from './model.js';
import { v4 as uuidv4 } from 'uuid';

// Enroll a user in a course
export function enrollUserInCourse(user, course) {
    console.log("EnrollUserInCourse - User:", user);
    console.log("EnrollUserInCourse - Course:", course);

    if (!user || !course) {
        throw new Error("Invalid user or course ID. Both are required.");
    }

    return model.create({ user, course });
}

// Unenroll a user from a course
export function unenrollUserFromCourse(user, course) {
    console.log("UnenrollUserFromCourse - User:", user);
    console.log("UnenrollUserFromCourse - Course:", course);

    if (!user || !course) {
        throw new Error("Invalid user or course ID. Both are required.");
    }

    return model.deleteOne({ user, course });
}

// Find courses for a specific user
export async function findCoursesForUser(userId) {
  console.log("FindCoursesForUser - UserID:", userId);
  const enrollments = await model.find({ user: userId }).populate('course');

  return enrollments.map((enrollment) => enrollment.course);
};

// Find users enrolled in a specific course
export async function findUsersForCourse(courseId) {

    if (!courseId) {
        throw new Error("Course ID is required to find users.");
    }

    const enrollments = await model.find({ course: courseId }).populate('user');
    return enrollments.map((enrollment) => enrollment.user);
}


