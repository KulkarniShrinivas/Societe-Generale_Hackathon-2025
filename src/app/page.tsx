import Image from "next/image";
import Main from "./_components/main";
import AboutUs from "./_components/AboutUs/AboutUs";
import CardList from "./_components/card-list";
import RangeOfServices from "./_components/range-of-services";
import HowToBook from "./_components/how-to-book";

export default function Home() {
  return (
    <div className="home">
    <Main />
    <AboutUs />
    <CardList />
    <RangeOfServices />
    <HowToBook />
  </div>
  );
}
