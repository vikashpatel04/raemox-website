/**
 * Team member types and interfaces
 */

export interface TeamMember {
    id: string
    name: string
    role: string
    avatar: string
    profileUrl?: string  // Default link when clicking on avatar
    bio?: string
    social?: {
        twitter?: string
        linkedin?: string
        github?: string
    }
}
