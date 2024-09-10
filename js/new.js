let userInfo = {
    userName : document.querySelector("#firstname").value +" "+ document.querySelector("#lastname").value,
    age:document.querySelector("#age").value,
    fatherName:document.querySelector("#father-name").value,
    email:  document.querySelector("#email").value,
    phoneNumber:document.querySelector("#phonenumber").value,
    address:document.querySelector("#address").value,
}

let addEducationButton = document.querySelector(".add-education");
let addexperienceButton = document.querySelector(".add-experience");
let addSkillsButton = document.querySelector(".add-skills");
let addHobbiesButton = document.querySelector(".add-hobbies");
let createCvButton = document.querySelector(".create-cv");

// console.log(addEducationButton);
// console.log(addHobbiesButton);
// console.log(addSkillsButton);
// console.log(addexperienceButton);
// console.log(createCvButton);


let educations = [];
let experiences = [];
let skills = [];
let hobbies = [];


addEducationButton.addEventListener("click", function show(event) {

    let educationTitle = document.createElement("input");
    educationTitle.type = "text";
    educationTitle.placeholder = "Enter education title";
    educationTitle.id = "education-title";
    educationTitle.required = true;

    let educationSummary = document.createElement("textarea");
    educationSummary.id = "education-summary";
    educationSummary.placeholder = "Enter summary within 30 lines";
    educationSummary.required = true;

    let timestamp = document.createElement("input");
    timestamp.type = "text";
    timestamp.placeholder = "Enter timestamp you've been there";
    timestamp.id = "time-stamp";
    timestamp.required = true;

    document.querySelector(".remaining-fields").appendChild(educationTitle);
    document.querySelector(".remaining-fields").appendChild(educationSummary);
    document.querySelector(".remaining-fields").appendChild(timestamp);
    

});




addexperienceButton.addEventListener("click", function createExperience(event) {

    let jobTitle = document.createElement("input");
    jobTitle.type = "text";
    jobTitle.placeholder = "Enter job title";
    jobTitle.id = "job-title";
    jobTitle.required = true;

    let experienceSummary = document.createElement("textarea");
    experienceSummary.id = "experience-summary";
    experienceSummary.placeholder = "Enter summary within 30 lines";
    experienceSummary.required = true;

    let timestamp = document.createElement("input");
    timestamp.type = "text";
    timestamp.placeholder = "Enter timestamp you've been there";
    timestamp.id = "time-stamp";
    timestamp.required = true;

    document.querySelector(".remaining-fields").appendChild(jobTitle);
    document.querySelector(".remaining-fields").appendChild(experienceSummary);
    document.querySelector(".remaining-fields").appendChild(timestamp);


});


addSkillsButton.addEventListener("click", function createSkills(event) {
    
        let skill = document.createElement("input");
        skill.type = "text";
        skill.id = "skill";
        skill.placeholder = "enter skill";
        skill.required = true;
        document.querySelector(".remaining-fields").appendChild(skill);
});


addHobbiesButton.addEventListener("click", function createHobbies(event) {
    let hobbie = document.createElement("input");
    hobbie.type = "text";
    hobbie.id = "hobbie";
    hobbie.placeholder = "enter skill";
    hobbie.required = true;
    document.querySelector(".remaining-fields").appendChild(hobbie);
});



createCvButton.addEventListener("click", function show(e) {
     //_____ bundling education______


    class Education {
        constructor(educationTitle,educationSummary,timestamp) {
            this.educationTitle = educationTitle;
            this.educationSummary = educationSummary;
            this.timestamp = timestamp;
        }
    } // ------------------------------  problems occur while acccessing the values
        educations.push(
            new Education(
                document.querySelector("#education-title").value,
                document.querySelector("#education-summary").value,
                document.querySelector("#time-stamp").value
            )
        );
    educations.forEach(education => {
        console.log(education);
    });


      //_____ bundling education______


    class Experience {
        constructor(jobTitle,experienceSummary,timestamp) {
            this.jobTitle = jobTitle;
            this.experienceSummary = experienceSummary;
            this.timestamp = timestamp;
        }
    }// ------------------------------  problems occur while acccessing the values
    experiences.push(
        new Experience(
            document.querySelector("#job-title").value,
            document.querySelector("#experience-summary").value,
            document.querySelector("#time-stamp").value
        )
    );
    experiences.forEach(experience => {
        console.log(experience);
    });


          //_____ bundling skills______

     skills.push(document.querySelector("#skill").value);
     skills.forEach(skill => {
        console.log(skill);
     })
     


          //_____ bundling hobbies______

     hobbies.push(document.querySelector("#hobbie").value);
     hobbies.forEach(hobbie => {
        console.log(hobbie);
     });

     console.log(`Education: ${educations.length}`);
     console.log(`Experiences: ${experiences.length}`);
     console.log(`Skills: ${skills.length}`);
     console.log(`Hobbies: ${hobbies.length}`);     
});