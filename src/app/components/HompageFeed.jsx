import React from "react";

const HompageFeed = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen ">
      <ul className="flex flex-col items-center justify-center w-screen">
        <li className="flex flex-col items-center justify-center overflow-y-auto">
          <div className="w-screen h-48 bg-gray-500">
            <img className="w-screen" src="Promotion_image.png" alt="" />
          </div>
          <h3>Introducing Mindstro: Where Time Meets Value</h3>
          <p>Earn while you learn. Limit while you chill...</p>
          <div className="flex justify-between items-center w-screen">
            <div className="flex gap-2 ml-2">
              <img className="w0" src="favorite.svg" alt="" />
              <img src="comment.svg" alt="" />
              <img src="forward.svg" alt="" />
            </div>
            <img className="mr-2" src="save.svg" alt="" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HompageFeed;
