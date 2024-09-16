// Selecting required buttons
const addSkillButton = document.querySelector(".add-skill") as HTMLButtonElement;
const addHobbieButton = document.querySelector(".add-hobbie") as HTMLButtonElement;
const skillsContainer = document.querySelector(".skills-container") as HTMLDivElement;
const hobbiesContainer = document.querySelector(".hobbies-container") as HTMLDivElement;

const createButton = document.querySelector(".create-button") as HTMLButtonElement;

createButton.addEventListener("click", function showResume(event: Event) {  // Toggling visibility
    const head = document.querySelector(".head") as HTMLElement;
    const resume = document.querySelector(".resume") as HTMLElement;
    
    if (head && resume) {
        head.style.display = "none";
        resume.style.display = "block";
    }
});

const summary = document.querySelector(".summary") as HTMLElement;
if (summary) {
    summary.style.textAlign = "center";  // Centering summary
}

// Targeting the state when add skill button is clicked
addSkillButton.addEventListener("click", function createSkills(event: Event) {
    const skill = document.createElement("input") as HTMLInputElement;
    skill.type = "text";
    skill.name = "skill";
    skill.id = "skill";
    skill.style.width = "200px";
    skill.style.height = "40px";
    skill.style.border = "1px solid black";
    skillsContainer.appendChild(skill);
});

// Targeting the state when add hobbie button is clicked
addHobbieButton.addEventListener("click", function createHobbie(event: Event) {
    const hobbie = document.createElement("input") as HTMLInputElement;
    hobbie.type = "text";
    hobbie.name = "hobbie";  // Changed to "hobbie" to match its purpose
    hobbie.id = "hobbie";    // Changed to "hobbie" to match its purpose
    hobbie.style.width = "200px";
    hobbie.style.height = "40px";
    hobbie.style.border = "1px solid black";
    hobbiesContainer.appendChild(hobbie);
});
