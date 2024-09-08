// let createCv = document.querySelector(".create-cv");

// const createFunction = (event) => {
//     document.querySelector(".section-home").style.display = "none";
//     // document.querySelector(".section-form").style.display = "block";
// }
// createCv.addEventListener("click",createFunction);

let addEducation = document.querySelector(".add-education");
function createEducation(event) {
    let fromDate = document.createElement("input");
    fromDate.type = "text";
    fromDate.id = "educationStart1";
    fromDate.placeholder = "from";


    let toDate = document.createElement("input");
    toDate.type = "text";
    toDate.id = "educationEnd1";
    toDate.placeholder = "to";


    let educationTitle = document.createElement("input");
    educationTitle.type = 'text';
    educationTitle.placeholder = "Enter education title ie. phd";
    educationTitle.id = "education";

    let educationDescription = document.createElement("textarea");
    educationDescription.placeholder = "Enter description i.e learning fullstack development";
    educationDescription.id = "education-description1";

    document.querySelector(".add-to-profile").appendChild(educationTitle);
    document.querySelector(".add-to-profile").appendChild(fromDate);
    document.querySelector(".add-to-profile").appendChild(toDate);
    document.querySelector(".add-to-profile").appendChild(educationDescription);
    document.querySelector(".add-to-profile").appendChild(document.createElement("hr"));

}
addEducation.addEventListener("click", createEducation)


let addExperience = document.querySelector(".add-experience");

function createExperience(event) {
    let fromDate = document.createElement("input");
    fromDate.type = "text";
    fromDate.id = "date";
    fromDate.placeholder = "from";


    let toDate = document.createElement("input");
    toDate.type = "text";
    toDate.id = "date";
    toDate.placeholder = "to";


    let experienceTitle = document.createElement("input");
    experienceTitle.type = 'text';
    experienceTitle.placeholder = "Enter job title";
    experienceTitle.id = "experience";

    let experienceDescription = document.createElement("textarea");
    experienceDescription.placeholder = "Enter description i.e learning fullstack development";
    experienceDescription.id = "experience-description";

    document.querySelector(".add-to-profile").appendChild(experienceTitle);
    document.querySelector(".add-to-profile").appendChild(fromDate);
    document.querySelector(".add-to-profile").appendChild(toDate);
    document.querySelector(".add-to-profile").appendChild(experienceDescription);
    document.querySelector(".add-to-profile").appendChild(document.createElement("hr"));
}
addExperience.addEventListener("click", createExperience);

let addSkills = document.querySelector(".add-skill");

function createSkills(event) {
    let skill = document.createElement("input");
    skill.id = "skills";
    skill.placeholder = "Enter skill";
    document.querySelector(".add-to-profile").appendChild(skill);
    document.querySelector(".add-to-profile").appendChild(document.createElement("hr"));
}
addSkills.addEventListener("click", createSkills);

let addHobbies = document.querySelector(".add-hobbies");

function createHobbies(event) {
    let hobbie = document.createElement("input");
    hobbie.id = "skills";
    hobbie.placeholder = "Enter hobbie";
    document.querySelector(".add-to-profile").appendChild(hobbie);
    document.querySelector(".add-to-profile").appendChild(document.createElement("hr"));
}
addHobbies.addEventListener("click", createHobbies);

// console.log(document.querySelector(".add-to-profile"));


let createCv = document.querySelector(".create-cv");

class createEducation {
    constructor(educationTitle,educationStartDate,educationEndDate,educationDescription) {
        this.educationTitle = educationTitle;
        this.educationStartDate = educationStartDate;
        this.educationEndDate = educationEndDate;
        this.educationDescription = educationDescription;
    }
}

function letsCreateCv(event) {
    let object = {
        firstname:document.querySelector("#firstname").value,
        lastname:document.querySelector("#lastname").value,
        email:document.querySelector("#email").value,
        linkedin:document.querySelector("#linkedin").value,
        phonenumber:document.querySelector("#phonenumber").value,
        address:document.querySelector("#address").value,
        education1: new createEducation (document.querySelector("#education"),document.querySelector("#educationStart1"),document.querySelector("#educationEnd1"),document.querySelector("#education-description1")),
    }
    console.log(object);
    
}
createCv.addEventListener("click", letsCreateCv);