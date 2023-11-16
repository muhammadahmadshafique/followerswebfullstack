import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function ChangeProfilePassword() {
    const [password, setPassword] = useState(null);
    const [newpassword, setNewpassword] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const [id, setid] = useState(null);
  
  
  
    useEffect(() => {
      const userinfo = JSON.parse(localStorage.getItem("userinfo"));
      setid(userinfo._id);
    }, [])






    const changepassword = async (e) => {
        
        e.preventDefault();
        setLoading(true);
        if (password == null || newpassword == null) {
            toast.error("All fields are required", {
                position: toast.POSITION.TOP_CENTER,
            });
            setLoading(false);
            return;
        }
        if (password != newpassword) {
            toast.error("Password does not match", {
                position: toast.POSITION.TOP_CENTER,
            });
            setLoading(false);
            return;
        }
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_CLIENT_URL}/auth/changeprofilepassword`,
            {
              id,
              password:newpassword
              
            }
          );
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/");
          setLoading(false);
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
          setLoading(false);
        }
            
    }



  return (
    <div className="bgim">
    <div className="md:mx-[72px] mx-[32px]">
    <div className="flex gap-y-8 flex-col md:flex-row justify-center md:justify-between items-center pt-[25px]">
          <Link to="/">
            {" "}
            <div>
              <img src="/Logo.png" alt="" srcset="" />
            </div>
          </Link>
          <Link to={`${process.env.REACT_APP_REAL_CLIENT_URL}/#contact`}>
          <div className="">
            <p className="font-fcl">Contact</p>
          </div>
          </Link>
        </div>
      <div className="flex justify-end my-[65px] md:my-[115px] items-center">
        <div className="rounded-[24px] p-[32px] w-[600px] bg-[#FFF]">
          <div className="space-y-[4px]">
            <p className="text-[#1B1633] py-5 text-center w-full font-fcr text-[28px] font-[700]">
            Changer le mot de passe 
            </p>
            <div>
              <p className="text-[#1B1633] py-[12px] fcl text-[18px]">
              Mot de passe
              </p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="*****************"
                required
              />
            </div>
            <div className='py-3'>
              <p className="text-[#1B1633] py-[12px] fcl text-[18px]">
              Confirmez le mot de passe
              </p>
              <input
                type="password"
                value={newpassword}
                onChange={(e) => setNewpassword(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="*****************"
                required
              />
            </div>

            <div className="flex justify-between pt-[40px] items-center">
              <Link to='/'>
              <button className="navbutton12 h-fit text-white font-fcl  text-[18px]">
              Annuler
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
    <div className="">
      <hr
        style={{ background: "rgba(105, 120, 131, 0.16)" }}
        class="mx-[72px] h-px my-8  border-0 dark:bg-gray-700"
      />
      <p className="text-[#1B1633] pb-6 text-center font-fcl text-[14px] font-[300]">
      Tout droit réservé ©Followerstudio
      </p>
    </div>
  </div>
  )
}

export default ChangeProfilePassword