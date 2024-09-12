let form = document.querySelector(".main-form"); //___ selecting form

document.querySelector(".fill-form").addEventListener("click", function showForm(event) {
    form.style.display = "flex"; //____ changing visibility
    document.querySelector(".head").style.display = "none";  //____ hidding head section

    //____ targeting the element and rendering the content

});


let userInfo;

let previewButton = document.querySelector(".preview");  //___selecting preview button____

previewButton.addEventListener("click", function createCv(event) {

    //_____ bundling educations______

    //____ targeting to required input fields with thier unique id's
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
    });
    console.log(`Total education summaries :` + educationSummaries.length);
    educationSummaries.forEach(summary => {
        console.log(summary);
    });
    console.log(`Total education timestamps :` + educationTimestamps.length);
    educationTimestamps.forEach(time => {
        console.log(time);
    });

    if(educationTitles.length === educationSummaries.length && educationSummaries.length === educationTimestamps.length && educationTimestamps.length === educationTitles.length){
        for(let i=0; i<educationTitles.length && i<educationSummaries.length && i<educationTimestamps.length; i++) {
            let education = new Education(
                educationTitles[i],
                educationSummaries[i],
                educationTimestamps[i],
            );
            educations.push(education);
        }
    }else {
        alert("Please enter educations thoroughly");
    }

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
    });

    //____checking required conditions
    if(jobTitles.length === experienceSummaries.length && experienceSummaries.length === experienceTimestamps.length && experienceTimestamps.length === jobTitles.length) {
        for(let i=0; i< jobTitles.length && i<experienceSummaries.length && i< experienceTimestamps.length; i++) {
            let experience = new Experience(
                jobTitles[i],
                experienceSummaries[i],
                experienceTimestamps[i],
            );
            console.log(experience);
            experiences.push(experience);
        }
        console.log(experiences);
    }else {
        alert("Please enter experiences thoroughly");
    }
    //_____ bundling skills______

    let skillsInput = document.querySelectorAll("#skill");
    skillsInput.forEach(skill => {
        skills.push(skill.value);
    });

    console.log(`Total skills:${skills.length}`);

    skills.forEach((skill) => {
        console.log(skill);
    });


    //_____ bundling hobbies______

    let hobbiesInput = document.querySelectorAll("#hobbie");
    hobbiesInput.forEach(hobbie => {
        hobbies.push(hobbie.value);
    });

    console.log(`Total hobbies:${hobbies.length}`);

    hobbies.forEach((hobbie) => {
        console.log(hobbie);
    })

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

 
    //console.log(userInfo); //___loging 

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

    //____ selecting destination of data;
    
    let name = document.querySelector(".name");
    let age = document.querySelector(".age");
    let email = document.querySelector(".email");
    let phonenumber = document.querySelector(".phonenumber");
    let address = document.querySelector(".address");
    let fathername = document.querySelector(".fathername");
    let educationsSection = document.querySelector(".educations");
    let experienceSection = document.querySelector(".experience");
    let skillsList = document.querySelector(".skills-list");
    let hobbiesList = document.querySelector(".hobbies-list");
    console.log(experienceSection);
    
    name.innerHTML += userInfo.userName;

    age.innerHTML +=userInfo.age;

    email.innerHTML += userInfo.email;

    phonenumber.innerHTML +=userInfo.phoneNumber;

    address.innerHTML += userInfo.address;

    fathername.innerHTML +=userInfo.fatherName;

    //____ create appending content into html page
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
    })
    
    skills.forEach((skill) => {
        skillsList.innerHTML += `<li>${skill}</li>`;
    })

    hobbies.forEach((hobbie) => {
        hobbiesList.innerHTML += `<li>${hobbie}</li>`;
    })
    document.querySelector(".preview-results").style.display = "block";    // showing results as sections

    //____ initializing all input fields

    document.querySelectorAll("input").forEach((input) => {
        input.value = "";
    });
    document.querySelectorAll("textarea").forEach((textArea) => {
        textArea.value = "";
    });

});

let createCvButton = document.querySelector(".create-cv");

createCvButton.addEventListener("click" , function createCV(event) {
    document.querySelector(".preview-results").style.display = "none"; // hidding preview field
    form.style.display = "none";  //hidding form fields
    document.querySelector(".resume").style.display = "block";  // showing form fields

    let name = document.querySelector(".user-name");
    let headline = document.querySelector(".headline");
    let summary = document.querySelector(".summary");
    let age = document.querySelector(".age");
    let email = document.querySelector(".email");
    let phoneNumber = document.querySelector(".phonenumber");
    let address = document.querySelector(".address");
    let fatherName = document.querySelector(".fathername");
});