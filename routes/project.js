exports.viewProject = function(req,res){
	//Controller Code
	var name = req.params.name;
	console.log("The Project name is: " + name);
	res.render('project',{'projectName': name});
	//loads a file called "project.handlebars" & displays it
};

