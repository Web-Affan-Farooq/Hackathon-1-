let addexperienceButton = document.querySelector(".add-experience");

//____ targeting the state when add experience button clicked

addexperienceButton.addEventListener("click", function createExperience(event) {
    document.querySelector(".remaining-fields").style.display = "flex";
    let jobTitle = document.createElement("input"); //____ creating form input for experiencetitle
    jobTitle.type = "text";// input type text
    jobTitle.placeholder = "Enter job title";// input placeholder text
    jobTitle.id = "job-title";// ____ unique input id
    jobTitle.required = true;// ____attached validations
    jobTitle.className = "input-1";

    let experienceSummary = document.createElement("textarea");//____ creating form input for experienceSummary
    experienceSummary.id = "experience-summary";// ____ unique input id
    experienceSummary.placeholder = "Enter summary within 30 lines";// input placeholder text
    experienceSummary.required = true;// ____attached validations
    experienceSummary.className = "text-1";

    let timestamp = document.createElement("input");//____ creating form input for experience timestamp
    timestamp.type = "text";// input type text
    timestamp.placeholder = "Enter timestamp you've been there";// input placeholder text
    timestamp.id = "time-stamp-experience";// ____ unique input id
    timestamp.required = true;// ____attached validations
    timestamp.className = "input-1";

    //_____ appending all created elements

    document.querySelector(".remaining-fields").appendChild(jobTitle);
    document.querySelector(".remaining-fields").appendChild(experienceSummary);
    document.querySelector(".remaining-fields").appendChild(timestamp);
});