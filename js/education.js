//____ targeting the state when add education button clicked

let addEducationButton = document.querySelector(".add-education");

addEducationButton.addEventListener("click", function show(event) {
    document.querySelector(".remaining-fields").style.display = "flex";
    let educationTitle = document.createElement("input");  //____ creating form input for educationtitle
    educationTitle.type = "text";// input type text
    educationTitle.placeholder = "Enter education title";// input placeholder text
    educationTitle.id = "education-title";// ____ unique input id
    educationTitle.required = true;// ____attached validations
    educationTitle.className = "input-1";

    let educationSummary = document.createElement("textarea");//____ creating form input for educationsummary
    educationSummary.id = "education-summary";//____ assigning unique id
    educationSummary.placeholder = "Enter summary within 30 lines";//____ input placeholder text
    educationSummary.required = true;// ____attached validations
    educationSummary.className = "text-1";

    let timestamp = document.createElement("input");//____ creating form input for education timestamps
    timestamp.type = "text";// input type text
    timestamp.placeholder = "Enter timestamp you've been there";// input placeholder text
    timestamp.id = "time-stamp-education";// ____ unique input id
    timestamp.required = true;// ____attached validations
    timestamp.className = "input-1";

    //_____ appending all created elements
    document.querySelector(".remaining-fields").appendChild(educationTitle);
    document.querySelector(".remaining-fields").appendChild(educationSummary);
    document.querySelector(".remaining-fields").appendChild(timestamp);
});
