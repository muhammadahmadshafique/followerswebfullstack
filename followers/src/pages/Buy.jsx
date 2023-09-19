import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard1 from "../components/ProfileCard1";

function Buy() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#F7F7F7] h-fit">
      <div className="md:mx-[72px] mx-[12px]">

        <ProfileCard1/>
        
        <div className="flex flex-col mt-[26px] md:mt-[96px] justify-center md:mx-[80] lg:mx-[280px] items-center gap-y-[32px]">
          <p className="text-[#1B1633] tracking-[1px] text-center font-fcr text-[32px] md:text-[42px] font-[700]">
            Get Ready to Rock <br className="hidden md:block" /> Social Media!
          </p>
          <p className="text-[#1B1633] tracking-[1px] md:text-center font-fct opacity-80 text-[18px] font-[300]">
            Lorem ipsum dolor sit amet consectetur. Malesuada porttitor ac
            gravida consequat eleifend bibendum fusce. Purus cursus pretium elit
            nibh cursus consectetur amet nibh ut. Cursus lorem justo molestie
            enim aliquam id. Fringilla eget eu ut venenatis mus in nunc arcu
            aliquam. Elementum nisl elit neque elementum ultrices tempor tortor.
          </p>
          <Link to="/Buyfollowers">
            <button className="navbutton text-white font-fcl  text-[16px]">
              Buy Followers
            </button>
          </Link>
        </div>
        <div className="mt-[12px]  pt-[70px] md:mt-[102px]">
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

export default Buy;
