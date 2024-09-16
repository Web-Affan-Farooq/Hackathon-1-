let addExperienceButton = document.querySelector(".add-experience") as HTMLButtonElement;

//____ targeting the state when add experience button clicked
addExperienceButton.addEventListener("click", function createExperience(event: Event): void {
    const remainingFields = document.querySelector(".remaining-fields") as HTMLElement;
    remainingFields.style.display = "flex";

    //____ creating form input for jobTitle
    const jobTitle = document.createElement("input") as HTMLInputElement;
    jobTitle.type = "text"; // input type text
    jobTitle.placeholder = "Enter job title"; // input placeholder text
    jobTitle.id = "job-title"; // ____ unique input id
    jobTitle.required = true; // ____attached validations
    jobTitle.className = "input-1";

    //____ creating form input for experienceSummary
    const experienceSummary = document.createElement("textarea") as HTMLTextAreaElement;
    experienceSummary.id = "experience-summary"; // ____ unique input id
    experienceSummary.placeholder = "Enter summary within 30 lines"; // input placeholder text
    experienceSummary.required = true; // ____attached validations
    experienceSummary.className = "text-1";

    //____ creating form input for experience timestamp
    const timestamp = document.createElement("input") as HTMLInputElement;
    timestamp.type = "text"; // input type text
    timestamp.placeholder = "Enter timestamp you've been there"; // input placeholder text
    timestamp.id = "time-stamp-experience"; // ____ unique input id
    timestamp.required = true; // ____attached validations
    timestamp.className = "input-1";

    //_____ appending all created elements
    remainingFields.appendChild(jobTitle);
    remainingFields.appendChild(experienceSummary);
    remainingFields.appendChild(timestamp);
});
