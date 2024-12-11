import model from "./model.js";
import { v4 as uuidv4 } from 'uuid';
export function updateModule(moduleId, moduleUpdates) {
  return model.updateOne({ _id: moduleId }, moduleUpdates);

  }
  export function findModulesForCourse(courseId) {
    return model.find({ course: courseId });
    // const { modules } = Database;
 // return modules.filter((module) => module.course === courseId);
}

export const createModule =async(module) =>{
  //delete module._id
  //return model.create(module);
   const newModule = { ...module, _id:  uuidv4() };
 return model.create(newModule);
  }
  export function deleteModule(moduleId) {
    return model.deleteOne({ _id: moduleId });
// const { modules } = Database;
 // Database.modules = modules.filter((module) => module._id !== moduleId);
   }
     