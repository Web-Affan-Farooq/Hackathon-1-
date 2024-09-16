//____ targeting the state when add education button clicked
let addEducationButton = document.querySelector(".add-education") as HTMLButtonElement;

addEducationButton.addEventListener("click", function show(event: Event): void {
    const remainingFields = document.querySelector(".remaining-fields") as HTMLElement;
    remainingFields.style.display = "flex";

    //____ creating form input for educationTitle
    const educationTitle = document.createElement("input") as HTMLInputElement;
    educationTitle.type = "text"; // input type text
    educationTitle.placeholder = "Enter education title"; // input placeholder text
    educationTitle.id = "education-title"; // ____ unique input id
    educationTitle.required = true; // ____attached validations
    educationTitle.className = "input-1";

    //____ creating form input for educationSummary
    const educationSummary = document.createElement("textarea") as HTMLTextAreaElement;
    educationSummary.id = "education-summary"; //____ assigning unique id
    educationSummary.placeholder = "Enter summary within 30 lines"; //____ input placeholder text
    educationSummary.required = true; // ____attached validations
    educationSummary.className = "text-1";

    //____ creating form input for education timestamps
    const timestamp = document.createElement("input") as HTMLInputElement;
    timestamp.type = "text"; // input type text
    timestamp.placeholder = "Enter timestamp you've been there"; // input placeholder text
    timestamp.id = "time-stamp-education"; // ____ unique input id
    timestamp.required = true; // ____attached validations
    timestamp.className = "input-1";

    //_____ appending all created elements
    remainingFields.appendChild(educationTitle);
    remainingFields.appendChild(educationSummary);
    remainingFields.appendChild(timestamp);
});
