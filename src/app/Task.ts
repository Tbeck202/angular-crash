
// An interface is essentially like defining a class or a model for an object
// In this case, we're defining what each Task should look like
export interface Task {
    // The "?" next to the attribute name makes the attr optional
    // id seems like it should be required, but that validation will be handled elsewhere
    // It needs to be optional here so we don't get errors when compiling, 
    // since the id won't be created until we save the individual Task into the server
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}