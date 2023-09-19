import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard1 from "../components/ProfileCard1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import axios from "axios";
function Buyfollowers2() {
  // const [selectedplateform,setselectedplateform]=useState("instagram")
  const [options, setOptions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [serviceNumber, setserviceNumber] = useState(null);
  console.log("🚀 ~ file: Buyfollowers2.jsx:13 ~ Buyfollowers2 ~ serviceNumber:", serviceNumber)

  const [afterselection, setafterselection] = useState(null);
  const [finalprice, setfinalprice] = useState(null);
  console.log("🚀 ~ file: Buyfollowers2.jsx:15 ~ Buyfollowers2 ~ finalprice:", finalprice)
  const [last,setlast]=useState(null)
  const [link,setLink]=useState(null)


  useEffect(() => {
    setafterselection(options && options[0]);
  }, [options]);

  useEffect(() => {
    const data = localStorage.getItem("selectedplateform");
    // setselectedplateform(data)
    if (data === "instagram") {
      setOptions([
        "Insta followers standard",
        "Insta followers France",
        "Instagram like",
        "Instagram comment",
      ]);
    }

    if (data === "facebook") {
      setOptions([
        "Facebook followers",
        "Facebook like",
        "Facebook page like",
        "Facebook comments",
        "Facebook page follower",
      ]);
    }

    if (data === "twitter") {
      setOptions([
        "Twitter followers",
        "Twitter followers crypto",
        "Twitter retweet",
        "Twitter Like",
        "Twitter View",
        "Twitter view video",
      ]);
    }

    if (data === "youtube") {
      setOptions([
        "YouTube followers",
        "YouTube views",
        "YouTube Likes",
        "YouTube commentaires",
      ]);
    }

    if (data === "tiktok") {
      setOptions([
        "Tiktok followers",
        "Tiktok Likes",
        "Tiktok comment fr",
        "Tiktok live stream durant 15min",
        "Tiktok live stream durant 30min",
        "Tiktok live stream durant 60min",
        "Tiktok live stream durant 90min",
        "Tiktok live stream durant 120min",
        "Tiktok live stream durant 180min",
        "Tiktok live stream durant 240min",
      ]);
    }

    if (data === "telegram") {
      setOptions(["Member telegram"]);
    }
    if (data === "spotify") {
      setOptions([
        "Spotify followers fr",
        "Spotify prenium play fr track play",
      ]);
    }
  }, []);

  const optionsData = {
    "Tiktok followers": [
      { quantity: 200, price: 3 },
      { quantity: 500, price: 6 },
      { quantity: 1000, price: 10 },
      { quantity: 5000, price: 40 },
      { quantity: 10000, price: 60 },
      { quantity: 25000, price: 110 },
      { quantity: 50000, price: 190 },
    ],

    "Tiktok Likes": [
      { quantity: 10, price: 1 },
      { quantity: 50, price: 2 },
      { quantity: 100, price: 3 },
      { quantity: 500, price: 10 },
      { quantity: 1000, price: 15 },
      { quantity: 5000, price: 50 },
      { quantity: 10000, price: 80 },
      { quantity: 25000, price: 160 },
      { quantity: 50000, price: 260 },
      { quantity: 100000, price: 350 },
    ],

    "Tiktok comment fr": [
      { quantity: 10, price: 2 },
      { quantity: 50, price: 10 },
      { quantity: 100, price: 15 },
      { quantity: 250, price: 30 },
      { quantity: 500, price: 50 },
      { quantity: 1000, price: 90 },
    ],

    "Tiktok live stream durant 15min": [
      { quantity: 100, price: 1 },
      { quantity: 250, price: 2.5 },
      { quantity: 500, price: 5 },
      { quantity: 1000, price: 10 },
    ],

    "Tiktok live stream durant 30min": [
      { quantity: 100, price: 2 },
      { quantity: 250, price: 5 },
      { quantity: 500, price: 10 },
      { quantity: 1000, price: 20 },
    ],

    "Tiktok live stream durant 60min": [
      { quantity: 100, price: 4 },
      { quantity: 250, price: 10 },
      { quantity: 500, price: 20 },
      { quantity: 1000, price: 40 },
    ],

    "Tiktok live stream durant 90min": [
      { quantity: 100, price: 6 },
      { quantity: 250, price: 15 },
      { quantity: 500, price: 30 },
      { quantity: 1000, price: 60 },
    ],

    "Tiktok live stream durant 120 min": [
      { quantity: 100, price: 8 },
      { quantity: 250, price: 20 },
      { quantity: 500, price: 40 },
      { quantity: 1000, price: 80 },
    ],

    "Tiktok live stream durant 180 min": [
      { quantity: 100, price: 12 },
      { quantity: 250, price: 30 },
      { quantity: 500, price: 60 },
      { quantity: 1000, price: 120 },
    ],

    "Tiktok live stream durant 240 min": [
      { quantity: 100, price: 16 },
      { quantity: 250, price: 40 },
      { quantity: 500, price: 80 },
      { quantity: 1000, price: 160 },
    ],
    "Facebook followers": [
      { quantity: 1000, price: 10 },
      { quantity: 2000, price: 18 },
      { quantity: 5000, price: 35 },
      { quantity: 10000, price: 50 },
      { quantity: 25000, price: 100 },
      { quantity: 50000, price: 180 },
      { quantity: 100000, price: 330 },
    ],

    "Facebook like": [
      { quantity: 100, price: 2 },
      { quantity: 500, price: 5 },
      { quantity: 1000, price: 7 },
      { quantity: 2500, price: 15 },
      { quantity: 5000, price: 25 },
      { quantity: 10000, price: 40 },
    ],

    "Facebook page like": [
      { quantity: 100, price: 2 },
      { quantity: 500, price: 7 },
      { quantity: 1000, price: 10 },
      { quantity: 5000, price: 60 },
      { quantity: 10000, price: 100 },
      { quantity: 25000, price: 200 },
      { quantity: 50000, price: 180 },
      { quantity: 100000, price: 300 },
      { quantity: 250000, price: 600 },
      { quantity: 500000, price: 1000 },
      { quantity: 1000000, price: 1900 },
    ],

    "Facebook page follower": [
      { quantity: 1000, price: 10 },
      { quantity: 5000, price: 60 },
      { quantity: 10000, price: 100 },
      { quantity: 25000, price: 200 },
      { quantity: 50000, price: 180 },
      { quantity: 100000, price: 300 },
      { quantity: 250000, price: 600 },
      { quantity: 500000, price: 1000 },
      { quantity: 1000000, price: 1900 },
    ],

    "Facebook comments": [
      { quantity: 10, price: 5 },
      { quantity: 50, price: 20 },
      { quantity: 100, price: 30 },
      { quantity: 250, price: 60 },
      { quantity: 500, price: 80 },
      { quantity: 1000, price: 130 },
    ],
    "Insta followers standard": [
      { quantity: 50, price: 1 },
      { quantity: 100, price: 2 },
      { quantity: 250, price: 2.5 },
      { quantity: 500, price: 5 },
      { quantity: 750, price: 7.5 },
      { quantity: 1000, price: 10 },
      { quantity: 1500, price: 15 },
      { quantity: 2000, price: 20 },
      { quantity: 5000, price: 40 },
      { quantity: 10000, price: 60 },
      { quantity: 25000, price: 75 },
      { quantity: 50000, price: 100 },
    ],
    "Insta followers France": [
      { quantity: 50, price: 7 },
      { quantity: 100, price: 14 },
      { quantity: 250, price: 30 },
      { quantity: 500, price: 45 },
      { quantity: 750, price: 55 },
      { quantity: 1000, price: 60 },
      { quantity: 1500, price: 85 },
      { quantity: 2000, price: 100 },
    ],
    "Instagram like": [
      { quantity: 25, price: 1 },
      { quantity: 50, price: 2 },
      { quantity: 100, price: 3 },
      { quantity: 250, price: 4 },
      { quantity: 500, price: 5 },
      { quantity: 1000, price: 9 },
      { quantity: 2500, price: 15 },
      { quantity: 5000, price: 25 },
      { quantity: 10000, price: 40 },
      { quantity: 25000, price: 60 },
      { quantity: 50000, price: 90 },
      { quantity: 100000, price: 150 },
    ],

    "Instagram comment": [
      { quantity: 10, price: 10 },
      { quantity: 20, price: 18 },
      { quantity: 30, price: 25 },
      { quantity: 40, price: 28 },
      { quantity: 50, price: 30 },
      { quantity: 100, price: 50 },
      { quantity: 250, price: 90 },
      { quantity: 500, price: 120 },
    ],

    "YouTube followers": [
      { quantity: 100, price: 8 },
      { quantity: 250, price: 20 },
      { quantity: 500, price: 30 },
      { quantity: 1000, price: 50 },
      { quantity: 1500, price: 70 },
      { quantity: 2000, price: 90 },
      { quantity: 2500, price: 120 },
      { quantity: 5000, price: 200 },
      { quantity: 10000, price: 350 },
      { quantity: 25000, price: 490 },
      { quantity: 50000, price: 790 },
    ],

    "YouTube views": [
      { quantity: 500, price: 3 },
      { quantity: 1000, price: 6 },
      { quantity: 2500, price: 15 },
      { quantity: 5000, price: 25 },
      { quantity: 10000, price: 45 },
      { quantity: 25000, price: 65 },
      { quantity: 50000, price: 100 },
      { quantity: 75000, price: 150 },
      { quantity: 100000, price: 200 },
      { quantity: 250000, price: 400 },
      { quantity: 500000, price: 600 },
      { quantity: 1000000, price: 999 },
    ],
    "YouTube Likes": [
      { quantity: 10, price: 1 },
      { quantity: 50, price: 3 },
      { quantity: 100, price: 6 },
      { quantity: 250, price: 8 },
      { quantity: 500, price: 15 },
      { quantity: 1000, price: 30 },
      { quantity: 1500, price: 40 },
      { quantity: 2500, price: 60 },
      { quantity: 5000, price: 100 },
    ],

    "YouTube commentaires": [
      { quantity: 1, price: 1 },
      { quantity: 10, price: 10 },
      { quantity: 20, price: 15 },
      { quantity: 30, price: 20 },
      { quantity: 40, price: 25 },
      { quantity: 50, price: 30 },
      { quantity: 100, price: 50 },
      { quantity: 200, price: 75 },
      { quantity: 300, price: 90 },
      { quantity: 500, price: 130 },
      { quantity: 1000, price: 180 },
    ],
    "Twitter followers": [
      { quantity: 100, price: 7 },
      { quantity: 500, price: 30 },
      { quantity: 1000, price: 50 },
      { quantity: 1500, price: 65 },
      { quantity: 2000, price: 75 },
      { quantity: 2500, price: 90 },
      { quantity: 5000, price: 120 },
      { quantity: 7500, price: 150 },
      { quantity: 10000, price: 180 },
      { quantity: 25000, price: 225 },
      { quantity: 50000, price: 350 },
      { quantity: 100000, price: 500 },
    ],

    "Twitter followers crypto": [
      { quantity: 1000, price: 180 },
      { quantity: 2000, price: 360 },
      { quantity: 3000, price: 540 },
      { quantity: 4000, price: 720 },
      { quantity: 5000, price: 900 },
    ],

    "Twitter retweet": [
      { quantity: 10, price: 1 },
      { quantity: 50, price: 5 },
      { quantity: 100, price: 10 },
      { quantity: 250, price: 13 },
      { quantity: 500, price: 20 },
      { quantity: 750, price: 28 },
      { quantity: 1000, price: 35 },
      { quantity: 1500, price: 40 },
      { quantity: 2000, price: 50 },
      { quantity: 2500, price: 55 },
      { quantity: 5000, price: 80 },
      { quantity: 10000, price: 120 },
      { quantity: 25000, price: 180 },
      { quantity: 40000, price: 300 },
    ],

    "Twitter Like": [
      { quantity: 10, price: 1 },
      { quantity: 50, price: 5 },
      { quantity: 100, price: 6 },
      { quantity: 250, price: 9 },
      { quantity: 500, price: 16 },
      { quantity: 1000, price: 30 },
      { quantity: 2000, price: 50 },
      { quantity: 5000, price: 90 },
      { quantity: 10000, price: 120 },
    ],

    "Twitter View": [
      { quantity: 50, price: 1 },
      { quantity: 1000, price: 5 },
      { quantity: 10000, price: 30 },
      { quantity: 50000, price: 40 },
      { quantity: 100000, price: 50 },
      { quantity: 250000, price: 60 },
      { quantity: 500000, price: 70 },
      { quantity: 1000000, price: 90 },
    ],

    "Twitter view video": [
      { quantity: 50, price: 1 },
      { quantity: 1000, price: 5 },
      { quantity: 10000, price: 30 },
      { quantity: 50000, price: 40 },
      { quantity: 100000, price: 50 },
      { quantity: 250000, price: 60 },
      { quantity: 500000, price: 70 },
      { quantity: 1000000, price: 90 },
    ],
    "Member telegram": [
      { quantity: 100, price: 1 },
      { quantity: 250, price: 2 },
      { quantity: 500, price: 4 },
      { quantity: 1000, price: 7 },
      { quantity: 2500, price: 15 },
      { quantity: 5000, price: 25 },
      { quantity: 10000, price: 40 },
      { quantity: 25000, price: 70 },
      { quantity: 40000, price: 90 },
    ],

    "Spotify followers fr": [
      { quantity: 20, price: 1 },
      { quantity: 100, price: 3 },
      { quantity: 500, price: 4 },
      { quantity: 1000, price: 5 },
      { quantity: 5000, price: 15 },
      { quantity: 10000, price: 20 },
      { quantity: 50000, price: 70 },
      { quantity: 100000, price: 130 },
      { quantity: 250000, price: 300 },
      { quantity: 500000, price: 500 },
      { quantity: 1000000, price: 900 },
    ],

    "Spotify prenium play fr track play": [
      { quantity: 1000, price: 5 },
      { quantity: 5000, price: 15 },
      { quantity: 10000, price: 20 },
      { quantity: 50000, price: 70 },
      { quantity: 100000, price: 130 },
      { quantity: 250000, price: 300 },
      { quantity: 500000, price: 500 },
      { quantity: 1000000, price: 980 },
    ],
  };

 useEffect(() => {
  const final = optionsData[afterselection];

  setlast(final)
  // console.log(
  //   "🚀 ~ file: Buyfollowers2.jsx:434 ~ Buyfollowers2 ~ final:",
  //   final
  // );
  setfinalprice(final&&final[0])
   
 }, [afterselection])
 








  const payment = async (e) => {
    e.preventDefault();
    setLoading(true);
  

    if (
      finalprice == null || link===null||afterselection===null
    ) {
      toast.error("Please fill all the fields", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);

      return;
    }


    //store order in local storage and get id of user from local stoarge
    const user = JSON.parse(localStorage.getItem("userinfo"));
    const id = user._id;
    const order = {
      id,
      name: user.name,
      email: user.email,
      servicetype:afterselection,
      serviceNumber:serviceNumber,
      price:finalprice?.price,
      quantity:finalprice?.quantity,
      link,
    }
    localStorage.setItem("order", JSON.stringify(order));
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CLIENT_URL}/auth/create-checkout-session`,
        {
          finalprice:finalprice?.price,
          link:link,
          service:afterselection
        }
      );

      //redirect to new window
      window.location.href = response.data.message;
      toast.success("Redirecting to stripe", {
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



  
useEffect(() => {
  if(afterselection==="Facebook followers"){
    setserviceNumber(6902)
    return
  }
  if (afterselection==="Facebook like"){
    setserviceNumber(6181)
    return
  }

  if (afterselection==="Facebook page like"){
    setserviceNumber(8613)
    return
  }
  if (afterselection==="Facebook comments"){
    setserviceNumber(8314)
    return
  }
  if (afterselection==="Facebook page follower"){
    setserviceNumber(8901)
    return
  }
  if (afterselection==="Insta followers standard"){
    setserviceNumber(8432)
    return
  }
  if (afterselection==="Insta followers France"){
    setserviceNumber(6587)
    return
  }
  if (afterselection==="Instagram like"){
    setserviceNumber(6587)
    return
  }
  if (afterselection==="Instagram comment"){
    setserviceNumber(3362)
    return
  }
  if (afterselection==="Twitter followers"){
    setserviceNumber(6082)
    return
  }
  if (afterselection==="Twitter followers crypto"){
    setserviceNumber(6075)
    return
  }
  if (afterselection==="Twitter retweet"){
    setserviceNumber(8411)
    return
  }
  if (afterselection==="Twitter Like"){
    setserviceNumber(7342)
    return
  }
  if (afterselection==="Twitter View"){
    setserviceNumber(8594)
    return
  }
  if (afterselection==="Twitter view video"){
    setserviceNumber(5954)
    return
  }
  if (afterselection==="YouTube followers"){
    setserviceNumber(7767)
    return
  }
  if (afterselection==="YouTube views"){
    setserviceNumber(7733)
    return
  }
  if (afterselection==="YouTube Likes"){
    setserviceNumber(8004)
    return
  }
  if (afterselection==="YouTube commentaires"){
    setserviceNumber(6297)
    return
  }
  if (afterselection==="Tiktok followers"){
    setserviceNumber(8621)
    return
  }
  if (afterselection==="Tiktok Likes"){
    setserviceNumber(5126)
    return
  }
  if (afterselection==="Tiktok comment fr"){
    setserviceNumber(8977)
    return
  }
  if (afterselection==="Tiktok live stream durant 15min"){
    setserviceNumber(8978)
    return
  }
  if (afterselection==="Tiktok live stream durant 30min"){
    setserviceNumber(8978)
    return
  }
  if (afterselection==="Tiktok live stream durant 60min"){
    setserviceNumber(8978)
    return
  }
  if (afterselection==="Tiktok live stream durant 90min"){
    setserviceNumber(8978)
    return
  }
  if (afterselection==="Tiktok live stream durant 120min"){
    setserviceNumber(8978)
    return
  }
  if (afterselection==="Tiktok live stream durant 180min"){
    setserviceNumber(8978)
    return
  }
  if (afterselection==="Tiktok live stream durant 240min"){
    setserviceNumber(8978)
    return
  }
  if (afterselection==="Member telegram"){
    setserviceNumber(8944)
    return
  }
  if (afterselection==="Spotify followers fr"){
    setserviceNumber(7315)
    return
  }
  if (afterselection==="Spotify prenium play fr track play"){
    setserviceNumber(7329)
    return
  }
}, [afterselection])



  return (
    <div className="bg-[#F7F7F7]">
      <div className="md:mx-[72px] mx-[12px]">
        <ProfileCard1 />
      </div>
      <div className="max-w-[860px] mt-[60px] mx-auto profilecard ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#1B1633] tracking-[1px] text-center w-full font-fcr text-[24px] font-[700]">
              Buy Followers
            </p>
          </div>
          <div className="w-full space-y-5 mt-[50px]">
            <div className="">
              <div className="w-full">
                <p className="text-[#1B1633] py-[12px] fcl text-[18px]">
                  Service Type
                </p>
                <select
                  onChange={(e) => setafterselection(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {options?.map((one) => (
                    <option value={one}>{one}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="">
              <p className="text-[#1B1633] tracking-[1px] py-[12px] fcl text-[18px]">
                Your account Link
              </p>
              <input
                type="text"
                value={link}
                onChange={(e)=>setLink(e.target.value)}
                placeholder="https://www.instagram.com/user1234"
                class="bg-gray-50 cursor-pointer border border-gray-300 text-[#D30E49] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full">
              <p className="text-[#1B1633] tracking-[1px] py-[12px] fcl text-[18px]">
                Quantity
              </p>
              <select
                onChange={(e) => setfinalprice(JSON.parse(e.target.value))}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {last?.map((one) => (
                  <option value={JSON.stringify(one)}>{one.quantity}</option>
                ))}
              </select>
            </div>

            <div className="flex my-[80px] gap-y-4 flex-col justify-center items-center">
              {/* <p className="text-[#1B1633] text-[16px] fcl opacity-50">
                1000 x 0.05 = $50
              </p> */}
              <p className="text-[#1B1633] tracking-[1px] text-[36px] fct">
                Total Amount:{" "}
                <span className="amounth">
                  ${finalprice?.price}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-4 w-full justify-between pt-[40px] items-center">
            <Link to="/Buyfollowers">
              <button className="navbutton12 h-fit text-white font-fcl text-[18px]">
                Cancel
              </button>
            </Link>
              <button onClick={(e)=>payment(e)} className="navbutton22 whitespace-nowrap h-fit text-white font-fcl  text-[18px]">
                {loading ? <Spinner/> : "Proceed to Payment"}
              </button>
          </div>
        </div>
      </div>
      <div className="mt-[12px] mb-4 md:mt-[12px]">
        <hr
          style={{ background: "rgba(105, 120, 131, 0.16)" }}
          class="mx-[72px] h-px my-8  border-0 dark:bg-gray-700"
        />
        <p className="text-[#1B1633] text-center font-fcl text-[14px] font-[300]">
          All rights reserved @followerstudio.com
        </p>
      </div>
    </div>
  );
}

export default Buyfollowers2;
