let addSkillsButton = document.querySelector(".add-skills");

//____capturing state when addskillsbutton is clicked______

addSkillsButton.addEventListener("click", function createSkills(event) {
    document.querySelector(".remaining-fields").style.display = "flex";
    let skill = document.createElement("input");//____ creating form input for skill
    skill.type = "text";// input type text
    skill.id = "skill";// ____ unique input id
    skill.placeholder = "Enter skill";// input placeholder text
    skill.required = true;// ____attached validations
    skill.className = "input-1";

    //_____ appending all created elements
    document.querySelector(".remaining-fields").appendChild(skill);
});