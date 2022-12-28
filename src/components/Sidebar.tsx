import Image from "next/image";
import sidebarTopImage from "../assets/sidebarTopImage.png";

export function Sidebar() {
  return (
    <aside id="sidebar" className="w-[462px] p-8">
      <section id="top-sidebar">
        <Image src={sidebarTopImage} alt="sidebar top image" />
      </section>
      <section id="personal-info" className="flex flex-col gap-8 p-10 pt-16">
        <h1 className="font-display text-2xl font-normal tracking-[.15em] text-brand-200">
          Tormod Haugland
        </h1>
        <p id="bio" className="text-sm leading-7 text-brand-500">
          Welcome to the portfolio of Tormod Haugland, a talented and innovative
          architect born in 1991. With a strong passion for design and a keen
          eye for detail, Tormod has been creating beautiful and functional
          spaces for his clients for over a decade. <br />
          <br />
          Tormod's work is defined by his commitment to sustainability and his
          ability to blend modern and traditional elements to create unique and
          timeless designs.
        </p>
      </section>
    </aside>
  );
}
