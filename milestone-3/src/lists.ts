// Type definitions for the arrays
interface Education {
    educationTitle: string;
    educationSummary: string;
    educationTimestamp: string;
}

interface Experience {
    jobTitle: string;
    experienceSummary: string;
    experienceTimestamp: string;
}

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

// Data arrays
let info: UserInfo[] = []; // array containing user information
let educationTitles: string[] = [];  // list containing education titles
let educationSummaries: string[] = []; // list containing education summaries
let educationTimestamps: string[] = []; // list containing education timestamps
let educations: Education[] = [];  // list containing all educational records

let jobTitles: string[] = []; // list containing job titles
let experienceSummaries: string[] = []; // list containing experience summaries
let experienceTimestamps: string[] = []; // list containing experience timestamps
let experiences: Experience[] = []; // list containing all previous job records

let skills: string[] = []; // list containing skills
let hobbies: string[] = []; // list containing hobbies

export {
    // exporting information to be rendered
    info,
    educations,
    experiences,
    skills,
    hobbies,

    // exporting supporting lists
    educationTitles,
    educationSummaries,
    educationTimestamps,

    jobTitles,
    experienceSummaries,
    experienceTimestamps,
};
