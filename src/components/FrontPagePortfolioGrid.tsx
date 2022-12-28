import Image from "next/image";

import type { PortfolioEntry } from "../types/sanity";

export function FrontPagePortfolioGrid({
  portfolioEntries,
}: {
  portfolioEntries: PortfolioEntry[];
}) {
  return (
    <section
      id="portfolio"
      className="grid flex-1 grid-flow-row grid-cols-1 gap-8 overflow-visible pb-16 md:grid-cols-2 md:pl-8 lg:ml-[462px] lg:grid-cols-3"
    >
      {portfolioEntries.map((entry) => (
        <div key={entry.id} className="group">
          <Image
            src={entry.imageUrl}
            alt={entry.name}
            width={460}
            height="0"
            className="h-[460px] object-cover group-hover:brightness-75"
          />
          <p className="pt-4 text-xs text-brand-200">{entry.name}</p>
        </div>
      ))}
    </section>
  );
}
