export interface Subject {
    name: string;
}

export interface Teacher {
    ci: string;
    firstName: string;
    lastName: string;
    subjects: Subject[];
}