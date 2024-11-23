import Database from "../Database/index.js";

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function findAssignmentsForModule(moduleId) {
  return Database.assignments.filter((assignment) => assignment.module === moduleId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const assignment = Database.assignments.find((a) => a._id === assignmentId);
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;

    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}



