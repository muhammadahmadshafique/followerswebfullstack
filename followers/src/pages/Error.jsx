import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Error() {
  useEffect(() => {
    toast.error("Erreur dans le processus de paiement. Essayer à nouveau", {
      position: toast.POSITION.TOP_CENTER,
    });
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
            <div class="w-12 h-12 rounded-full bg-red-100  p-2 flex items-center justify-center mx-auto mb-3.5">
              <svg
                className="text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="sr-only">
                Erreur dans le processus de paiement. Essayer à nouveau
              </span>
            </div>
            <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Erreur dans le processus de paiement. Essayer à nouveau
            </p>
            <Link to="/">
              <button className="text-[#fff] bg-[#F04F36] mt-[34px] text-[16px] font-[500] py-[12px] px-[18px] rounded-[8px] ">
                RETOURNER. Essayer à nouveau
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
