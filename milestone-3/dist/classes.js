// ____Education class ____
export class Education {
    educationTitle;
    educationSummary;
    educationTimestamp;
    constructor(educationTitle, educationSummary, educationTimestamp) {
        this.educationTitle = educationTitle;
        this.educationSummary = educationSummary;
        this.educationTimestamp = educationTimestamp;
    }
}
// ______Experience class ______
export class Experience {
    jobTitle;
    experienceSummary;
    experienceTimestamp;
    constructor(jobTitle, experienceSummary, experienceTimestamp) {
        this.jobTitle = jobTitle;
        this.experienceSummary = experienceSummary;
        this.experienceTimestamp = experienceTimestamp;
    }
}
