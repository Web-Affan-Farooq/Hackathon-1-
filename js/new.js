let form = document.querySelector(".credit-form");
let showFormButton = document.querySelector(".show-form");
showFormButton.addEventListener("click", function showForm(event) {
    form.style.display = "flex";
    document.querySelector(".head").style.display = "none";
});

if(document.querySelector(".remaining-fields").childNodes.length === 0) {
    document.querySelector(".remaining-fields").style.display = "none";
}else {
    document.querySelector(".remaining-fields").style.display = "flex";
}


let addEducationButton = document.querySelector(".add-education");
let addexperienceButton = document.querySelector(".add-experience");
let addSkillsButton = document.querySelector(".add-skills");
let addHobbiesButton = document.querySelector(".add-hobbies");
let createCvButton = document.querySelector(".create-cv");

let educationTitles = [];  // list containing education titles
let educationSummaries = []; // lists containing education summaries
let educationTimestamps = []; // list containing education timestamps

let jobTitles = [];// list containing job titles
let experienceSummaries = []; // lists containing experience summaries
let experienceTimestamps = [];// list containing experience timestamps


let skills = [];// list containing skills
let hobbies = [];// list containing hobbies


//____ targeting the state when add education button clicked

addEducationButton.addEventListener("click", function show(event) {
    document.querySelector(".remaining-fields").style.display = "flex";
    let educationTitle = document.createElement("input");  //____ creating form input for educationtitle
    educationTitle.type = "text";// input type text
    educationTitle.placeholder = "Enter education title";// input placeholder text
    educationTitle.id = "education-title";// ____ unique input id
    educationTitle.required = true;// ____attached validations

    let educationSummary = document.createElement("textarea");//____ creating form input for educationsummary
    educationSummary.id = "education-summary";//____ assigning unique id
    educationSummary.placeholder = "Enter summary within 30 lines";//____ input placeholder text
    educationSummary.required = true;// ____attached validations

    let timestamp = document.createElement("input");//____ creating form input for education timestamps
    timestamp.type = "text";// input type text
    timestamp.placeholder = "Enter timestamp you've been there";// input placeholder text
    timestamp.id = "time-stamp-education";// ____ unique input id
    timestamp.required = true;// ____attached validations

    //_____ appending all created elements
    document.querySelector(".remaining-fields").appendChild(educationTitle);
    document.querySelector(".remaining-fields").appendChild(educationSummary);
    document.querySelector(".remaining-fields").appendChild(timestamp);
});

//____ targeting the state when add experience button clicked

addexperienceButton.addEventListener("click", function createExperience(event) {
    document.querySelector(".remaining-fields").style.display = "flex";
    let jobTitle = document.createElement("input"); //____ creating form input for experiencetitle
    jobTitle.type = "text";// input type text
    jobTitle.placeholder = "Enter job title";// input placeholder text
    jobTitle.id = "job-title";// ____ unique input id
    jobTitle.required = true;// ____attached validations

    let experienceSummary = document.createElement("textarea");//____ creating form input for experienceSummary
    experienceSummary.id = "experience-summary";// ____ unique input id
    experienceSummary.placeholder = "Enter summary within 30 lines";// input placeholder text
    experienceSummary.required = true;// ____attached validations

    let timestamp = document.createElement("input");//____ creating form input for experience timestamp
    timestamp.type = "text";// input type text
    timestamp.placeholder = "Enter timestamp you've been there";// input placeholder text
    timestamp.id = "time-stamp-experience";// ____ unique input id
    timestamp.required = true;// ____attached validations

    //_____ appending all created elements

    document.querySelector(".remaining-fields").appendChild(jobTitle);
    document.querySelector(".remaining-fields").appendChild(experienceSummary);
    document.querySelector(".remaining-fields").appendChild(timestamp);


});


addSkillsButton.addEventListener("click", function createSkills(event) {
    document.querySelector(".remaining-fields").style.display = "flex";
    let skill = document.createElement("input");//____ creating form input for skill
    skill.type = "text";// input type text
    skill.id = "skill";// ____ unique input id
    skill.placeholder = "Enter skill";// input placeholder text
    skill.required = true;// ____attached validations

    //_____ appending all created elements
    document.querySelector(".remaining-fields").appendChild(skill);
});


addHobbiesButton.addEventListener("click", function createHobbies(event) {
    document.querySelector(".remaining-fields").style.display = "flex";
    let hobbie = document.createElement("input");//____ creating form input for hobbie
    hobbie.type = "text";// input type text
    hobbie.id = "hobbie";// ____ unique input id
    hobbie.placeholder = "Enter hobbie";// input placeholder text
    hobbie.required = true;// ____attached validations

    //_____ appending all created elements
    document.querySelector(".remaining-fields").appendChild(hobbie);
});



createCvButton.addEventListener("click", function createCv(event) {

    //_____ bundling educations______

    //____ targeting to required input fields with thier ids
    let educationTitleInput = document.querySelectorAll("#education-title");
    let educationSummaryInput = document.querySelectorAll("#education-summary");
    let educationTimestampInput = document.querySelectorAll("#time-stamp-education");

    //____ push each input value from selected fields to blank array____

    educationTitleInput.forEach(educationTitle => {
        educationTitles.push(educationTitle.value);
    });
    educationSummaryInput.forEach(educationSummary => {
        educationSummaries.push(educationSummary.value);
    });
    educationTimestampInput.forEach(timestamp => {
        educationTimestamps.push(timestamp.value);
    });

    //____ logging progress( test function)____
    console.log(`Total education titles :` + educationTitles.length);
    educationTitles.forEach(title => {
        console.log(title);
    })
    console.log(`Total education summaries :` + educationSummaries.length);
    educationSummaries.forEach(summary => {
        console.log(summary);
    })
    console.log(`Total education timestamps :` + educationTimestamps.length);
    educationTimestamps.forEach(time => {
        console.log(time);
    })

    //_____ bundling experience______

    //____ targeting to required input fields with specific unique ids

    let jobTitleInput = document.querySelectorAll("#job-title");
    let experienceSummaryInput = document.querySelectorAll("#experience-summary");
    let experienceTimestampsInput = document.querySelectorAll("#time-stamp-experience");

    //____ push each input value from selected fields to blank array____

    jobTitleInput.forEach(jobTitle => {
        jobTitles.push(jobTitle.value);
    });
    experienceSummaryInput.forEach(summary => {
        experienceSummaries.push(summary.value);
    });
    experienceTimestampsInput.forEach(timestamp => {
        experienceTimestamps.push(timestamp.value);
    });

    //____ logging progress( test function)____

    console.log(`Total experiences:` + jobTitles.length);
    jobTitles.forEach(title => {
        console.log(title);
    })
    console.log(`Total exp summaries :` + experienceSummaries.length);
    experienceSummaries.forEach(summary => {
        console.log(summary);
    })
    console.log(`Total exp timestamps :` + experienceTimestamps.length);
    experienceTimestamps.forEach(time => {
        console.log(time);
    })

    //_____ bundling skills______

    let skillsInput = document.querySelectorAll("#skill");
    skillsInput.forEach(skill => {
        skills.push(skill.value);
    })
    console.log(`Total skills:${skills.length}`);


    //_____ bundling hobbies______

    let hobbiesInput = document.querySelectorAll("#hobbie");
    hobbiesInput.forEach(hobbie => {
        hobbies.push(hobbie.value);
    })
    console.log(`Total hobbies:${hobbies.length}`);


    //____Finally _____

    //___ targeting remaining information____

     userInfo = {
        userName: document.querySelector("#firstname").value + " " + document.querySelector("#lastname").value,
        age: document.querySelector("#age").value,
        fatherName: document.querySelector("#father-name").value,
        email: document.querySelector("#email").value,
        phoneNumber: document.querySelector("#phonenumber").value,
        address: document.querySelector("#address").value,
    }

 
    console.log(userInfo); //___loging 

    //____condition validation checks____
    //____ if educations are not valid or any field is empty value then show error on screen
    //____ if experiences are not valid or any field is empty value then show error on screen
    //____ if skills are less than 5
    //____ if hobbies are less than 3

    if (educationTitles.length === educationSummaries.length && educationSummaries.length === educationTimestamps.length && educationTimestamps.length === educationTitles.length) {
        console.log("Education completed");
    } else {
        alert("please resubmit because your experiences are not valid ");
    }

    if (jobTitles.length === experienceSummaries.length && experienceSummaries.length === experienceTimestamps.length && experienceTimestamps.length === jobTitles.length) {
        console.log("Experience completed");
    } else {
        alert("please resubmit because your experiences are not valid ");
    }

    if (skills.length < 5 || skills.length === 0) {
        alert("Atleast 5 skills required. please consider to adding relavant skills");
    } else {
        console.log("Skills completed");
    }

    if (hobbies.length < 3 || hobbies.length === 0) {
        alert("Atleast 3 hobbies required. please consider to adding suitable hobbies");
    } else {
        console.log("hobbies completed");
    }

    form.style.display = "none";
});
