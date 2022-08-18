export type Subject = string;

export interface Teacher {
    ci: string;
    firstName: string;
    lastName: string;
    subjects?: Subject[];
}

export type Route = {
    name: string;
    path: string;
}