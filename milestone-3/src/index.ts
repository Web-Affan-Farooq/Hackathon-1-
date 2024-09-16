//_____Importing modules_____

import { educationTitles, educationSummaries, educationTimestamps, jobTitles, experienceSummaries, experienceTimestamps, educations, experiences, skills, hobbies, info } from "./lists.js";
import { Experience, Education } from "./classes.js";

// Type definitions
interface UserInfo {
    userName: string;
    age: string;
    fatherName: string;
    email: string;
    phoneNumber: string;
    address: string;
    profileHeadline: string;
    professionalSummary: string;
}

let form = document.querySelector<HTMLFormElement>(".main-form"); //___ selecting form

document.querySelector<HTMLButtonElement>(".fill-form")?.addEventListener("click", function showForm(event: Event) {
    if (form) {
        form.style.display = "flex"; //____ changing visibility
    }
    document.querySelector<HTMLElement>(".head")!.style.display = "none";  //____ hiding head section
    //____ targeting the element and rendering the content
});


let userInfo: UserInfo | null = null;
let previewButton = document.querySelector<HTMLButtonElement>(".preview");  //___selecting preview button____

previewButton?.addEventListener("click", function createCv(event: Event) {

    //_____ bundling educations______
    let educationTitleInput = document.querySelectorAll<HTMLInputElement>("#education-title");
    let educationSummaryInput = document.querySelectorAll<HTMLInputElement>("#education-summary");
    let educationTimestampInput = document.querySelectorAll<HTMLInputElement>("#time-stamp-education");

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
            let education = new Education(
                educationTitles[i],
                educationSummaries[i],
                educationTimestamps[i],
            );
            educations.push(education);
        }
    } else {
        alert("Please enter educations thoroughly");
    }

    //_____ bundling experience______

    let jobTitleInput = document.querySelectorAll<HTMLInputElement>("#job-title");
    let experienceSummaryInput = document.querySelectorAll<HTMLInputElement>("#experience-summary");
    let experienceTimestampsInput = document.querySelectorAll<HTMLInputElement>("#time-stamp-experience");

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
            let experience = new Experience(
                jobTitles[i],
                experienceSummaries[i],
                experienceTimestamps[i],
            );
            experiences.push(experience);
        }
    } else {
        alert("Please enter experiences thoroughly");
    }

    //_____ bundling skills______

    let skillsInput = document.querySelectorAll<HTMLInputElement>("#skill");
    skillsInput.forEach(skill => {
        skills.push(skill.value);
    });

    //_____ bundling hobbies______

    let hobbiesInput = document.querySelectorAll<HTMLInputElement>("#hobbie");
    hobbiesInput.forEach(hobbie => {
        hobbies.push(hobbie.value);
    });

    //____Finally bundling user info____
    userInfo = {
        userName: document.querySelector<HTMLInputElement>("#firstname")!.value + " " + document.querySelector<HTMLInputElement>("#lastname")!.value,
        age: document.querySelector<HTMLInputElement>("#age")!.value,
        fatherName: document.querySelector<HTMLInputElement>("#father-name")!.value,
        email: document.querySelector<HTMLInputElement>("#email")!.value,
        phoneNumber: document.querySelector<HTMLInputElement>("#phonenumber")!.value,
        address: document.querySelector<HTMLInputElement>("#address")!.value,
        profileHeadline: document.querySelector<HTMLInputElement>("#headline")!.value,
        professionalSummary: document.querySelector<HTMLTextAreaElement>("#professional-summary")!.value,
    };
    info.push(userInfo);

    if (skills.length < 5) {
        alert("At least 5 skills are required. Please add relevant skills.");
    }

    if (hobbies.length < 3) {
        alert("At least 3 hobbies are required. Please add suitable hobbies.");
    }

    //____ selecting destination of data;

    let name = document.querySelector<HTMLElement>(".name");
    let age = document.querySelector<HTMLElement>(".age");
    let email = document.querySelector<HTMLElement>(".email");
    let phoneNumber = document.querySelector<HTMLElement>(".phonenumber");
    let address = document.querySelector<HTMLElement>(".address");
    let fatherName = document.querySelector<HTMLElement>(".fathername");
    let educationsSection = document.querySelector<HTMLElement>(".educations");
    let experienceSection = document.querySelector<HTMLElement>(".experience");
    let skillsList = document.querySelector<HTMLUListElement>(".skills-list");
    let hobbiesList = document.querySelector<HTMLUListElement>(".hobbies-list");

    if (userInfo) {
        name!.innerHTML = userInfo.userName;
        age!.innerHTML = userInfo.age;
        email!.innerHTML = userInfo.email;
        phoneNumber!.innerHTML = userInfo.phoneNumber;
        address!.innerHTML = userInfo.address;
        fatherName!.innerHTML = userInfo.fatherName;
    }

    educations.forEach((education:any) => {
        educationsSection!.innerHTML += `
        <h2>${education.educationTitle}</h2>
        <p>${education.educationSummary}</p>
        <p><em>${education.educationTimestamp}</em></p>`;
    });

    experiences.forEach((experience:any) => {
        experienceSection!.innerHTML += `
        <h2>${experience.jobTitle}</h2>
        <p>${experience.experienceSummary}</p>
        <p><em>${experience.experienceTimestamp}</em></p>`;
    });

    skills.forEach((skill:any) => {
        let newOption = document.createElement("li");
        newOption.innerText = skill;
        skillsList?.appendChild(newOption);
    });

    hobbies.forEach((hobbie:any) => {
        let newOption = document.createElement("li");
        newOption.innerText = hobbie;
        hobbiesList?.appendChild(newOption);
    });

    document.querySelector<HTMLElement>(".preview-results")!.style.display = "block";    // showing results as sections

    //____ resetting input fields

    document.querySelectorAll<HTMLInputElement>("input").forEach((input) => {
        input.value = "";
    });
    document.querySelectorAll<HTMLTextAreaElement>("textarea").forEach((textArea) => {
        textArea.value = "";
    });
});

let createCvButton = document.querySelector<HTMLButtonElement>(".create-cv");

createCvButton?.addEventListener("click", function createCV(event: Event) {
    document.querySelector<HTMLElement>(".preview-results")!.style.display = "none"; // hiding preview field
    form!.style.display = "none";  // hiding form fields
    document.querySelector<HTMLElement>(".resume")!.style.display = "block";  // showing resume fields

    //____Selecting required fields in main resume
    let names = [document.querySelector<HTMLElement>(".user-name"), document.querySelector<HTMLElement>(".name-append")];
    let headline = document.querySelector<HTMLElement>(".headline");
    let summary = document.querySelector<HTMLElement>(".summary");
    let age = document.querySelector<HTMLElement>(".age-append");
    let email = document.querySelector<HTMLElement>(".email-append");
    let phoneNumber = document.querySelector<HTMLElement>(".phonenumber-append");
    let address = document.querySelector<HTMLElement>(".address-append");
    let fatherName = document.querySelector<HTMLElement>(".fathername-append");

    let educationSection = document.querySelector<HTMLElement>("#section-3");
    let experienceSection = document.querySelector<HTMLElement>("#section-4");
    let skillsList = document.querySelector<HTMLUListElement>(".skills-list-append");
    let hobbiesList = document.querySelector<HTMLUListElement>(".hobbies-list-append");

    if (userInfo) {
        names.forEach((name) => {
            name!.innerHTML = userInfo!.userName;
        });

        headline!.innerHTML = userInfo!.profileHeadline;
        summary!.innerHTML = userInfo!.professionalSummary;
        age!.innerHTML = userInfo!.age;
        email!.innerHTML = userInfo!.email;
        phoneNumber!.innerHTML = userInfo!.phoneNumber;
        address!.innerHTML = userInfo!.address;
        fatherName!.innerHTML = userInfo!.fatherName;
    }

    educations.forEach((education:any) => {
        educationSection!.innerHTML += `
        <h2>${education.educationTitle}</h2>
        <p>${education.educationSummary}</p>
        <p><em>${education.educationTimestamp}</em></p>`;
    });

    experiences.forEach((experience:any) => {
        experienceSection!.innerHTML += `
        <h2>${experience.jobTitle}</h2>
        <p>${experience.experienceSummary}</p>
        <p><em>${experience.experienceTimestamp}</em></p>`;
    });

    skills.forEach((skill:any) => {
        let newOption = document.createElement("li");
        newOption.innerText = skill;
        skillsList?.appendChild(newOption);
    });

    hobbies.forEach((hobbie:any) => {
        let newOption = document.createElement("li");
        newOption.innerText = hobbie;
        hobbiesList?.appendChild(newOption);
    });
});
