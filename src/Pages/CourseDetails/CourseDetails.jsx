import { FaStar } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import image1 from "/images/icons/students/svg-icon/icon-5.svg";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { useState } from "react";
import Faq from "../../Components/Home/Faq";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () =>{
    switch (activeTab) {
      case "Overview":
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime, sit, eum, minus nesciunt cum temporibus illo numquam pariatur eius ducimus assumenda eveniet dicta amet odio odit qui sequi ab adipisci! Tenetur animi reprehenderit nostrum repellat! Harum corrupti unde incidunt sint iure, quibusdam, impedit ducimus dolores maiores deleniti itaque vel.
          </p>
        );
      case "Reviews":
        return (
          <div>
            <div className=" bg-secondary border-0 rounded-xl p-4 mb-4">
              <p className="mb-2 text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque corrupti voluptas? Quod, molestias ducimus? Culpa suscipit corporis vel consectetur.</p>
              <div className="flex gap-2 items-center">
                <img src={image1} alt="" className="w-1/16" />
                <div>
                  <h5>Student Name</h5>
                  <p>Some Text</p>
                </div>
              </div>
            </div>
            <div className=" bg-secondary border-0 rounded-xl p-4 mb-4">
              <p className="mb-2 text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque corrupti voluptas? Quod, molestias ducimus? Culpa suscipit corporis vel consectetur.</p>
              <div className="flex gap-2 items-center">
                <img src={image1} alt="" className="w-1/16" />
                <div>
                  <h5>Student Name</h5>
                  <p>Some Text</p>
                </div>
              </div>
            </div>
          </div>
         
        );
      case "FAQ":
        return (
          <Faq></Faq>
        );
      case "Comment":
        return (
          <p>
            This is the Comments section. Students can discuss and ask
            questions here.
          </p>
        );
    }
  }
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold text-primary text-center mb-4">
        Video Section
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 border-0">
          <h1 className="text-3xl font-semibold mb-2">Course Name</h1>
          <div className="w-6/12 grid grid-cols-3 gap-2 mb-4">
            <div
              className="flex gap-2 items-center 
                    "
            >
              <FaStar className="text-amber-500" />
              <p>4.50/5.00</p>
            </div>
            <div
              className="flex gap-2 items-center 
                    "
            >
              <FaUserGraduate className="text-primary" />
              <p>12K Enrolled</p>
            </div>
            <div
              className="flex gap-2 items-center 
                    "
            >
              <GiNetworkBars className="text-primary" />
              <p>All Levels</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex  items-center w-1/2 gap-4">
              <img src={image1} alt="" className="w-2/12" />
              <div>
                <h5 className="text-lg font-semibold">Instructor Name</h5>
                <p>Instructor Designation</p>
              </div>
            </div>
            <div className="gap-4 flex">
              <button className="btn">Follow</button>
              <button className="btn">Share</button>
            </div>
          </div>
          <div>
            <div className="flex gap-4 bg-secondary mb-4">
            {["Overview", "Reviews", "FAQ", "Comment"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 ${
                  activeTab === tab ? "bg-primary text-white" : "text-black"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
            <div>
              {renderContent()}
            </div>
          </div>
        </div>
        <div className="col-span-1 border-0">
          {/* side bar */}
          <div className="">
            <div className="bg-secondary flex gap-2 items-center p-2 mb-2 justify-between">
              <h5 className="font-semibold">Introduction of Digital Marketing</h5>
              <FaCircleMinus />
            </div>
            <div>
              <div className="flex gap-2 items-center pl-2 mb-2">
                <FaCirclePlay />
                <p>Introduction of Digital Marketing</p>
              </div>
              <div className="flex gap-2 items-center pl-2 mb-2">
                <FaCirclePlay />
                <p>What is Digital Marketing?</p>
              </div>
              <div className="flex gap-2 items-center pl-2 mb-2">
                <FaCirclePlay />
                <p>Type of Digital Marketing</p>
              </div>
            </div>
          </div>
          <div className="bg-secondary flex gap-2 items-center p-2 mb-2 justify-between">
            <h5 className="font-semibold">Customer Life Cycle</h5>
              <FaCirclePlus />
          </div>
          <div className="bg-secondary flex gap-2 items-center p-2 mb-2 justify-between">
            <h5 className="font-semibold">Youtube Marketing</h5>
              <FaCirclePlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
