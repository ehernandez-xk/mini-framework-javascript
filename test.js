// gets a new object (the architecture allows us to not have to use the "new" keyword here)
var g = G$("eddy", "hernandez");

// use our chainable methods
g.greet().setLang("es").greet(true).log();


//let's use our object on the click of the login button
function changeMessage() {

	// greate a new "Greetr" object (let's pretend we know the name from the login)
	var loginGrtr = G$("John", "Doe");
	
	//Using one line
	// fire off an HTML greeting, passing the "#greeting" as the selector and the chosen language, and
	// log the welcome as well
	loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
	
	// Doing the same thing but in diferent lines.
	/*
		var langValue = $("#lang").val();
		loginGrtr.setLang(langValue);
		loginGrtr.HTMLGreeting("#greeting", true);
		loginGrtr.log();
	*/
	
}
