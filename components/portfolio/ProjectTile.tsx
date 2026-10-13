import Link from "next/link";
import type { ProjectCardData } from "@/lib/projects";
import { categoryLabel } from "@/lib/projects";
import { ProjectMedia } from "@/components/media/ProjectMedia";
import { Arrow } from "@/components/ui/Arrow";
import { cn } from "@/lib/utils";

interface Props {
  project: ProjectCardData;
  /** Visual proportion of the media area. */
  ratio?: "wide" | "tall" | "square" | "cinema";
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * One portfolio tile = one link. Hover and keyboard focus both reveal the
 * "View" affordance, so nothing is hover-only.
 */
export function ProjectTile({ project, ratio = "wide", sizes, priority, className }: Props) {
  return (
    <article className={cn("tile", `tile--${ratio}`, className)}>
      <Link href={`/work/${project.slug}`} className="tile__link">
        <div className="tile__media">
          <div className="tile__zoom">
            <ProjectMedia art={project.art} image={project.image} sizes={sizes} priority={priority} />
          </div>
          <span className="tile__badge">{project.status}</span>
          <span className="tile__go" aria-hidden="true">
            <span>View</span>
            <Arrow direction="up-right" />
          </span>
        </div>
        <div className="tile__meta">
          <span className="tile__num">{project.number}</span>
          <div>
            <h3 className="tile__title">{project.title}</h3>
            <p className="tile__sub">
              {categoryLabel(project.category)} <i aria-hidden="true">/</i> {project.type}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
