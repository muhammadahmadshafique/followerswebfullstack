import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

function Change() {
  const { activation_token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState(null);
  const [newpassword, setNewpassword] = useState(null);

  const [loading, setLoading] = useState(false);

  const changepassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password == null || newpassword == null) {
      toast.error("Tous les champs sont requis", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
      return;
    }
    if (password != newpassword) {
      toast.error("Le mot de passe ne correspond pas", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CLIENT_URL}/auth/verifyToken`,
        {
          password,
          activation_token,
        }
      );
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/login");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    }
  };

  return (
    <div className="bgim h-screen">
      <div className="md:mx-[72px] mx-[32px]">
        <div className="flex gap-y-8 flex-col md:flex-row justify-center md:justify-between items-center pt-[25px]">
          <Link to="/">
            {" "}
            <div>
              <img src="/Logo.svg" alt="" srcset="" />
            </div>
          </Link>
          <Link to={`${process.env.REACT_APP_REAL_CLIENT_URL}/#contact`}>
          <div className="">
            <p className="font-fcl">Contact</p>
          </div>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end my-[65px] md:my-[115px] items-center">
          <div className="rounded-[24px] p-[32px] w-[600px] bg-[#FFF]">
            <div className="space-y-[4px]">
              <p className="text-[#1B1633] text-center w-full font-fcr text-[28px] font-[700]">
                Change Password
              </p>
              <div>
                <p className="text-[#1B1633] py-[12px] fcl text-[18px]">
                  Password
                </p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your Email to get a rest password link. "
                  required
                />
              </div>
              <div>
                <p className="text-[#1B1633] py-[12px] fcl text-[18px]">
                  Confirm Password
                </p>
                <input
                  type="password"
                  value={newpassword}
                  onChange={(e) => setNewpassword(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your Email to get a rest password link. "
                  required
                />
              </div>

              <div className="flex flex-wrap gap-y-4 justify-center md:justify-between pt-[40px] items-center">
                <Link to="/">
                  <button className="navbutton12 h-fit text-white font-fcl  text-[18px]">
                    Cancel
                  </button>
                </Link>
                <button
                  disabled={loading}
                  onClick={changepassword}
                  className="navbutton22 h-fit text-white font-fcl  text-[18px]"
                >
                  {loading ? <Spinner /> : "Changer le mot de passe"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Change;
