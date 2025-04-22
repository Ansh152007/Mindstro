import React from "react";

const HompageFeed = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen ">
      <ul className="flex flex-col items-center justify-center w-screen">
        <li className="flex flex-col items-center justify-center overflow-y-auto">
          <div className="w-screen flex justify-between items-center">
            <div className="flex justify-center items-center gap-1 ml-1">
              <img
                className="w-10 rounded-full"
                src="Mindstro_logo.png"
                alt=""
              />
              <div>
                <p className="font-bold leading-3">Mindstro</p>
                <p className="text-xs">12h ago</p>
              </div>
            </div>
            <div>
              <img className="w-7 mr-1" src="morepost.svg" alt="" />
            </div>
          </div>
          <div className="w-screen h-48">
            <img className="w-screen" src="Promotion_image.png" alt="" />
          </div>
          <div className="mt-4">
            <h3 className="font-bold ml-2">Introducing Mindstro: Where Time Meets value</h3>
            <p className="ml-2">Earn while you learn. Limit while you chill...</p>
            <div className="flex justify-between items-center w-screen">
              <div className="flex gap-2 ml-2 mt-1">
                <img className="w-6" src="favorite.svg" alt="" />
                <img className="w-6" src="comment.svg" alt="" />
                <img className="w-6" src="forward.svg" alt="" />
              </div>
              <img className="mr-2" src="save.svg" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HompageFeed;
