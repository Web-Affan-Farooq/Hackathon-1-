"use strict";
const createYourOwnButton = document.querySelector(".create-button"); // selecting create button
const welcomeSection = document.querySelector(".welcome"); //selecting welcome section
const cvFormSection = document.querySelector(".create-cv-section");
const addSkillsButton = document.querySelector(".add-skills-button");
const resume = document.querySelector(".resume");
let downloadCVButton = document.querySelector(".cv-download-button");
// ______________________targeting event on create your own button and hiding welcome interface ______
createYourOwnButton?.addEventListener("click", function show_1(e) {
    if (cvFormSection && welcomeSection) {
        cvFormSection.style.display = "flex";
        welcomeSection.style.display = "none";
    } // hidding welcoming interface
});
// _____________________________feeding function use to feed data in required fields ______________
const feedCV = (name, email, phonenumber, headline, addressParam, educations, experiences, skills, professionalSummary, imageFile) => {
    let userNameDiv = document.querySelector(".user-name");
    let userNameDiv_2 = document.querySelector(".name");
    let emailDiv = document.querySelector(".email");
    let phoneNumber = document.querySelector(".phonenumber");
    let address = document.querySelector(".address");
    let headlineField = document.querySelector(".headline");
    let summaryField = document.querySelector(".summary");
    let profileImageField = document.querySelector(".user-profile");
    let educationSection = document.querySelector(".section-3");
    let experienceSection = document.querySelector(".section-4");
    let skillsSection = document.querySelector(".skills-list");
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && e.target.result) {
                profileImageField.src = e.target.result;
            }
        };
        reader.readAsDataURL(imageFile);
    }
    // __________initializing fields where all data should be displayed_________
    userNameDiv.innerText = "";
    userNameDiv_2.innerText = "";
    emailDiv.innerText = "";
    phoneNumber.innerText = "";
    address.innerText = "";
    headlineField.innerText = "";
    summaryField.innerText = "";
    educationSection.innerHTML = "";
    experienceSection.innerHTML = "";
    skillsSection.innerHTML = "";
    let educationContent = "";
    let experienceContent = "";
    let skillsContent = "";
    //__________feeding data__________
    userNameDiv.innerText = name;
    userNameDiv_2.innerText = name;
    emailDiv.innerText = email;
    phoneNumber.innerText = phonenumber;
    address.innerText = addressParam;
    headlineField.innerText = headline;
    summaryField.innerText = professionalSummary;
    educations.forEach((education) => {
        const educationContent = `
        <br>
        <h2>${education.educationTitle}</h2>
        <br>
                <div><p>${education.educationDescription}</p></div>
                <br>
                <p><em>${education.educationTimeLine}</em></p>
                <br>
                `;
        educationSection.innerHTML += educationContent;
    });
    experiences.forEach((experience) => {
        const experienceContent = `<br>
        <h2>${experience.jobTitle}</h2>
        <br>
                <div><p>${experience.jobDescription}</p></div>
                <br>
                <p><em>${experience.jobTimeLine}</em></p>
                <br>
                `;
        experienceSection.innerHTML += experienceContent;
    });
    skills.forEach((skill) => {
        const skillsContent = `<li class="skill">${skill}</li>`;
        skillsSection.innerHTML += skillsContent;
    });
};
//________________________________targeting event on add skills button_________________
addSkillsButton?.addEventListener("click", function handleSkills(e) {
    let skill = document.createElement("input");
    skill.type = "text";
    skill.placeholder = "Enter your skill";
    skill.required = true;
    skill.id = "skill";
    skill.name = "skill";
    skill.className = "input-1";
    //apending created input to container
    document.querySelector(".skills-form")?.appendChild(skill);
});
const form = document.querySelector(".create-cv-form"); //_________selecting form_________
//__________________________ targeting submit event on form ______________________
form?.addEventListener("submit", function handleForm(e) {
    e.preventDefault();
    let userName = document.getElementsByName("userName")[0];
    let email = document.getElementsByName("userEmail")[0];
    let phoneNumber = document.getElementsByName("phoneNumber")[0];
    let profileHeadline = document.getElementsByName("profileHeadline")[0];
    let professionalSummary = document.getElementsByName("professionalSummary")[0];
    let linkedIn = document.getElementsByName("linkedIn")[0];
    let address = document.getElementsByName("address")[0];
    let educationTitle_1 = document.getElementsByName("educationTitle")[0];
    let educationTimelines_1 = document.getElementsByName("educationTimeline")[0];
    let educationDescription_1 = document.getElementsByName("educationDescription")[0];
    let educationTitle_2 = document.getElementsByName("educationTitle")[1];
    let educationTimelines_2 = document.getElementsByName("educationTimeline")[1];
    let educationDescription_2 = document.getElementsByName("educationDescription")[1];
    let jobTitle_1 = document.getElementsByName("jobTitle")[0];
    let jobTimelines_1 = document.getElementsByName("jobTimeline")[0];
    let jobDescription_1 = document.getElementsByName("jobDescription")[0];
    let jobTitle_2 = document.getElementsByName("jobTitle")[1];
    let jobTimelines_2 = document.getElementsByName("jobTimeline")[1];
    let jobDescription_2 = document.getElementsByName("jobDescription")[1];
    let skills = document.querySelectorAll("#skill");
    let profileImage = document.getElementsByName("person")[0];
    const education_1 = {
        educationTitle: educationTitle_1.value,
        educationTimeLine: educationTimelines_1.value,
        educationDescription: educationDescription_1.value,
    };
    const education_2 = {
        educationTitle: educationTitle_2.value,
        educationTimeLine: educationTimelines_2.value,
        educationDescription: educationDescription_2.value,
    };
    const experience_1 = {
        jobTitle: jobTitle_1.value,
        jobTimeLine: jobTimelines_1.value,
        jobDescription: jobDescription_1.value,
    };
    const experience_2 = {
        jobTitle: jobTitle_2.value,
        jobTimeLine: jobTimelines_2.value,
        jobDescription: jobDescription_2.value,
    };
    console.log(userName.value);
    console.log(email.value);
    console.log(phoneNumber.value);
    console.log(linkedIn.value);
    console.log(profileHeadline.value);
    console.log(professionalSummary.value);
    console.log("Address is ", address.value);
    console.log(education_1);
    console.log(education_2);
    console.log(experience_1);
    console.log(experience_2);
    if (profileImage.files) {
        console.log(profileImage.files[0]);
    }
    let skillsList = [];
    skills.forEach((skill) => {
        skillsList.push(skill.value);
    });
    if (cvFormSection && resume && skills.length >= 5) {
        cvFormSection.style.display = "none";
        resume.style.display = "block";
        feedCV(userName.value, email.value, phoneNumber.value, profileHeadline.value, address.value, [education_1, education_2], [experience_1, experience_2], skillsList, professionalSummary.value, profileImage.files ? profileImage.files[0] : "" // __________validate check for images
        );
    }
    else {
        alert("Please enter atleast 5 skills");
    }
});
// ____________________targeting click event on download cv button __________
downloadCVButton?.addEventListener("click", function downloadContent(e) {
    if (downloadCVButton) {
        downloadCVButton.style.display = "none";
        window.print();
        window.close();
    }
});
