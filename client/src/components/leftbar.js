import React from "react";
import { useNavigate } from "react-router-dom";
import {HomeSvg, LeaderboardSvg, MoreOptionsSvg, MoreSvg, ProfileSvg } from "./svgs";

const Leftbar = () => {

  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate('/lawquest/profile')
  }
  const handleLeaderboardClick = () => {
    navigate('/lawquest/leaderboard')
  }
  const handleHomeClick = () => {
    navigate('/lawquest')
  }
  const handleMoreClick = () => {
    navigate('/lawquest/more')
  }

  return (
    <div className="flex md:flex-col gap-3">
      <div onClick={handleHomeClick}  style={{ cursor: "pointer" }} className="flex lg:flex-col border-blue-500 border-2 rounded-2xl bg-blue-100">
        <div className="flex items-center py-1 md:py-2 px-1 md:px-2 gap-3">
          <HomeSvg />
          <h1 className="text-sm font-bold hidden lg:block text-blue-400">
            LEARN
          </h1>
        </div>
      </div>
      <div onClick={handleLeaderboardClick}  style={{ cursor: "pointer" }} className="flex lg:flex-col  border-2 rounded-2xl bg-blue-100">
        <div className="flex items-center py-1 md:py-2 px-1 md:px-2 gap-3">
          <LeaderboardSvg />
          <h1 className="text-sm font-bold hidden lg:block text-blue-400">
            LEADERBOARD
          </h1>
        </div>
      </div>
      <div onClick={handleProfileClick}  style={{ cursor: "pointer" }} className="flex lg:flex-col  border-2 rounded-2xl bg-blue-100">
        <div className="flex items-center py-1 md:py-2 px-1 md:px-2 gap-3">
          <ProfileSvg />
          <h1 className="text-sm font-bold hidden lg:block text-blue-400">
            PROFILE
          </h1>
        </div>
      </div>
      <div onClick={handleMoreClick}  style={{ cursor: "pointer" }} className="flex lg:flex-col  border-2 rounded-2xl bg-blue-100">
        <div className="flex items-center py-1 md:py-2 px-1 md:px-2 gap-3">
          <MoreSvg />
          <h1 className="text-sm font-bold hidden lg:block text-blue-400">
            MORE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
