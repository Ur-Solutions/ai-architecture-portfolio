import type { SanityDocument } from "@sanity/client";

export interface PortfolioEntry extends SanityDocument {
  name: string;
  imageUrl: string;
}
