import Image from "next/image";
import Navbar from "./components/Navbar";
import HomepageFeed from "./components/HompageFeed";
import StoryView from "./components/StoryView";
export default function Home() {
  return (
    <>
      <div className="container relative h-screen">
        <div className="static bottom-0 w-1/3">
          <Navbar />
        </div>
        <div className="fixed top-12">
          <StoryView />
        </div>
        <div className="fixed top-28">
          <HomepageFeed />
        </div>
      </div>
    </>
  );
}
