const Ponisha = require("./platform/ponisha/Ponisha");
const PonishaProjects = require("./platform/ponisha/PonishaProjects");
const fs = require("fs");

async function run() {

    var PonishaClass = new Ponisha('thejaryan' , '34127020');
    var PonishaProjectsClass = new PonishaProjects();

    //let Auth = await PonishaClass.login();
    let Projects = PonishaProjectsClass.searchProject();

}
run();