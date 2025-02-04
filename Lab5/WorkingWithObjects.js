const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };
  
export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
    
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
      });
      const module = {
        id: "CS101",
        name: "Introduction to Computer Science",
        description: "Learn the basics of computer science.",
        course: "CS Fundamentals",
      };
      
      // Route to retrieve the entire module object
      app.get("/lab5/module", (req, res) => {
        res.json(module);
      });
      
      // Route to retrieve only the module name
      app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
      });
      
      // Route to update the module name
      app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
      });
      
      // Route to update the module description
      app.get("/lab5/module/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        module.description = newDescription;
        res.json(module);
      });
      app.get("/lab5/assignment/score/:newScore", (req, res) => {
        const { newScore } = req.params;
        assignment.score = parseInt(newScore, 10);
        res.json(assignment);
      });
      
      // Update the assignment's completed status
      app.get("/lab5/assignment/completed/:newCompleted", (req, res) => {
        const { newCompleted } = req.params;
        assignment.completed = newCompleted === "true";
        res.json(assignment);
      });
  }
  
  