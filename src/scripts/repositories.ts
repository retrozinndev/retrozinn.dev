/* This script gets Github repositories data and contains special types for it */
// This script is not ready to use

export type User = {
    display_name: string,
    name: string,
    url: string
};

export type Organization = {
    display_name: string,
    name: string,
    url: string,
    founder: User,
    members: Array<User>,
    members_count: number
};

export type Repository = {
    name: string,
    description: string,
    developer: (User|Organization),
    committers: Array<User>
};

// Need to finish
export async function fetchRepo(repo: Repository) {
    const response: Response = await fetch("", {
        method: "POST",
        body: JSON.stringify({
            
        }),
    });
}
