import type { TeamMember } from "./types"

// Import team data from content folder using Vite's JSON import
const teamData = import.meta.glob<TeamMember[]>("/content/team.json", {
    eager: true,
    import: "default"
})

const teamMembers: TeamMember[] = Object.values(teamData)[0] ?? []

/**
 * Get a single team member by ID
 */
export function getTeamMember(id: string): TeamMember | undefined {
    return teamMembers.find(member => member.id === id)
}

/**
 * Get multiple team members by their IDs
 * Returns members in the order of the provided IDs
 */
export function getTeamMembers(ids: string[]): TeamMember[] {
    return ids
        .map(id => getTeamMember(id))
        .filter((member): member is TeamMember => member !== undefined)
}

/**
 * Get all team members
 */
export function getAllTeamMembers(): TeamMember[] {
    return [...teamMembers]
}

/**
 * Default fallback member when author is not found
 */
export function getDefaultMember(): TeamMember {
    return {
        id: "unknown",
        name: "RaeMox Team",
        role: "Team Member",
        avatar: "/team/default.jpg"
    }
}

export type { TeamMember } from "./types"
