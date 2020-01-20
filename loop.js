function loop() {
    Controller.update();

    if(document.getElementById("autogen").checked == true) {
        clearCanvas();
        tree({"X": 256, "Y": 256}, Controller.getRadius(), Math.PI / 2, Math.PI * Controller.getTheta() / 180, Controller.getBranches(), Controller.getDilution(), Controller.getLevels());
    }

    window.requestAnimationFrame(loop);
}
