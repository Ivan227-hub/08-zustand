import type { Metadata } from "next";
import Notes from "./Notes.client";

interface PageProps {
  params: {
    slug?: string[];
  };
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const slug = params.slug?.[0] ?? "all";

  const title = `Filtered notes: ${slug}`;
  const description = `Notes filtered by ${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://your-domain.com/notes/filter/${slug}`,
      images: [
        {
          url: "https://your-domain.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "Notes preview",
        },
      ],
    },
  };
}

export default function FilterNotesPage({ params }: PageProps) {
  const tag = params.slug?.[0] ?? "all";

  return <Notes tag={tag} />;
}
