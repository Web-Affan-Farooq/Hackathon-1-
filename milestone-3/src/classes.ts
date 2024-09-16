// ____Education class ____
export class Education {
    educationTitle: string;
    educationSummary: string;
    educationTimestamp: string;

    constructor(educationTitle: string, educationSummary: string, educationTimestamp: string) {
        this.educationTitle = educationTitle;
        this.educationSummary = educationSummary;
        this.educationTimestamp = educationTimestamp;
    }
}

// ______Experience class ______

export class Experience {
    jobTitle: string;
    experienceSummary: string;
    experienceTimestamp: string;

    constructor(jobTitle: string, experienceSummary: string, experienceTimestamp: string) {
        this.jobTitle = jobTitle;
        this.experienceSummary = experienceSummary;
        this.experienceTimestamp = experienceTimestamp;
    }
}

