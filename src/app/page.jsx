import Image from "next/image";
import Navbar from "./components/Navbar";
import HomepageFeed from "./components/HompageFeed";
export default function Home() {
  return (
    <>
      <div className="container relative h-screen">
        <div className="static bottom-0 w-1/3">
          <Navbar />
        </div>
        <div className="fixed top-12">
          <HomepageFeed />
        </div>
      </div>
    </>
  );
}
