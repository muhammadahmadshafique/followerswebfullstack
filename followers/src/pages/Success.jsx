import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Success() {
    const navigate = useNavigate();

    useEffect(() => {
    const orderdetails = JSON.parse(localStorage.getItem("order"));
    // now make post requst to create order
    const createorder = async () => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_CLIENT_URL}/auth/createorder`, orderdetails);
        
        //toastify message
        // toast.success(res.data.message, {
        //   position: toast.POSITION.TOP_CENTER,
        // })
        // localStorage.removeItem("order");
        // navigate("/myorder");
        
      } catch (error) {
        //toastify message
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        }
        )
        console.log(error);
      }
    };



    const createorderinapi = async () => {

      try {
        const res = await axios.post(`${process.env.REACT_APP_CLIENT_URL}/auth/api/createorderinapi`, {
          servicetype: 6082,
          link: orderdetails.link,
          quantity: orderdetails.quantity
        });
        
        console.log("Response:", res)
        //toastify message
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
        })
        localStorage.removeItem("order");
        navigate("/myorder");
        
      } catch (error) {
        //toastify message
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        }
        )
        console.log(error);
      }
    };
    createorderinapi()
    createorder()
  }, []);

  return (
    <div>
      <div
        tabindex="-1"
        aria-hidden="true"
        class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Succès</span>
            </div>
            <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Paiement réussi et votre commande a été passée.

            </p>
            <button className="text-[#fff] mt-[34px] text-[16px] font-[500] py-[12px] px-[18px] rounded-[8px] bg-green-500">
            Veuillez patienter, nous vous redirigeons
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
