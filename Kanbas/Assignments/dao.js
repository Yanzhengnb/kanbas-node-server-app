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
  const {assignments} = Database;
  console.log('Assignment ID:', assignmentId);
  console.log('Assignment Updates:', assignmentUpdates);
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  console.log('Found Assignment:', assignment);


  Object.assign(assignment, assignmentUpdates);
  return assignment;
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;

    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}




