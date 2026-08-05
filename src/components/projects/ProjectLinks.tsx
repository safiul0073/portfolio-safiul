import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { hasValidProjectUrl } from "@/lib/portfolio";
import type { Project } from "@/types";

interface ProjectLinksProps {
    project: Project;
    size?: "sm" | "md";
}

/** Repository / demo / marketplace links, shared by the case study page and the quick view. */
const ProjectLinks = ({ project, size = "md" }: ProjectLinksProps) => (
    <>
        {hasValidProjectUrl(project.github) ? (
            <Button asChild variant="outline" size={size}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    View code
                </a>
            </Button>
        ) : (
            <Button variant="muted" size={size} aria-disabled>
                <Github size={16} />
                Private repository
            </Button>
        )}

        {hasValidProjectUrl(project.live) ? (
            <Button asChild variant="outline" size={size}>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live demo
                </a>
            </Button>
        ) : (
            <Button variant="muted" size={size} aria-disabled>
                <ExternalLink size={16} />
                Demo unavailable
            </Button>
        )}

        {hasValidProjectUrl(project.codecanyon) && (
            <Button asChild variant="outline" size={size}>
                <a href={project.codecanyon} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    CodeCanyon
                </a>
            </Button>
        )}
    </>
);

export default ProjectLinks;
