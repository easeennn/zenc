import Image from "next/image";
import type { ArtKind, ProjectImage } from "@/lib/projects";
import { ConceptArt } from "./ConceptArt";

interface Props {
  art: ArtKind;
  variant?: 0 | 1 | 2;
  image?: ProjectImage;
  /** Responsive `sizes` hint for real images. */
  sizes?: string;
  priority?: boolean;
  /** Decorative by default — the surrounding link/heading names the project. */
  alt?: string;
}

/**
 * Renders the project's real image when one exists, otherwise the designed
 * concept artwork. Never a broken image, always a reserved shape.
 */
export function ProjectMedia({ art, variant = 0, image, sizes = "(min-width: 1024px) 50vw, 100vw", priority, alt }: Props) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt || alt || ""}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className="media-img"
      />
    );
  }
  return <ConceptArt kind={art} variant={variant} />;
}
