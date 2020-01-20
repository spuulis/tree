class Controller {
    static update() {
        if(this.autoRadius.checked == true) {
            this.nbRadius.value = (250 * (1 - this.nbDilution.value))/(1 - Math.pow(this.nbDilution.value, this.nbLevels.value));
        }
        if(this.autoTheta.checked == true) {
            this.nbTheta.value = (360 / this.nbBranches.value);
        }
    }
    static getRadius() {
        return this.nbRadius.value;
    }
    static getTheta() {
        return this.nbTheta.value;
    }
    static getBranches() {
        return this.nbBranches.value;
    }
    static getDilution() {
        return this.nbDilution.value;
    }
    static getLevels() {
        return this.nbLevels.value;
    }
}