import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import { useQuery } from "@tanstack/react-query";

// import VideoUpload from "../../Components/VideoUpload/VideoUpload";

const CourseDetails = () => {
  const loaderData = useLoaderData({});
  const singleCourse = loaderData?.data;
  const [openFaq, setOpenFaq] = useState(null);
  const [openLesson, setOpenLesson] = useState(null);
  const [selectAns, setSelectAns] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [openVideo, setOpenVideo] = useState();
  const lessons = singleCourse?.courseContent[0]?.lessons;
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Reviews", "Faqs", "Quizzes"];
  console.log(singleCourse, "singleCourse");
  const { data: instructor = {}, isLoading } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/instructors/${singleCourse?.instructorId}`
      );
      const data = await res.json();
      console.log(data, "course data");
      return data?.data;
    },
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleLesson = (index) => {
    setOpenLesson(openLesson === index ? null : index);
  };

  const handleSelect = (question, answer) => {
    setSelectAns({ ...selectAns, [question]: answer });
  };

  const handleSubmit = () => {
    let newScore = 0;
    singleCourse?.quizzes.forEach((quiz) => {
      if (selectAns[quiz?.question] === quiz.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };
  useEffect(() => {
    if (singleCourse?.courseContent[0]?.lessons?.length > 0) {
      setOpenVideo(singleCourse.courseContent[0].lessons[0].videoUrl);
    }
  }, [singleCourse]);
  const handleOpenVideo = (videoUrl) => {
    console.log(videoUrl, "video for player");
    setOpenVideo(videoUrl);
  };

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <h1 className="text-5xl">Loading....</h1>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto mb-8">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 border-0">
          <div className="video-container h-[400px]">
            <VideoPlayer url={openVideo} />
          </div>
          <h1 className="text-3xl font-semibold mb-2">{singleCourse?.name}</h1>
          <div className="w-6/12 grid grid-cols-3 gap-2 mb-4">
            <div
              className="flex gap-2 items-center 
                    "
            >
              <FaStar className="text-amber-500" />
              <p>{singleCourse?.ratings}/5.0</p>
            </div>
            <div
              className="flex gap-2 items-center 
                    "
            >
              <FaUserGraduate className="text-primary" />
              <p>{singleCourse?.enrolledCount} Enrolled</p>
            </div>
            <div
              className="flex gap-2 items-center 
                    "
            >
              <GiNetworkBars className="text-primary" />
              <p>{singleCourse?.courseLevel}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex  items-center w-1/2 gap-4">
              <img
                src={instructor?.image}
                alt=""
                className="w-2/12 rounded-full"
              />
              <div>
                <h5 className="text-lg font-semibold">{instructor?.name}</h5>
                <p>{instructor?.profession}</p>
              </div>
            </div>
            <div className="gap-4 flex">
              <button className="bg-primary rounded-md border-0 text-secondary px-4 py-2 cursor-pointer">
                Follow
              </button>
              <button className="bg-primary rounded-md border-0 text-secondary px-4 py-2 cursor-pointer">
                Share
              </button>
            </div>
          </div>
          <div>
            <div className="flex gap-4 bg-gray-200 p-2 rounded-md mb-4">
              {tabs?.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 font-semibold rounded-md ${
                    activeTab === tab
                      ? "bg-primary text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div>
              {activeTab === "Overview" && (
                <div>
                  <p>{singleCourse?.description}</p>
                </div>
              )}
              {activeTab === "Reviews" && (
                <div>
                  {singleCourse?.reviews?.map((review) => (
                    <div
                      key={review}
                      className="border-2 rounded-xl p-4 border-primary"
                    >
                      <p className="text-lg font-semibold">{review?.comment}</p>
                      <div className="w-1/2 flex justify-between items-center gap-4 ">
                        <p>Rating: {review?.rating}</p>
                        <p>Date: {review?.date}</p>
                      </div>
                      <h5>Student: {review?.studentId}</h5>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "Faqs" && (
                <div>
                  {singleCourse?.FAQ?.map((faq, index) => (
                    <div key={faq?.index} className="mb-2 ">
                      <button
                        className="flex justify-between items-center w-full text-left text-lg font-medium bg-primary text-secondary p-2"
                        onClick={() => toggleFaq(index)}
                      >
                        {faq?.question}
                        {openFaq === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>
                      {openFaq === index && (
                        <p className="mt-2 text-black p-2 border-gray-400 border-2 border-t-0">
                          {faq?.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "Quizzes" && (
                <div className="">
                  {!submitted ? (
                    <div className="space-y-6">
                      {singleCourse?.quizzes?.map((quiz, index) => (
                        <div
                          key={index}
                          className="border-2 border-primary p-4 rounded-xl"
                        >
                          <h3 className="bg-primary text-secondary p-2 font-medium rounded-lg">
                            {quiz?.question}
                          </h3>
                          <div>
                            {quiz?.options?.map((option) => (
                              <label
                                key={option}
                                className="flex items-center space-x-2 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name={`quiz-${index}`} // Ensures only one answer per question
                                  value={option}
                                  checked={selectAns[quiz.question] === option}
                                  onChange={() =>
                                    handleSelect(quiz.question, option)
                                  }
                                  className="hidden peer"
                                />
                                <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center peer-checked:bg-primary peer-checked:border-4">
                                  <div className="w-2 h-2  rounded-full"></div>
                                </div>
                                <span
                                  className={`px-2 py-1 rounded ${
                                    selectAns[quiz.question] === option
                                      ? "text-green-800 font-bold"
                                      : ""
                                  }`}
                                >
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* SINGLE Submit Button for all Questions */}
                      <div className="w-1/3 mx-auto text-center">
                        <button
                          className="bg-primary text-secondary px-4 py-2 rounded-md"
                          onClick={handleSubmit}
                        >
                          Submit Quiz
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="w-full text-center text-xl font-semibold">
                        Your Score: {score} / {singleCourse?.quizzes?.length}
                      </h3>

                      {/* Show Correct Answers after Submission */}
                      {singleCourse?.quizzes?.map((quiz, index) => (
                        <div key={index} className="mt-4 p-4 border rounded-lg">
                          <h3 className="bg-primary text-secondary p-2 font-medium mb-2 rounded-lg">
                            {quiz?.question}
                          </h3>
                          {quiz?.options?.map((option) => (
                            <p
                              key={option}
                              className={`p-2 rounded-md ${
                                option === quiz.answer
                                  ? "bg-green-300"
                                  : selectAns[quiz.question] === option
                                  ? "bg-red-300"
                                  : ""
                              }`}
                            >
                              {option}
                            </p>
                          ))}
                        </div>
                      ))}

                      <div className="w-1/3 mx-auto text-center">
                        <button
                          className="mt-4 bg-primary text-secondary px-4 py-2 rounded-md"
                          onClick={() => {
                            setSubmitted(false);
                            setSelectAns({});
                            setScore(0);
                            // refetch();
                          }}
                        >
                          Retake Quiz
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1 border-0">
          {/* side bar */}
          <div className="">
            <div className="bg-secondary gap-2 items-center p-2 mb-2">
              {lessons?.map((lesson, index) => (
                <div key={index} className="mb-2">
                  <button
                    className="flex justify-between items-center w-full text-left text-lg font-medium bg-primary text-secondary p-2"
                    onClick={() => toggleLesson(index)}
                  >
                    {lesson?.title}
                    {openLesson === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openLesson === index && (
                    <div className="bg-secondary">
                      <button
                        className="text-black cursor-pointer p-2 border-gray-400 border-2 border-t-0"
                        onClick={() => handleOpenVideo(lesson?.videoUrl)}
                      >
                        Watch Video
                      </button>
                      <p className="mt-2 text-black p-2 border-gray-400 border-2 border-t-0">
                        Duration: {lesson?.duration}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-2 border-primary p-4"></div>
    </div>
  );
};

export default CourseDetails;
