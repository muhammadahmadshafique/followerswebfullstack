import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProfileCard2 from "../components/ProfileCard2";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toPng } from 'html-to-image';

function Orderdetails() {
  //get id params from url
  const elementRef = useRef(null);

  const { id } = useParams();

  const [order, setOrder] = useState(null);

  const [plateform, setplateform] = useState(null);
  console.log(
    "🚀 ~ file: Orderdetails.jsx:17 ~ Orderdetails ~ plateform:",
    plateform
  );
  const [followers, setfollowers] = useState(null);
  const [link, setlink] = useState(null);
  const [amount, setamount] = useState(null);

  const [colorchange,setcolorchange]= useState(false)


  useEffect(() => {
    const getorder = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CLIENT_URL}/auth/findorder/${id}`
        );
        setOrder(res.data.message);
        console.log(
          "res.data.message.servicetype,res.data.message.servicetype:",
          res.data.message.servicetype
        );
        setplateform(res.data.message.servicetype);
        setfollowers(res.data.message.quantity);
        setlink(res.data.message.link);
        setamount(res.data.message.price);
      } catch (error) {
        console.log(error);
      }
    };
    getorder();
  }, []);

  const reorder = async () => {
    console.log("reorder", order);


    const orderobject = {
      id: order.id,
      name: order.name,
      email: order.email,
      servicetype: order.servicetype,
      price: order.price,
      quantity: order.quantity,
      link: order.link,
      serviceNumber:order.serviceNumber,
    };
    console.log(
      "🚀 ~ file: Orderdetails.jsx:65 ~ reorder ~ orderobject:",
      orderobject
    );

    localStorage.setItem("order", JSON.stringify(orderobject));
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CLIENT_URL}/auth/create-checkout-session`,
        {
          finalprice: order.price,
          link: order.link,
          service: order.servicetype,
        }
      );

      //redirect to new window
      window.location.href = response.data.message;
      toast.success("Redirecting to stripe", {
        position: toast.POSITION.TOP_CENTER,
      });

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };



  const htmlToImageConvert = () => {
    setcolorchange(true)
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-[#F7F7F7]">
      <div className="md:mx-[72px] mx-[32px]">
        <ProfileCard2 />
      </div>
      <div className="max-w-[860px] mt-[60px] mx-auto profilecard ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-between items-center w-full">
            <p></p>
            <p className="text-[#1B1633] text-center w-full font-fcr text-[24px] font-[700]">
              Order# 1
            </p>
            <p onClick={htmlToImageConvert} className="text-[#F71C36] whitespace-nowrap cursor-pointer">Download Invoice</p>
          </div>
          <div ref={elementRef} className="w-full mt-[50px]">
            <div className="flex gap-x-3  items-center">
              <div className="w-full">
                <p className="text-[#1B1633] py-[12px] fcl text-[18px]">
                  Platform
                </p>
                <input
                  type="text"
                  value={plateform}
                  placeholder="Instagram"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="w-full">
                <p className="text-[#1B1633] py-[12px] fcl text-[18px]">
                  Followers
                </p>
                <input
                  type="text"
                  value={followers}
                  placeholder="1000"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-[40px]">
              <p className="text-[#1B1633] py-[12px] fcl text-[18px]">
                Your account Link
              </p>
              <input
                type="text"
                value={link}
                placeholder="https://www.instagram.com/user1234"
                class="bg-gray-50 cursor-pointer border border-gray-300 text-[#D30E49] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="flex my-[80px] gap-y-4 flex-col justify-center items-center">
              {/* <p className="text-[#1B1633] text-[16px] fcl opacity-50">
                1000 x 0.05 = $50
              </p> */}
              <p className="text-[#1B1633] text-[36px] fct"> 
                Total Amount: <span className={`${colorchange? "text-white": "amounth"}`}>€{amount}</span>{" "}
              </p>
            </div>
          </div>
          <div className="flex w-full gap-x-4 justify-between md:pt-[40px] items-center">
            <Link to="/myorder">
              <button className="navbutton12 h-fit text-white font-fcl  md:text-[18px]">
                Back
              </button>
            </Link>
            <button onClick={reorder} className="navbutton22 whitespace-nowrap h-fit text-white font-fcl  md:text-[18px]">
              Re-order
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

export default Orderdetails;
