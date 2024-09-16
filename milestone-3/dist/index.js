//_____Importing modules_____
import { educationTitles, educationSummaries, educationTimestamps, jobTitles, experienceSummaries, experienceTimestamps, educations, experiences, skills, hobbies, info } from "./lists.js";
import { Experience, Education } from "./classes.js";
let form = document.querySelector(".main-form"); //___ selecting form
document.querySelector(".fill-form")?.addEventListener("click", function showForm(event) {
    if (form) {
        form.style.display = "flex"; //____ changing visibility
    }
    document.querySelector(".head").style.display = "none"; //____ hiding head section
    //____ targeting the element and rendering the content
});
let userInfo = null;
let previewButton = document.querySelector(".preview"); //___selecting preview button____
previewButton?.addEventListener("click", function createCv(event) {
    //_____ bundling educations______
    let educationTitleInput = document.querySelectorAll("#education-title");
    let educationSummaryInput = document.querySelectorAll("#education-summary");
    let educationTimestampInput = document.querySelectorAll("#time-stamp-education");
    educationTitleInput.forEach(educationTitle => {
        educationTitles.push(educationTitle.value);
    });
    educationSummaryInput.forEach(educationSummary => {
        educationSummaries.push(educationSummary.value);
    });
    educationTimestampInput.forEach(timestamp => {
        educationTimestamps.push(timestamp.value);
    });
    if (educationTitles.length === educationSummaries.length && educationSummaries.length === educationTimestamps.length) {
        for (let i = 0; i < educationTitles.length; i++) {
            let education = new Education(educationTitles[i], educationSummaries[i], educationTimestamps[i]);
            educations.push(education);
        }
    }
    else {
        alert("Please enter educations thoroughly");
    }
    //_____ bundling experience______
    let jobTitleInput = document.querySelectorAll("#job-title");
    let experienceSummaryInput = document.querySelectorAll("#experience-summary");
    let experienceTimestampsInput = document.querySelectorAll("#time-stamp-experience");
    jobTitleInput.forEach(jobTitle => {
        jobTitles.push(jobTitle.value);
    });
    experienceSummaryInput.forEach(summary => {
        experienceSummaries.push(summary.value);
    });
    experienceTimestampsInput.forEach(timestamp => {
        experienceTimestamps.push(timestamp.value);
    });
    if (jobTitles.length === experienceSummaries.length && experienceSummaries.length === experienceTimestamps.length) {
        for (let i = 0; i < jobTitles.length; i++) {
            let experience = new Experience(jobTitles[i], experienceSummaries[i], experienceTimestamps[i]);
            experiences.push(experience);
        }
    }
    else {
        alert("Please enter experiences thoroughly");
    }
    //_____ bundling skills______
    let skillsInput = document.querySelectorAll("#skill");
    skillsInput.forEach(skill => {
        skills.push(skill.value);
    });
    //_____ bundling hobbies______
    let hobbiesInput = document.querySelectorAll("#hobbie");
    hobbiesInput.forEach(hobbie => {
        hobbies.push(hobbie.value);
    });
    //____Finally bundling user info____
    userInfo = {
        userName: document.querySelector("#firstname").value + " " + document.querySelector("#lastname").value,
        age: document.querySelector("#age").value,
        fatherName: document.querySelector("#father-name").value,
        email: document.querySelector("#email").value,
        phoneNumber: document.querySelector("#phonenumber").value,
        address: document.querySelector("#address").value,
        profileHeadline: document.querySelector("#headline").value,
        professionalSummary: document.querySelector("#professional-summary").value,
    };
    info.push(userInfo);
    if (skills.length < 5) {
        alert("At least 5 skills are required. Please add relevant skills.");
    }
    if (hobbies.length < 3) {
        alert("At least 3 hobbies are required. Please add suitable hobbies.");
    }
    //____ selecting destination of data;
    let name = document.querySelector(".name");
    let age = document.querySelector(".age");
    let email = document.querySelector(".email");
    let phoneNumber = document.querySelector(".phonenumber");
    let address = document.querySelector(".address");
    let fatherName = document.querySelector(".fathername");
    let educationsSection = document.querySelector(".educations");
    let experienceSection = document.querySelector(".experience");
    let skillsList = document.querySelector(".skills-list");
    let hobbiesList = document.querySelector(".hobbies-list");
    if (userInfo) {
        name.innerHTML = userInfo.userName;
        age.innerHTML = userInfo.age;
        email.innerHTML = userInfo.email;
        phoneNumber.innerHTML = userInfo.phoneNumber;
        address.innerHTML = userInfo.address;
        fatherName.innerHTML = userInfo.fatherName;
    }
    educations.forEach((education) => {
        educationsSection.innerHTML += `
        <h2>${education.educationTitle}</h2>
        <p>${education.educationSummary}</p>
        <p><em>${education.educationTimestamp}</em></p>`;
    });
    experiences.forEach((experience) => {
        experienceSection.innerHTML += `
        <h2>${experience.jobTitle}</h2>
        <p>${experience.experienceSummary}</p>
        <p><em>${experience.experienceTimestamp}</em></p>`;
    });
    skills.forEach((skill) => {
        let newOption = document.createElement("li");
        newOption.innerText = skill;
        skillsList?.appendChild(newOption);
    });
    hobbies.forEach((hobbie) => {
        let newOption = document.createElement("li");
        newOption.innerText = hobbie;
        hobbiesList?.appendChild(newOption);
    });
    document.querySelector(".preview-results").style.display = "block"; // showing results as sections
    //____ resetting input fields
    document.querySelectorAll("input").forEach((input) => {
        input.value = "";
    });
    document.querySelectorAll("textarea").forEach((textArea) => {
        textArea.value = "";
    });
});
let createCvButton = document.querySelector(".create-cv");
createCvButton?.addEventListener("click", function createCV(event) {
    document.querySelector(".preview-results").style.display = "none"; // hiding preview field
    form.style.display = "none"; // hiding form fields
    document.querySelector(".resume").style.display = "block"; // showing resume fields
    //____Selecting required fields in main resume
    let names = [document.querySelector(".user-name"), document.querySelector(".name-append")];
    let headline = document.querySelector(".headline");
    let summary = document.querySelector(".summary");
    let age = document.querySelector(".age-append");
    let email = document.querySelector(".email-append");
    let phoneNumber = document.querySelector(".phonenumber-append");
    let address = document.querySelector(".address-append");
    let fatherName = document.querySelector(".fathername-append");
    let educationSection = document.querySelector("#section-3");
    let experienceSection = document.querySelector("#section-4");
    let skillsList = document.querySelector(".skills-list-append");
    let hobbiesList = document.querySelector(".hobbies-list-append");
    if (userInfo) {
        names.forEach((name) => {
            name.innerHTML = userInfo.userName;
        });
        headline.innerHTML = userInfo.profileHeadline;
        summary.innerHTML = userInfo.professionalSummary;
        age.innerHTML = userInfo.age;
        email.innerHTML = userInfo.email;
        phoneNumber.innerHTML = userInfo.phoneNumber;
        address.innerHTML = userInfo.address;
        fatherName.innerHTML = userInfo.fatherName;
    }
    educations.forEach((education) => {
        educationSection.innerHTML += `
        <h2>${education.educationTitle}</h2>
        <p>${education.educationSummary}</p>
        <p><em>${education.educationTimestamp}</em></p>`;
    });
    experiences.forEach((experience) => {
        experienceSection.innerHTML += `
        <h2>${experience.jobTitle}</h2>
        <p>${experience.experienceSummary}</p>
        <p><em>${experience.experienceTimestamp}</em></p>`;
    });
    skills.forEach((skill) => {
        let newOption = document.createElement("li");
        newOption.innerText = skill;
        skillsList?.appendChild(newOption);
    });
    hobbies.forEach((hobbie) => {
        let newOption = document.createElement("li");
        newOption.innerText = hobbie;
        hobbiesList?.appendChild(newOption);
    });
});
