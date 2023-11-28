import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="bg-[#F7F7F7]">
      <div class="md:mx-16 w-full p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div className="flex-1">
            <Link to="/">
              <img className="w-[160px] object-contain" src="/Logo.png" alt="" srcset="" />
            </Link>
          </div>
          <div class="flex justify-center items-center gap-x-4 flex-1">
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  {/* <a href="https://flowbite.com/" class="hover:underline">Contact</a> */}
                </li>
                <li className="">
                  <p class="hover:underline mb-4">0970707068</p>
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
                  <Link to="/policies"><p class="hover:underline">Politique de confidentialité</p></Link> 
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 opacity-20 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
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
