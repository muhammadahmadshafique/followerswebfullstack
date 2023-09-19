import axios from "axios";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";

function Forgot() {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const forgot = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email == null) {
      toast.error("Email is required to send email", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CLIENT_URL}/auth/resetpassword`,
        {
          email,
        }
      );
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    }}
    return (
      <div className="bgim">
        <div className="md:mx-[72px] mx-[12px]">
          <div className="flex gap-y-4 md:gap-y-8 flex-col md:flex-row justify-center md:justify-between items-center pt-[25px]">
            <div>
              <Link to="/">
                <img src="/Logo.svg" alt="" srcset="" />
              </Link>
            </div>
            <div className="">
              <Link to="/">
                <p className="font-fcl">Contact</p>{" "}
              </Link>
            </div>
          </div>
          <div className="flex justify-end my-[65px] md:my-[115px] items-center">
            <div className="rounded-[24px] p-[32px] w-[600px] bg-[#FFF]">
              <div className="space-y-[4px]">
                <p className="text-[#1B1633] tracking-[0.64px] text-center w-full font-fcr text-[28px] font-[700]">
                  Forget Password
                </p>
                <div className="py-[80px]">
                  <p className="text-[#1B1633] text-center tracking-[0.4px] py-[12px] fcl text-[18px]">
                    Enter your Email to get a rest password link.{" "}
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Email to get a rest password link. "
                    required
                  />
                </div>

                <div className="flex gap-x-4 justify-between pt-[40px] items-center">
                  <Link to='/'>
                  <button className="navbutton12 h-fit text-white font-fcl  text-[18px]">
                    Cancel
                  </button>
                  </Link>
                  <button disabled={loading} onClick={(e)=>forgot(e)} className="navbutton22 h-fit text-white font-fcl  text-[18px]">
                    {loading ? <Spinner /> : "Send Email"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[12px] py-12 md:mt-[12px]">
          <hr
            style={{ background: "rgba(105, 120, 131, 0.16)" }}
            class="mx-[72px] h-px my-8  border-0 dark:bg-gray-700"
          />
          <p className="text-[#1B1633] text-center font-fcl text-[14px] font-[300]">
            All rights reserved @followerstudio.com
          </p>
        </div>
      </div>
    );
  };


export default Forgot;
