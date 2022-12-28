import { type NextPage } from "next";
import Head from "next/head";
import { FrontPagePortfolioGrid } from "../components/FrontPagePortfolioGrid";
import { Sidebar } from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="gap-8bg-cream flex p-8 md:flex-col lg:flex-row">
        <Sidebar />
        <FrontPagePortfolioGrid />
      </main>
    </>
  );
};

export default Home;
