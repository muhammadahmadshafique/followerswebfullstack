import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import Footer from "../components/Footer.jsx";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password == null || email == null) {
      toast.error("Tous les champs sont requis", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "https://api.followerstudio.fr/api/auth/login",
        {
          email,
          password,
        }
      );
      navigate("/");
      localStorage.setItem("userinfo", JSON.stringify(response.data.userinfo));
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
    <div className="bgim h-fit pb-12">
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
        <div className="flex justify-center my-[10px] md:my-[60px] items-center">
          <div className="rounded-[24px] p-[32px] w-[600px] bg-[#FFF]">
            <div className="space-y-[18px]">
              <p className="text-[#1B1633] text-center n1 w-full font-fcr text-[28px] font-[700]">
              Se connecter
              </p>
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
              <div className="flex gap-x-4 justify-between pt-[40px] items-center">
                <button className="navbutton12 h-fit text-white font-fcl  text-[18px]">
                Se connecter
                </button>
                <button
                  disabled={loading}
                  onClick={(e) => login(e)}
                  className="navbutton22 h-fit text-white font-fcl  text-[18px]"
                >
                  {loading ? <Spinner /> : "Annuler"}
                </button>
              </div>
              <div className="flex flex-col items-center gap-y-3 md:flex-row  md:space-x-12 justify-between selection:items-center">
                <p className="text-[16px] whitespace-nowrap tracking-[0.32px] font-[500] fcl">
                Je n'ai aucun compte{" "}
                  <Link to="/signup">
                    {" "}
                    <span className="underline cursor-pointer">Inscrivez-vous</span>
                  </Link>{" "}
                  maintenant.
                </p>
                <Link to="/forgot">
                  <p className="text-[#EB445B] tracking-[0.32px] whitespace-nowrap cursor-pointer text-[16px] font-[500] fcl">
                  Mot de passe oublié?
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[12px] md:pt-[30px]">
        <hr
          style={{ background: "rgba(105, 120, 131, 0.16)" }}
          class="mx-[72px] h-px my-8  border-0 dark:bg-gray-700"
        />
       <Footer/>
      </div>
    </div>
  );
}

export default Login;
