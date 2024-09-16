let addHobbiesButton = document.querySelector(".add-hobbies") as HTMLButtonElement;

//____ capturing state when addHobbiesButton is clicked _____
addHobbiesButton.addEventListener("click", function createHobbies(event: Event): void {
    const remainingFields = document.querySelector(".remaining-fields") as HTMLElement;
    remainingFields.style.display = "flex";

    //____ creating form input for hobbie
    const hobbie = document.createElement("input") as HTMLInputElement;
    hobbie.type = "text"; // input type text
    hobbie.id = "hobbie"; // ____ unique input id
    hobbie.placeholder = "Enter hobbie"; // input placeholder text
    hobbie.required = true; // ____attached validations
    hobbie.className = "input-1";

    //_____ appending all created elements
    remainingFields.appendChild(hobbie);
});
