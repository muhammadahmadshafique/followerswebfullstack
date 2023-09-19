import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard1 from "../components/ProfileCard1";
import { useNavigate } from "react-router-dom";

function Buyfollowers() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("002-instagram.svg");



  const onclicks = (item) => {
    setSelected(item);
  };

  const handleselectedplateform = () => {
    if (selected === "001-facebook.svg") {
      localStorage.setItem("selectedplateform", "facebook");
      return navigate("/Buyfollowers2");
    } else if (selected === "002-instagram.svg") {
      localStorage.setItem("selectedplateform", "instagram");
      return navigate("/Buyfollowers2");
    } else if (selected === "003-twitter.svg") {
      localStorage.setItem("selectedplateform", "twitter");
      return navigate("/Buyfollowers2");
    } else if (selected === "youtube.png") {
      localStorage.setItem("selectedplateform", "youtube");
      return navigate("/Buyfollowers2");
    } else if (selected === "008-tik tok.svg") {
      localStorage.setItem("selectedplateform", "tiktok");
      return navigate("/Buyfollowers2");
    } else if (selected === "010-telegram.svg") {
      localStorage.setItem("selectedplateform", "telegram");
      return navigate("/Buyfollowers2");
    } else if (selected === "013-spotify.svg") {
      localStorage.setItem("selectedplateform", "spotify");
      return navigate("/Buyfollowers2");
    }
  };

  return (
    <div className="bg-[#F7F7F7] h-fit">
      <div className="md:mx-[72px] mx-[12px]">
        <ProfileCard1 />
        <div className="mt-[65px] md:mt-[105px]">
          <div className="followers">
            <Link to="/buy">
              <p className="text-[#1B1633] tracking-[1px] mb-[32px] text-center font-fcr text-[28px] font-[700]">
                Buy Followers
              </p>
            </Link>
            <p className="text-[#1B1633] tracking-[1px] text-center font-fct opacity-80 text-[18px] font-[500]">
              Select a service
            </p>
            <div className="flex flex-wrap gap-y-16 justify-center items-center gap-x-[50px] my-[80px]">
              {[
                "001-facebook.svg",
                "002-instagram.svg",
                "003-twitter.svg",
                "youtube.png",
                "008-tik tok.svg",
                "010-telegram.svg",
                "013-spotify.svg",
              ].map((item) => (
                <div
                  onClick={() => onclicks(item)}
                  className={`smallone p-4 ${
                    selected === item ? "border  border-orange-500" : ""
                  }`}
                >
                  <img
                    className="w-[45px] hover:scale-110 h-[45px] object-contain"
                    src={`/${item}`}
                    alt=""
                    srcset=""
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-x-3 justify-between items-center">
              <Link to='/buy'>
              <button className="navbutton1 text-white font-fcl  md:text-[18px]">
                Cancel
              </button>
              </Link>
                <button onClick={()=>handleselectedplateform()} className="navbutton2 text-white font-fcl  md:text-[18px]">
                  Next
                </button>
            </div>
          </div>
        </div>
        <div className="mt-[12px] md:mt-[102px]">
          <hr
            style={{ background: "rgba(105, 120, 131, 0.16)" }}
            class="mx-[72px] h-px my-8  border-0 dark:bg-gray-700"
          />
          <p className="text-[#1B1633] text-center pb-[40px] font-fcl text-[14px] font-[300]">
            All rights reserved @followerstudio.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Buyfollowers;
