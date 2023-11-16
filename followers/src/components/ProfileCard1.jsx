import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

export default function ProfileCard1() {
  return (
    <div className="flex gap-y-8 flex-col md:flex-row justify-center md:justify-between items-center pt-[25px]">
      <div>
        <Link to="/">
          <img src="/Logo.png" alt="" srcset="" />
        </Link>
      </div>
      <div className="n1 gap-x-[20px]">
        <Link   to={`${process.env.REACT_APP_REAL_CLIENT_URL}/#contact`}>
          <p className="font-fcl">Contact</p>{" "}
        </Link>
        <Profile />
      </div>
    </div>
  );
}
