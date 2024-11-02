// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    readonly avatar: string | null;
    readonly username: string | null;
    readonly location: string | null;
    readonly email: string | null;
    readonly company: string | null;
    readonly html_url: string | null;
}