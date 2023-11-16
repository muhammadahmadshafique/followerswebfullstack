import React, { useEffect, useState } from "react";
import Card from "../components/Home/Card";
import { Link } from "react-router-dom";
import ProfileCard1 from "../components/ProfileCard1";
import Profile from "../components/Profile.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function Home() {
  const [userexists, setUserexists] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    //check user from local storage
    const user = localStorage.getItem("userinfo");
    const user1 = JSON.parse(user);
    if (user1?._id) {
      setUserexists(user1);
    }
  }, []);

  const location = useLocation();
  useEffect(() => {
    const selectedSection = window.location.hash;
    if (selectedSection) {
      const targetElement = document.querySelector(selectedSection);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (!firstName || !message || !email) {
      toast.error("Please fill in all required fields");
      return;
    }

    const subject = "Contact with Kalmak";
    const body = `
      First Name: ${firstName}
      Email: ${email}
      Message: ${message}
    `;

    const mailtoURL = `mailto:info@followerstudio.fr?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoURL;
    setFirstName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-[#F7F7F7]">
      <div className="md:mx-[72px] mx-[15px]">
        {/* navbar */}
        <div className="flex gap-y-8 flex-col md:flex-row justify-center md:justify-between items-center pt-[25px]">
          <div>
            <Link to="/">
              <img src="/Logo.png" alt="" srcset="" />
            </Link>
          </div>
          <div className="n1 gap-x-[40px]">
            <a href="#contact">
              {" "}
              <p className="font-fcl">Contact</p>
            </a>
            {userexists != false ? (
              <Profile />
            ) : (
              <Link to="/login">
                <p className="font-fcl">Connexion</p>
              </Link>
            )}
            <Link to="/Buyfollowers">
              <button className="navbutton whitespace-nowrap text-white font-fcl text-[13px] md:text-[16px]">
              Nos prestations
              </button>
            </Link>
          </div>
        </div>
        {/* header */}
        <div className="mt-[40px]">
          <div className="flex flex-col gap-y-16 md:justify-center items-center md:flex-row">
            <div className="md:w-[50%]">
              <p className="text-[#1B1633] font-fcr text-[34px] md:text-[54px] font-[700]">
                Ouvrez-vous le champ <br className="hidden md:block" /> des
                possibles grâce <br className="hidden md:block" /> aux réseaux
                sociaux
                <br className="hidden md:block" />
              </p>
              <p className="text-[#1B1633] tracking-[0.4px] font-fct text-[24px] font-[300] mt-[32px] mb-[40px]">
                Les réseaux sociaux vous permettent aujourd'hui de vous
                développer à vitesse grand V
              </p>
              <Link to="/Buyfollowers">
                <button className="navbutton text-white font-fcl  text-[16px]">
                  Voir nos services
                </button>
              </Link>
            </div>
            <div className="md:w-[50%]">
              <img
                className="w-full h-full object-contain"
                src="/headerimage.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
        {/* first part */}
        <div className="md:my-[160px] my-[60px]">
          <div className="flex justify-center gap-y-12 flex-col-reverse items-center  md:flex-row gap-x-[85px]">
            <div className="md:w-[50%]">
              <img
                className="w-full h-full object-contain"
                src="/icons.svg"
                alt=""
                srcset=""
              />
            </div>
            <div className="md:w-[50%]">
              <p className="text-[#1B1633] tracking-[1px] font-fct text-[16px] opacity-70 font-[700] uppercase ">
                Une nouvelle vie
              </p>
              <p className="text-[#1B1633] mt-[12px] tracking-[1px] font-fcr text-[34px] font-[700] mb-[24px]">
                Boostez enfin votre activité <br /> sur les réseaux sociaux
              </p>
              <p className="text-[#1B1633] text-justify tracking-[1px] font-fct opacity-80 text-[18px] font-[300]">
                Dans un monde où les réseaux sociaux sont rois, il est essentiel
                pour les marques et les individus de maintenir une présence
                forte et dynamique en ligne. C'est ici que Followerstudio entre
                en jeu, votre véritable game-changer ! Notre plateforme
                innovante est conçue pour booster votre présence sur divers
                réseaux sociaux tels que Instagram, Twitter, LinkedIn, TikTok,
                Facebook et même Spotify.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* map */}
      <div className="n4 justify-center pb-[96px] bg-white">
        <p className="text-[#1B1633] ttracking-[1px] font-fct text-[16px] opacity-70 mt-[72px] font-[300]">
          Simple et pas chère
        </p>
        <p className="text-[#1B1633] mt-[20px] tracking-[1px] text-center font-fcr text-[34px] md:text-[54px] font-[700] mb-[92px]">
          Rendez-vous visible au monde entier
        </p>
        <img
          className="w-full h-full object-contain"
          src="/map.svg"
          alt=""
          srcset=""
        />
      </div>
      {/* cards */}
      <div className="py-[60px] md:py-[160px] md:mx-[72px] mx-[32px]">
        <div className="flex items-center justify-between element gap-x-[70px] gap-y-12 ">
          <div className="md:w-[40%]">
            <p className="text-[#1B1633] tracking-[1px] font-fcr text-[54px] font-[700]">
              Propulsez votre entreprise avec les{" "}
              <span className="nextlevel"> réseaux</span> sociaux
            </p>
            <p className="text-[#1B1633] text-justify tracking-[1px] font-fct opacity-80 text-[18px] font-[300] mt-[32px] mb-[40px]">
              Aujourd'hui, les différents réseaux sociaux constituent un réseau
              de communication qu'il faut savoir utiliser à votre avantage pour
              donner une nouvelle dynamique à votre entreprise.
            </p>
            <Link to="/buy">
              <button className="navbutton text-white font-fcl  text-[16px]">
                Voir nos prestations
              </button>
            </Link>
          </div>
          <div className=" space-y-[24px]">
            <Card
              img="/girl.svg"
              t1="Today i need to have extra time after work to analyze all comapnys reports again.I`m tired."
              bg={false}
            />
            <Card
              img="/boy1.svg"
              t1="Oh! shoot ! listen, try Reflectowl,
              I`m sure that you`ll forget about
              this problam at all."
              bg={true}
            />
            <Card
              img="/boy2.svg"
              t1="OMG ! thanks why i have try. I`m
              sure that you`ll forget about this
              problam at all."
              bg={false}
            />
          </div>
        </div>
      </div>
      <div className="md:mx-[72px] colvise h-[650px] relative flex items-center justify-between  ask">
        <div className="md:w-[50%] md:pl-[56px] px-6">
          <p className="text-[#1B1633] tracking-[1px] font-fcr text-[54px] font-[700]">
          Une <br /> question ?
          </p>
          <p className="text-[#1B1633] text-justify tracking-[1px] font-fct opacity-80 text-[18px] font-[300] mt-[32px] mb-[40px]">
          Notre support est à votre disposition pour <br /> répondre à vos questions ou pour le suivi de <br /> vos commandes
          </p>
        </div>
        <div className="md:w-[50%] relative">
          <img
            className="absolute hiddeennn last left-[20px] -bottom-[341px]"
            src="/lines.svg"
            alt=""
            srcset=""
          />

          <div
            id="contact"
            className="absolute last w-[472px] h-[574px] rounded-[24px] p-[32px] right-[38px] -top-[272px] bg-[#FFF]"
          >
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="space-y-[28px] md:px-1 px-12"
            >
              <p className="text-[#1B1633] tracking-[1px] font-fcr text-[28px] font-[700]">
              Formulaire de contact
              </p>
              <div>
                <input
                  type="text"
                  id="first_name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nom"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="first_name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="10"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Votre message (250 mots max)"
                ></textarea>
              </div>
              <button className="navbutton text-white w-full font-fcl  text-[16px]">
              Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr
        style={{ background: "rgba(105, 120, 131, 0.16)" }}
        class="mx-[72px] h-px my-8  border-0 dark:bg-gray-700"
      />
      <p className="text-[#1B1633] text-center pb-[40px] font-fcl text-[14px] font-[300]">
      Tout droit réservé ©Followerstudio
      </p>
    </div>
  );
}

export default Home;
