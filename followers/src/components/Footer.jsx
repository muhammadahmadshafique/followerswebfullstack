import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="bg-white ">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div>
            <Link to="/">
              <img className="w-[160px] object-contain" src="/Logo.png" alt="" srcset="" />
            </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  {/* <a href="https://flowbite.com/" class="hover:underline">Contact</a> */}
                </li>
                <li className="">
                  <p class="hover:underline mb-4">0 9 70 70 70 68</p>
                  <p class="hover:underline">contact@followerstudio.fr</p>
                </li>
              </ul>
            </div>
            <div>
              {/* <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Email</a>
                      </li>
                      <li>
                          <p class="hover:underline">contact@followerstudio.fr</p>
                      </li>
                  </ul> */}
            </div>
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  {/* <a href="https://flowbite.com/" class="hover:underline">Contact</a> */}
                </li>
                <li className="">
                  <Link to="/conditions"><p class="hover:underline mb-4">Conditions d'achat</p></Link>
                  <Link to="/policies"><p class="hover:underline">politique de confidentialité</p></Link> 
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023.Tout droit réservé ©Followerstudio
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
