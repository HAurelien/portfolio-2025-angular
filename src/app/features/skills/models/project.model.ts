import { Feature } from "./feature.model"
import { Technology } from "./technology.model"

export type Project = {
    name: string,
    categories: string[],
    catchphrase: string,
    description: string,
    features: Feature[],
    technologies: Technology[],
    collapsed: boolean,
    external_link?: string
}