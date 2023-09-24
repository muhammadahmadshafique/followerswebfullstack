import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard2 from "../components/ProfileCard2";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
function Myorders() {
  //use state of all orders
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  console.log("🚀 ~ file: Myorders.jsx:11 ~ Myorders ~ orders:", orders)
  const [selected, setSelected] = useState("all");
  const orderdetails = JSON.parse(localStorage.getItem("userinfo"));
  const id= orderdetails._id
  useEffect(() => {
  // now make post requst to create order
  const getallorders = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_CLIENT_URL}/auth/findordersofusers`, {
        id,
        filter:selected
      });
      //toastify message
      setOrders(res?.data?.message);
    } catch (error) {
      //toastify message
      toast.error(error.response?.data?.message, {
        position: toast.POSITION.TOP_CENTER,
      }
      )
      console.log(error);
    }
  };
  getallorders()
}, [selected]);




const reorder =async (item) => {
  console.log("reorder",item);

  const orderobject = {
    id: item.id,
    name: item.name,
    email: item.email,
    servicetype: item.servicetype,
    price: item.price,
    quantity: item.quantity,
    link: item.link,
    serviceNumber:item.serviceNumber,
  }

  localStorage.setItem("order", JSON.stringify(orderobject));
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_CLIENT_URL}/auth/create-checkout-session`,
      {
        finalprice:item.price,
        link:item.link,
        service:item.servicetype
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




}

  
  return (
    <div className="bg-[#F7F7F7]">
      <div className="md:mx-[72px] mx-[32px]">
        <ProfileCard2 />
      </div>
      <div
        style={{ boxShadow: "0px 2px 100px 0px rgba(0, 0, 0, 0.10)" }}
        className="rounded-[24px] mt-[80px] p-3 pb-5 md:mx-[102px] bg-[#FFF]"
      >
        <p className="text-[#1B1633] tracking-[1px] mt-[32px] mb-[80px] text-center w-full font-fcr text-[28px] font-[700]">
          My Orders
        </p>
        {orders&& orders.length > 0 ? <div className="md:mx-[32px]">
          <div class="border border-[#F6F6F6] rounded-t-[24px] overflow-x-auto">
            <table class="table-fixed border border-[#F6F6F6] rounded-t-[24px] overflow-x-auto">
              <thead className="bg-[#E6E6E6]">
                <tr className="py-[12px]">
                  <th className="text-start whitespace-nowrap py-[16px] pl-7 text-[#1B1633] fcl text-[18px]">
                    Sr #
                  </th>
                  <th className="text-start whitespace-nowrap pl-6 py-[16px] text-[#1B1633] fcl opacity-80 text-[18px]">
                    Date & Time{" "}
                  </th>
                  <th className="text-center py-[16px] text-[#1B1633] fcl opacity-80 text-[18px]">
                    Platform
                  </th>
                  <th className="text-center py-[16px] text-[#1B1633] fcl opacity-80 text-[18px]">
                    Amount
                  </th>
                  <th className="text-start py-[16px] text-[#1B1633] fcl opacity-80 text-[18px]"></th>
                  <th className="text-start py-[16px] text-[#1B1633] fcl opacity-80 text-[18px]">
                    <select
                      onChange={(e) => setSelected(e.target.value)}
                      className="bg-[#E6E6E6] border border-orange-400 rounded-[8px] p-1 opacity-60 text-[14px]"
                      name=""
                      id=""
                    >
                       <option className="opacity-60 text-[12px]" value="all">
                        All
                      </option>
                      <option className="opacity-60 text-[12px]" value="7days">
                        Last 7 Days
                      </option>
                      <option className="opacity-60 text-[12px]" value="15days">
                        Last 15 Days
                      </option>
                      <option className="opacity-60 text-[12px]" value="30days">
                        Last 30 Days
                      </option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders&& orders.length>0&&orders.map((item, index) => (
                  <tr className="bg-[#F6F6F6] border border-b-[#EAEAEA]">
                    <td className="w-[234px] pl-7 py-[18px] text-[#1B1633] font-fcl text-[12px]">
                      {index}
                    </td>
                    <td className="w-[234px] text-center text-[#1B1633] font-fcl text-[12px]">
                      <div className="flex gap-x-4">
                        <p>{item.currentDateTime}</p>
                        {/* <p>12 JUN 2023</p>
                        <p>02:10 PM</p> */}
                      </div>
                    </td>
                    <td className="w-[244px] text-center text-[#1B1633] font-fcl text-[12px]">
                      {item.servicetype}
                    </td>
                    <td className="w-[244px] text-center text-[#1B1633] font-fcl text-[12px]">
                    € {item.price}
                    </td>
                    <td className="w-[244px] ">
                      <Link to={`/orderdetails/${item._id}`}>
                        <p className="ml-1 tracking-[1px] textre cursor-pointer w-fit border border-r-0 border-l-0 border-t-0 border-b-red-500">
                          View Details
                        </p>
                      </Link>
                    </td>
                    <td className="w-[170px]">
                      <button disabled={loading} onClick={()=>{
                        reorder(item)
                      }} className="fcl reorder">{loading?<Spinner/>:"Re order"}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>: <p className="text-center text-[#1B1633] font-fcl text-[18px]">No order placed yet</p>}
      </div>
      <div className="mt-[12px] md:pt-[112px]">
        <hr
          style={{ background: "rgba(105, 120, 131, 0.16)" }}
          class="mx-[72px] h-px my-8  border-0 dark:bg-gray-700"
        />
        <p className="text-[#1B1633] text-center pb-[104px] font-fcl text-[14px] font-[300]">
          All rights reserved @followerstudio.com
        </p>
      </div>
    </div>
  );
}

export default Myorders;
