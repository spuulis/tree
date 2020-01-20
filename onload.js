function onload() {
    // Canvas
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // Controller
    Controller.nbRadius = document.getElementById("nb-radius");
    Controller.nbTheta = document.getElementById("nb-theta");
    Controller.nbBranches = document.getElementById("nb-branches");
    Controller.nbDilution = document.getElementById("nb-dilution");
    Controller.nbLevels = document.getElementById("nb-levels");
    Controller.autoRadius = document.getElementById("cb-radiusauto");
    Controller.autoTheta = document.getElementById("cb-thetaauto");

    // Animation loop
    window.requestAnimationFrame(loop);
}