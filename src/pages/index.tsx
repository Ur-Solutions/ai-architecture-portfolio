import { type NextPage } from "next";
import Head from "next/head";
import { FrontPagePortfolioGrid } from "../components/FrontPagePortfolioGrid";
import { Sidebar } from "../components/Sidebar";
import type { PortfolioEntry } from "../types/sanity";
import { sanityClient } from "../utils/sanity";

interface HomeProps {
  portfolioEntries: PortfolioEntry[];
}

const Home: NextPage<HomeProps> = ({ portfolioEntries }) => {
  return (
    <>
      <Head>
        <title>
          Tormod Haugland Architecture - Sustainability and Innovation in Design
        </title>
        <meta
          name="description"
          content="Discover the impressive portfolio of Tormod Haugland, an award-winning architect known for his commitment to sustainability and ability to blend modern and traditional elements in his designs. From residential and commercial buildings to public spaces and cultural institutions, Tormod creates functional and beautiful spaces that meet the specific needs and desires of his clients. Explore his work and learn more about his passion for design."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="box-border flex flex-col gap-8 p-8 sm:w-full lg:flex-row">
        <Sidebar />
        <FrontPagePortfolioGrid portfolioEntries={portfolioEntries} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const portfolioEntries = await sanityClient.fetch(
    `*[_type == 'portfolioEntry']{
      name,
      "imageUrl": image.asset->url 
    }`
  );

  return {
    props: {
      portfolioEntries,
    },
  };
}

export default Home;
