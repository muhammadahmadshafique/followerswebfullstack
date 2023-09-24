import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable, 
  getDownloadURL,
  deleteObject,

} from "firebase/storage"; 
import { getAuth } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

import { Link } from "react-router-dom";
import ProfileCard2 from "../components/ProfileCard2.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyCt2aeRvKXY_18x9ZbGR9tD6evVKc5ZoEs",
  authDomain: "kalmak-b81db.firebaseapp.com",
  projectId: "kalmak-b81db",
  storageBucket: "kalmak-b81db.appspot.com",
  messagingSenderId: "608406676574",
  appId: "1:608406676574:web:b0849dfc73c20ee6f780cf",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
function Profile() {


  const [progress, setProgress] = useState(null);
 
  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();


  const [open, setOpen] = useState(false);

  //make usestate of name and email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setimage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id,setid]= useState(null)
  console.log("🚀 ~ file: Profile.jsx:59 ~ Profile ~ id:", id)


  useEffect(() => {
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    setid(userinfo._id);
    //get imgae from local storage
    const image = localStorage.getItem("image");
    //get id from local storage
    setimage(image)
    setName(userinfo.name);
    setEmail(userinfo.email);
  }, []);






  const changeusername = async (e) => {
    e.preventDefault();
  
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CLIENT_URL}/auth/editusername`,
        {
          id,
          name,
          
        }
      );
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      //reload window
      window.location.reload();
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    }
  };



  const handleimageUpload = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      toast.error("Select your image", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (selectedFile) {
      try {
        const folderName = "user images";
        const listName = "list-folder";
        const filePath = `${folderName}/${listName}`;
        const storageRef = ref(storage, filePath);
        const uploadTask = uploadBytesResumable(storageRef, selectedFile);

        uploadTask.on("state_changed", (snapshot) => {
          const progressPercentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressPercentage);
        });

        await uploadTask;

        const downloadURL = await getDownloadURL(storageRef);
        localStorage.setItem("image", downloadURL);
        //refresh page
        window.location.reload();

        // setUploadedFiles((prevFiles) => [...prevFiles, ...uploadedFilesArray]);
      } catch (error) {
        console.error("Error uploading files:", error);
        setProgress(0);
      } finally {
        console.error("Error uploading files");

      }
    }
  };

  return (
    <div className="bg-[#F7F7F7]">
      <div className="md:mx-[72px] mx-[32px]">
        <ProfileCard2 />
      </div>
      <div className="max-w-[860px] mt-[60px] mx-auto profilecard ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#1B1633] tracking-[1px] mt-[32px] mb-[80px] text-center w-full font-fcr text-[28px] font-[700]">
            My Profile
          </p>
          <div className="flex flex-wrap gap-y-12 justify-between items-center w-full">
            <div className="flex justify-center items-center gap-x-9">
              <div className="w-12 h-12">
                <img
                  className="w-full h-full rounded-full object-contain"
                  src={image ? image : "/girl.png"}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="flex flex-col  gap-y-1">
                <p className="text-[#1B1633] tracking-[1px] w-full font-fcr text-[18px] font-[700]">
                  Upload New Profile Photo
                </p>
                <p className="text-[#1B1633] tracking-[1px] w-full font-fcl text-[12px]">
                  Photo Fromat: jpeg , Png
                </p>
              </div>
            </div>
           { image===null &&<><input onChange={handleimageUpload} type="file" id="actual-btn" hidden />
            <label className="flex items-center gap-y-8 flex-col" for="actual-btn">
              <div className="n1 bg-[#94959B] cursor-pointer rounded-[12px] gap-x-2 p-[12px]">
                <img src="/logout.svg" alt="" srcset="" />
                <p className="text-white tracking-[1px]">Upload Photo</p>
              </div>
              
            </label></> }
          </div>

          {progress!=null && <div className="w-full mt-10">
          <div
            className="bg-blue-500 text-black p-2 rounded-md"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>}
          <div className="w-full mt-[50px]">
            <div>
              <p className="text-[#1B1633] py-[12px] fcl text-[18px] tracking-[1px]">
                Name
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="cursor-pointer">
              <p className="text-[#1B1633] py-[12px] cursor-pointer fcl text-[18px] tracking-[1px]">
                Email
              </p>
              <input
                type="email"
                value={email}
                onClick={()=>{
                  //show message that you can not edit email
                  toast.error("You can not edit email", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                }}
                class="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <p className="text-[#1B1633] py-[12px] tracking-[1px] fcl text-[18px]">
                Password
              </p>
              <Link to="/changepasswordprofile">
                <input
                  type="text"
                  value={"Change Password"}
                  class="bg-gray-50 cursor-pointer border border-gray-300 text-[#D30E49] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row  gap-y-5 w-full justify-between pt-[40px] items-center">
          <Link to="/">
            <button className="navbutton12 h-fit text-white font-fcl  text-[18px]">
              Cancel
            </button>
            </Link>
         
              <button onClick={(e) => changeusername(e)} className="navbutton22 whitespace-nowrap h-fit text-white font-fcl  text-[18px]">
              {loading ? <Spinner /> : "Save Changes"}
              </button>
          </div>
        </div>
      </div>
      <div className="mt-[12px] md:mt-[12px]">
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

export default Profile;
