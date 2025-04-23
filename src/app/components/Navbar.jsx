import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <div className="max-md:w-screen fixed top-0 flex items-center justify-center gap-38 pt-1 pb-0.5 bg-white">
        <img
          className="max-sm:w-32"
          src="Mindstro_transparent_logo.png"
          alt=""
        />
        <div className="flex gap-2 items-center justify-center">
          <span>
            <img className="max-sm:w-7" src="search.svg" alt="" />
          </span>
          <span>
            <img className="max-sm:w-7" src="notifications.svg" alt="" />
          </span>
        </div>
      </div>

      <nav className="fixed bottom-0">
        <ul className="flex max-md:w-screen max-sm:gap-6 max-md:justify-center max-md:items-center bg-white py-1">
          <li className="flex gap-4 items-center justify-center">
            <Link href="/">
              <img className="max-sm:w-7" src="home.svg" alt="" />
              <span className="max-md:hidden">Home</span>
            </Link>
          </li>

          <li className="flex gap-4 items-center justify-center">
            <Link href="/explore">
              <img className="max-sm:w-7" src="explore.svg" alt="" />
              <span className="max-md:hidden">Explore</span>
            </Link>
          </li>

          <li className="flex gap-4 items-center justify-center">
            <Link href="/messages">
              <img className="max-sm:w-7" src="message.svg" alt="" />
              <span className="max-md:hidden">Messages</span>
            </Link>
          </li>

          <li className="flex gap-4 items-center justify-center">
            <Link href="/pulse/mind">
              <img className="max-sm:w-7" src="pulse.svg" alt="" />
              <span className="max-md:hidden">Pulse</span>
            </Link>
          </li>

          <li className="flex gap-4 items-center justify-center max-md:hidden">
            <Link href="/notifications">
              <img className="max-sm:w-7" src="notifications.svg" alt="" />
              <span className="">Notifications</span>
            </Link>
          </li>

          <li className="flex gap-4 items-center justify-center">
            <Link href="/communities">
              <img className="max-sm:w-7" src="community.svg" alt="" />
              <span className="max-md:hidden">Communities</span>
            </Link>
          </li>

          <li className="flex gap-4 items-center justify-center">
            <Link href="/post">
              <img className="max-sm:w-7" src="Upload.svg" alt="" />
              <span className="max-md:hidden">Post</span>
            </Link>
          </li>

          <li className="flex gap-4 items-center justify-center">
            <Link href="/post">
              <img className="max-sm:w-7 rounded-full" src="profile.svg" alt="" />
              <span className="max-md:hidden">Post</span>
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
