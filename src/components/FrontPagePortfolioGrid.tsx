import Image from "next/image";

import portfolio1 from "../assets/portfolio/portfolio1.jpg";
import portfolio2 from "../assets/portfolio/portfolio2.jpg";
import portfolio3 from "../assets/portfolio/portfolio3.jpg";

export const portfolioEntries = [
  {
    id: 1,
    name: "Holmenkollen 47a",
    image: portfolio1,
  },
  {
    id: 2,
    name: "Miami Residential Funkis",
    image: portfolio2,
  },
  {
    id: 3,
    name: "Kragerø Waterfront Cabins",
    image: portfolio3,
  },
  {
    id: 4,
    name: "Holmenkollen 47a",
    image: portfolio1,
  },
  {
    id: 5,
    name: "Miami Residential Funkis",
    image: portfolio2,
  },
  {
    id: 6,
    name: "Kragerø Waterfront Cabins",
    image: portfolio3,
  },
  {
    id: 7,
    name: "Holmenkollen 47a",
    image: portfolio1,
  },
  {
    id: 8,
    name: "Miami Residential Funkis",
    image: portfolio2,
  },
  {
    id: 9,
    name: "Kragerø Waterfront Cabins",
    image: portfolio3,
  },
];

export function FrontPagePortfolioGrid() {
  return (
    <section
      id="portfolio"
      className="grid flex-1 grid-flow-row grid-cols-1 gap-8 pl-8 pb-16 md:grid-cols-2 lg:ml-[462px] lg:grid-cols-3"
    >
      {portfolioEntries.map((entry) => (
        <div key={entry.id} className="group w-full">
          <Image
            src={entry.image}
            alt={entry.name}
            className="h-[460px] object-cover group-hover:brightness-75"
          />
          <p className="pt-4 text-xs text-brand-200">{entry.name}</p>
        </div>
      ))}
    </section>
  );
}
