"use strict";
// Selecting required buttons
const addSkillButton = document.querySelector(".add-skill");
const addHobbieButton = document.querySelector(".add-hobbie");
const skillsContainer = document.querySelector(".skills-container");
const hobbiesContainer = document.querySelector(".hobbies-container");
const createButton = document.querySelector(".create-button");
createButton.addEventListener("click", function showResume(event) {
    const head = document.querySelector(".head");
    const resume = document.querySelector(".resume");
    if (head && resume) {
        head.style.display = "none";
        resume.style.display = "block";
    }
});
const summary = document.querySelector(".summary");
if (summary) {
    summary.style.textAlign = "center"; // Centering summary
}
// Targeting the state when add skill button is clicked
addSkillButton.addEventListener("click", function createSkills(event) {
    const skill = document.createElement("input");
    skill.type = "text";
    skill.name = "skill";
    skill.id = "skill";
    skill.style.width = "200px";
    skill.style.height = "40px";
    skill.style.border = "1px solid black";
    skillsContainer.appendChild(skill);
});
// Targeting the state when add hobbie button is clicked
addHobbieButton.addEventListener("click", function createHobbie(event) {
    const hobbie = document.createElement("input");
    hobbie.type = "text";
    hobbie.name = "hobbie"; // Changed to "hobbie" to match its purpose
    hobbie.id = "hobbie"; // Changed to "hobbie" to match its purpose
    hobbie.style.width = "200px";
    hobbie.style.height = "40px";
    hobbie.style.border = "1px solid black";
    hobbiesContainer.appendChild(hobbie);
});
