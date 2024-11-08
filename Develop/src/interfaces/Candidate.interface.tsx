// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly avatar_url: string | null;
    readonly login: string | null;
    readonly location: string | null;
    readonly email: string | null;
    readonly company: string | null;
    readonly html_url: string | null;
}