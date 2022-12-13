export interface EventI{
    name: string,
    date: string,
    repeat: false,
    members: string[],
    questions: Questions[],
    portalManager: string | null
}

export interface Questions{
    header: string,
    answer: string
}