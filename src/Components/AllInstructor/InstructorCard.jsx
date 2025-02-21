import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaStar,
  FaTwitter,
} from "react-icons/fa";

const InstructorCard = ({ instructor }) => {
  const { name, ratings, bio } = instructor;

  const skillSet = bio.skills;

  return (
    <div className="relative flex flex-col md:flex-row w-full my-6 bg-secondary shadow-sm border border-slate-200 rounded-lg">
      <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
        <img
          src="https://i.ibb.co.com/3yVDfwkM/114089.jpg"
          className="h-full w-full rounded-md md:rounded-lg object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          {" "}
          <div className="flex-col justify-start items-center">
            <div className=" text-2xl font-semibold text-secondery text-left">
              {name}
            </div>
            <h4 className="mb-2 text-slate-800 text-xl font-semibold">
              Senior Web Developer
            </h4>
          </div>
          <div>
            <h2 className="flex items-center">
              {ratings} <FaStar className="text-yellow-400"></FaStar>
            </h2>
          </div>
        </div>
        <p className="mb-8 text-slate-600 leading-normal font-light">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </p>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800">Skills:</h3>
          <ul className="list-disc pl-5 text-gray-600">
            {skillSet.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-amber-600 font-bold text-xl">
            Javascript Development
          </h6>
          <div className="flex justify-evenly gap-3 items-center m-2">
            <FaLinkedin className="text-blue-900" />
            <FaTwitter className="text-sky-400" />
            <FaFacebookF className="text-[#0165E1]" />
            <FaInstagram className="text-pink-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
