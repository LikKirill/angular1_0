export interface EventI{
    name:string,
    date:string,
    repeat:boolean,
    members:string[],
    questions:string[],
    portalManager:string | null
}