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
    const user1= JSON.parse(user)
    if(user1?._id){
       setUserexists(user1)
    }
  }, [])



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
              <img src="/Logo.svg" alt="" srcset="" />
            </Link>
          </div>
          <div className="n1 gap-x-[40px]">
            <a href="#contact">
              {" "}
              <p className="font-fcl">Contact</p>
            </a>
            {userexists!=false?<Profile/>:<Link to="/login">
              <p className="font-fcl">Login</p>
            </Link>}
            <Link to="/buy">
              <button className="navbutton whitespace-nowrap text-white font-fcl text-[13px] md:text-[16px]">
                Buy Followers
              </button>
            </Link>
          </div>
        </div>
        {/* header */}
        <div className="mt-[40px]">
          <div className="flex flex-col gap-y-16 md:justify-center items-center md:flex-row">
            <div className="md:w-[50%]">
              <p className="text-[#1B1633] font-fcr text-[34px] md:text-[54px] font-[700]">
                Unlock Your <br className="hidden md:block" /> Social Media{" "}
                <br className="hidden md:block" /> Potential with us.
              </p>
              <p className="text-[#1B1633] tracking-[0.4px] font-fct text-[24px] font-[300] mt-[32px] mb-[40px]">
                The Ultimate Platform for Boosting Your Influence Across Social
                Media.
              </p>
              <Link to="/buy">
                <button className="navbutton text-white font-fcl  text-[16px]">
                  Grow Your Audience
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
                amazing features
              </p>
              <p className="text-[#1B1633] tracking-[1px] font-fcr text-[34px] font-[700] mb-[24px]">
                Your Social Media <br /> Success Starts Here
              </p>
              <p className="text-[#1B1633] tracking-[1px] font-fct opacity-80 text-[18px] font-[300]">
                We focus on one primary goal – helping you increase the number
                of followers on your social media platforms. Our tailored
                solutions elevate your social media presence across Facebook,
                Instagram, Twitter, Spotify, LinkedIn, Telegram, and TikTok.
                Experience a substantial boost in your follower count and expand
                your reach. Empower your social media journey with us, unlocking
                your true online potential. Let's grow together!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* map */}
      <div className="n4 justify-center pb-[96px] bg-white">
        <p className="text-[#1B1633] ttracking-[1px] font-fct text-[16px] opacity-70 mt-[72px] font-[300]">
          YOU”LL GET
        </p>
        <p className="text-[#1B1633] tracking-[1px] text-center font-fcr text-[34px] md:text-[54px] font-[700] mb-[92px]">
          Followers all around the Glob
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
        <div className="n1 element gap-x-[70px] gap-y-12 ">
          <div className="md:w-[50%]">
            <p className="text-[#1B1633] tracking-[1px] font-fcr text-[54px] font-[700]">
              Take your business
              <br className="hidden md:block" /> to the{" "}
              <span className="nextlevel"> next level!</span>
            </p>
            <p className="text-[#1B1633] tracking-[1px] font-fct opacity-80 text-[18px] font-[300] mt-[32px] mb-[40px]">
              Lorem ipsum dolor sit amet consectetur. Tellus purus quam ac odio
              ultricies pretium hendrerit sed amet. Ultricies egestas id aliquam
              facilisi id semper pharetra.
            </p>
            <Link to="/buy">
              <button className="navbutton text-white font-fcl  text-[16px]">
                Grow Your Audience
              </button>
            </Link>
          </div>
          <div className="md:w-[50%] space-y-[24px]">
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
            Get started <br /> with us
          </p>
          <p className="text-[#1B1633] tracking-[1px] font-fct opacity-80 text-[18px] font-[300] mt-[32px] mb-[40px]">
            Don't bother to get started us, we are ready to help you 24/7.
            Please fill in the column on the right to get started
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
            <form onSubmit={(e)=>handleSubmit(e)} className="space-y-[28px] md:px-1 px-12">
              <p className="text-[#1B1633] tracking-[1px] font-fcr text-[28px] font-[700]">
                Ask a question
              </p>
              <div>
                <input
                  type="text"
                  id="first_name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Full Name"
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
                  placeholder="Your message (Max 250 words)"
                ></textarea>
              </div>
              <button className="navbutton text-white w-full font-fcl  text-[16px]">
                Send
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
        All rights reserved @followerstudio.com
      </p>
    </div>
  );
}

export default Home;
