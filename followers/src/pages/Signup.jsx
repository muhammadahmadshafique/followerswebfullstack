import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const [loading, setLoading] = useState(false);
  console.log(process.env.REACT_APP_CLIENT_URL, "ss");

  const Signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password != confirmPassword) {
      toast.error("Password does not match", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);

      return;
    }

    if (
      name == null ||
      email == null ||
      password == null ||
      confirmPassword == null
    ) {
      toast.error("Please fill all the fields", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);

      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CLIENT_URL}/auth/register`,
        {
          name,
          email,
          password,
        }
      );
      navigate("/login");
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
    }
  };

  return (
    <div className="bgim pb-12">
      <div className="md:mx-[72px] mx-[12px]">
        <div className="flex gap-y-4 md:gap-y-8 flex-col md:flex-row justify-center md:justify-between items-center pt-[25px]">
          <div>
            <Link to="/">
              <img src="/Logo.png" alt="" srcset="" />
            </Link>
          </div>
          <div className="">
            <Link to="/">
              {" "}
              <p className="font-fcl">Contact</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center  md:my-[5px] items-center">
          <div className="rounded-[24px] p-[32px] w-[600px] bg-[#FFF]">
            <div className="space-y-[4px]">
              <p className="text-[#1B1633] text-center w-full font-fcr text-[28px] font-[700]">
              S'inscrire
              </p>
              <div>
                <p className="text-[#1B1633] py-[12px] fcl text-[18px]">Nom</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Entrez votre nom complet"
                  required
                />
              </div>
              <div>
                <p className="text-[#1B1633] py-[12px] fcl text-[18px]">
                E-mail
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Entrer votre Email"
                  required
                />
              </div>
              <div>
                <p className="text-[#1B1633] py-[12px] fcl text-[18px]">
                Mot de passe
                </p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tapez votre mot de passe"
                  required
                />
              </div>
              <div>
                <p className="text-[#1B1633] py-[12px] fcl text-[18px]">
                Confirmez le mot de passe
                </p>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tapez votre mot de passe"
                  required
                />
              </div>
              <div className="flex gap-x-4 justify-between pt-[40px] items-center">
                <Link to="/">
                  <button className="navbutton12 h-fit text-white font-fcl  text-[18px]">
                  Annuler
                  </button>
                </Link>
                <button
                  disabled={loading}
                  onClick={(e) => Signup(e)}
                  className="navbutton22 h-fit text-white font-fcl  text-[18px]"
                >
                  {loading ? <Spinner /> : "S'inscrire"}
                </button>
              </div>
              <div className="flex justify-center items-center w-full">
                <p className="text-[16px] tracking-[0.32px] mt-2 text-center font-[500] fcl">
                Vous avez déjà un compte.{" "}
                  <Link to="/login">
                    {" "}
                    <span className="underline cursor-pointer">Connectez-vous</span>
                  </Link>{" "}
                  maintenant.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[12px] md:mt-[12px]">
        <hr
          style={{ background: "rgba(105, 120, 131, 0.16)" }}
          class="mx-[72px] h-px my-8  border-0 dark:bg-gray-700"
        />
      <Footer/>
      </div>
    </div>
  );
}

export default Signup;
