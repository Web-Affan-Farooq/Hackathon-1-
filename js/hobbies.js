let addHobbiesButton = document.querySelector(".add-hobbies");

//____ capturing state when addhobbiesButton is clicked _____

addHobbiesButton.addEventListener("click", function createHobbies(event) {
    document.querySelector(".remaining-fields").style.display = "flex";
    let hobbie = document.createElement("input");//____ creating form input for hobbie
    hobbie.type = "text";// input type text
    hobbie.id = "hobbie";// ____ unique input id
    hobbie.placeholder = "Enter hobbie";// input placeholder text
    hobbie.required = true;// ____attached validations
    hobbie.className = "input-1";

    //_____ appending all created elements
    document.querySelector(".remaining-fields").appendChild(hobbie);
});