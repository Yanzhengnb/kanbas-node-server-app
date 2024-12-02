import * as assignmentDao from "./dao.js"
export default function AssignmentRoutes(app){
    app.delete("/api/assignments/:AssignmentId",async(req,res) => {
        const {assignmentId}=req.params;
        const status= assignmentDao.deleteAssignment(assignmentId);
        res.send(status);
    
    });
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        console.log('Assignment ID:', assignmentId); // Log for debugging
  console.log('Assignment Updates:', assignmentUpdates);
        const status =  assignmentDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
      });
     
    
}

 
