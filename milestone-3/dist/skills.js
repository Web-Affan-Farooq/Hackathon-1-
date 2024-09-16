"use strict";
// Targeting the "Add Skills" button
const addSkillsButton = document.querySelector(".add-skills");
// Capturing the state when the addSkillsButton is clicked
addSkillsButton.addEventListener("click", function createSkills(event) {
    // Display the remaining fields container
    const remainingFields = document.querySelector(".remaining-fields");
    remainingFields.style.display = "flex";
    // Create the input element for skill
    const skill = document.createElement("input");
    skill.type = "text"; // Set input type to text
    skill.id = "skill"; // Set unique input id
    skill.placeholder = "Enter skill"; // Set input placeholder
    skill.required = true; // Attach validations
    skill.className = "input-1"; // Add class for styling
    // Append the created input element for skill to the remaining fields container
    remainingFields.appendChild(skill);
});
