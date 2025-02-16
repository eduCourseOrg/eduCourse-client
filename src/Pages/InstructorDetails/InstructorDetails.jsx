import { FaCalendarAlt, FaClock, FaFacebook, FaGraduationCap, FaInstagram, FaLinkedin, FaStar, FaStarHalfAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot, FaTrophy } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SlEarphones } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";
import { MdPlayArrow } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import courseBanner1 from '/images/course-banner/course-banner-3.jpg'

import profile from '/images/course-banner/course-banner-8.jpg'
const InstructorProfile = () => {
  return (
      <div className="w-full flex flex-col gap-5 bg-[var(--color-secondary)]">
          <div className="w-full p-4 flex gap-5 bg-[var(--color-secondary)]">
             {/* Left Sidebar */}
          <div className="w-[30%] flex flex-col gap-8 items-center">
              {/* Profile Section */}
              <div className="w-full h-auto flex flex-col items-center gap-3 rounded-lg p-2 shadow-lg shadow-gray-400 bg-white">
                  <img src={profile} alt="Instructor Profile Image" className="w-full h-auto rounded-lg" />
                  <div className="flex items-center justify-center gap-3">
                      <h1 className="flex items-center gap-1 text-yellow-500">
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStarHalfAlt></FaStarHalfAlt>
                      </h1>
                      <h2>4.5/5.0</h2>
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaFacebook></FaFacebook></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaInstagram></FaInstagram></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaTwitter></FaTwitter></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaLinkedin></FaLinkedin></span>
                  </div>
              </div>


              {/* Education and Skills Section */}
              <div className="w-full h-auto flex flex-col gap-3 rounded-lg p-2 shadow-lg shadow-gray-400 bg-white">
                  {/* Education */}
                  <div className="py-5 px-2 flex flex-col gap-5 items-start">
                      <h1 className="text-[var(--color-primary)] text-3xl font-bold">Education</h1>
                      <div className="flex items-center gap-3">
                        <span className="rounded p-3 bg-[var(--color-primary)] text-[var(--color-secondary)] text-xl"><FaGraduationCap /></span>
                        <h2 className="flex flex-col items-start gap-0">
                            <span className="font-semibold">Harvard University</span>
                            <span className="text-sm">Bachelor In Computer Science</span>
                        </h2>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="rounded p-3 bg-[var(--color-primary)] text-[var(--color-secondary)] text-xl"><FaGraduationCap /></span>
                        <h2 className="flex flex-col items-start gap-0">
                            <span className="font-semibold">Harvard University</span>
                            <span className="text-sm">Bachelor In Computer Science</span>
                        </h2>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="rounded p-3 bg-[var(--color-primary)] text-[var(--color-secondary)] text-xl"><FaGraduationCap /></span>
                        <h2 className="flex flex-col items-start gap-0">
                            <span className="font-semibold">Harvard University</span>
                            <span className="text-sm">Bachelor In Computer Science</span>
                        </h2>
                      </div>
                  </div>
                  {/* Horizontal Line */}
                  <hr className="w-full h-1 bg-[var(--color-secondary)]"/>
                  {/* Skills */}
                  <div className="py-4 px-2 flex flex-col gap-5 items-start mb-3">
                      <h1 className="text-[var(--color-primary)] text-3xl font-bold">Education</h1>
                      <div className="w-full flex flex-col gap-1">
                          <h3 className="flex items-center justify-between">
                              <span>Graphics Design</span>
                              <span>90%</span>
                          </h3>
                          <div className="h-1 w-full bg-[var(--color-secondary)]">
                              <div className="h-1 w-[90%] bg-blue-700"></div>
                          </div>
                      </div>
                      <div className="w-full flex flex-col gap-1">
                          <h3 className="flex items-center justify-between">
                              <span>Web Design</span>
                              <span>70%</span>
                          </h3>
                          <div className="h-1 w-full bg-[var(--color-secondary)]">
                              <div className="h-1 w-[70%] bg-green-700"></div>
                          </div>
                      </div>
                      <div className="w-full flex flex-col gap-1">
                          <h3 className="flex items-center justify-between">
                              <span>Html and CSS</span>
                              <span>60%</span>
                          </h3>
                          <div className="h-1 w-full bg-[var(--color-secondary)]">
                              <div className="h-1 w-[60%] bg-yellow-500"></div>
                          </div>
                      </div>
                      <div className="w-full flex flex-col gap-1">
                          <h3 className="flex items-center justify-between">
                              <span>UI/UX</span>
                              <span>50%</span>
                          </h3>
                          <div className="h-1 w-full bg-[var(--color-secondary)]">
                              <div className="h-1 animate-[progressAnimation_2s_ease-in-out_forwards] bg-red-600"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          {/* RightSide Content */}
          <div className="w-[70%] grow flex flex-col gap-7 rounded-lg p-4 bg-white shadow-md shadow-gray-500">
              {/* Profile Name section */}
              <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">Hi, I am</h3>
                  <h2 className="text-4xl font-bold">Ariful Islam</h2>
                  <h3>Web Developer</h3>
              </div>


              {/* Profile Details Section */}
              <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-5">
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos temporibus perferendis, explicabo quia hic. Animi ab nostrum ut sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem vel, impedit quae, veritatis assumenda nostrum non est perspiciatis debitis saepe porro facilis natus cupiditate, rem illo sint. Provident ratione quod deserunt at voluptatem ea pariatur sunt eligendi earum sapiente!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi nihil voluptatum nulla eveniet? Aliquam ex ullam harum quibusdam odit voluptate vel magnam dolorum. Cumque, laudantium. Ea quis voluptas quia sed, qui, sapiente atque culpa dolor nesciunt ducimus rerum! Ducimus laboriosam quis iste eos, autem animi? Earum autem possimus animi sunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam unde natus placeat? Architecto, voluptatum soluta nihil veniam ullam neque amet alias quasi ex molestiae suscipit ipsa aliquam dicta? Eius voluptas, consequatur neque tempora nemo maxime, accusamus alias magnam ea magni, unde est. Ipsum amet magnam voluptatem officiis quod nisi minus?</p>
                  </div>
                  <div className="flex flex-col gap-4">
                      <p className="flex items-center">
                          <FaLocationDot className="text-[var(--color-primary)] mr-5 text-lg"></FaLocationDot>
                          <span className="font-bold">Address</span> : Chattogram, Bangladesh 
                      </p>
                      <p className="flex items-center">
                          <IoIosMail className="text-[var(--color-primary)] mr-5 text-lg"></IoIosMail>
                          <span className="font-bold">Email</span> : webquads.dev@gmail.com 
                      </p>
                      <p className="flex items-center">
                          <SlEarphones className="text-[var(--color-primary)] mr-5 text-lg"></SlEarphones>
                          <span className="font-bold">Phone</span> : +880 154699755 
                      </p>
                      <p className="flex items-center">
                          <TbWorld className="text-[var(--color-primary)] mr-5 text-lg"></TbWorld>
                          <span className="font-bold">Website</span> : educourse.com 
                      </p>
                      <p></p>
                      <p></p>
                  </div>
              </div>


              {/* Profile Total courses and total student section */}
              <div className="flex items-center gap-4 w-full h-[70px]">
                  <div className="w-full h-full flex items-center gap-3">
                      <div className="w-[25%] h-full rounded-xl bg-[var(--color-primary)] text-3xl text-[var(--color-secondary)] flex items-center justify-center">
                          <MdPlayArrow></MdPlayArrow>
                      </div>
                      <div className="">
                          <h3 className="text-3xl font-bold">10+</h3>
                          <h3 className="text-lg font-semibold">Total Courses</h3>
                      </div>
                  </div>
                  <div className="w-full h-full flex items-center gap-3">
                      <div className="w-[25%] h-full rounded-xl bg-[var(--color-primary)] text-3xl text-[var(--color-secondary)] flex items-center justify-center">
                          <IoIosPeople></IoIosPeople>
                      </div>
                      <div className="">
                          <h3 className="text-3xl font-bold">10K+</h3>
                          <h3 className="text-lg font-semibold">Total Students</h3>
                      </div>
                  </div>
                  <div className="w-full h-full flex items-center gap-3">
                      <div className="w-[25%] h-full rounded-xl bg-[var(--color-primary)] text-3xl text-[var(--color-secondary)] flex items-center justify-center">
                          <FaTrophy></FaTrophy>
                      </div>
                      <div className="">
                          <h3 className="text-3xl font-bold">11+</h3>
                          <h3 className="text-lg font-semibold">Years in Experience</h3>
                      </div>
                  </div>
              </div>




              {/* Couses List Card */}
              <div className="py-5 flex flex-col gap-4">
                  <h1 className="text-4xl font-bold">Courses List</h1>
                  <div className="w-full grid grid-cols-2 gap-4 rounded-lg bg-[var(--color-secondary)] p-2">
                      
                      {/* Card One */}
                    <div className="w-full bg-white shadow shadow-gray-400 rounded-lg">
                        <div className="w-full h-[45%] mb-3">
                            <img src={courseBanner1} alt="" className="w-full h-full rounded-t-lg" />
                        </div>
                        {/* Card Content Section */}
                        <div className="w-full h-[52%] px-3 flex flex-col gap-1">
                            <h1 className="text-2xl font-bold">Intoduction to web developer</h1>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold">By: Md. Foysal Uddin</span>
                                <h2 className="text-xl font-bold">$99</h2>
                            </div>
                            <div>
                                <h2 className="flex items-center">
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar> 
                                    <FaStar className="text-yellow-400"></FaStar> 
                                    <FaStar className="text-yellow-400"></FaStar> 
                                    <FaStar className="text-yellow-400"></FaStar> 
                                    (2)
                                </h2>
                            </div>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, modi.</h3>
                            <hr className="bg-primary h-[2px] mt-5"/>
                            <div className="flex items-center justify-between font-semibold grow ">
                                <span className="flex items-center gap-1"><FaClock></FaClock> 3 Days</span>
                                <span className="flex items-center gap-1"><FaCalendarAlt></FaCalendarAlt> Beginner</span>
                            </div>
                        </div>
                      </div>
                      
                      {/* Card Two */}
                    <div className="w-full bg-white shadow shadow-gray-400 rounded-lg">
                        <div className="w-full h-[45%] mb-3">
                            <img src={courseBanner1} alt="" className="w-full h-full rounded-t-lg" />
                        </div>
                        {/* Card Content Section */}
                        <div className="w-full h-[52%] px-3 flex flex-col gap-1">
                            <h1 className="text-2xl font-bold">Intoduction to web developer</h1>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold">By: Md. Foysal Uddin</span>
                                <h2 className="text-xl font-bold">$99</h2>
                            </div>
                            <div>
                                <h2 className="flex items-center">
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar> 
                                    <FaStar className="text-yellow-400"></FaStar> 
                                    <FaStar className="text-yellow-400"></FaStar> 
                                    <FaStar className="text-yellow-400"></FaStar> 
                                    (2)
                                </h2>
                            </div>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, modi.</h3>
                            <hr className="bg-primary h-[2px] mt-5"/>
                            <div className="flex items-center justify-between font-semibold grow ">
                                <span className="flex items-center gap-1"><FaClock></FaClock> 3 Days</span>
                                <span className="flex items-center gap-1"><FaCalendarAlt></FaCalendarAlt> Beginner</span>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div> 
          </div>
          <div className="w-full flex flex-col gap-4 p-4">
              <h1 className="text-4xl font-bold">Related Instructos</h1>
              <div className="grid grid-cols-4 gap-3">
                  {/* Card One */}
                  <div className="w-full h-auto flex flex-col items-center gap-3 rounded-lg p-2 shadow-lg shadow-gray-400 bg-white">
                  <img src={profile} alt="Instructor Profile Image" className="w-full h-auto rounded-lg" />
                  <div className="flex items-center justify-center gap-3">
                      <h1 className="flex items-center gap-1 text-yellow-500">
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStarHalfAlt></FaStarHalfAlt>
                      </h1>
                      <h2>4.5/5.0</h2>
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaFacebook></FaFacebook></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaInstagram></FaInstagram></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaTwitter></FaTwitter></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaLinkedin></FaLinkedin></span>
                  </div>
                  </div>
                  {/* Card Two */}
                  <div className="w-full h-auto flex flex-col items-center gap-3 rounded-lg p-2 shadow-lg shadow-gray-400 bg-white">
                  <img src={profile} alt="Instructor Profile Image" className="w-full h-auto rounded-lg" />
                  <div className="flex items-center justify-center gap-3">
                      <h1 className="flex items-center gap-1 text-yellow-500">
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStarHalfAlt></FaStarHalfAlt>
                      </h1>
                      <h2>4.5/5.0</h2>
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaFacebook></FaFacebook></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaInstagram></FaInstagram></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaTwitter></FaTwitter></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaLinkedin></FaLinkedin></span>
                  </div>
                    </div>
                  {/* Card Three */}
                  <div className="w-full h-auto flex flex-col items-center gap-3 rounded-lg p-2 shadow-lg shadow-gray-400 bg-white">
                  <img src={profile} alt="Instructor Profile Image" className="w-full h-auto rounded-lg" />
                  <div className="flex items-center justify-center gap-3">
                      <h1 className="flex items-center gap-1 text-yellow-500">
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStarHalfAlt></FaStarHalfAlt>
                      </h1>
                      <h2>4.5/5.0</h2>
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaFacebook></FaFacebook></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaInstagram></FaInstagram></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaTwitter></FaTwitter></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaLinkedin></FaLinkedin></span>
                  </div>
                    </div>
                  {/* Card Four */}
                  <div className="w-full h-auto flex flex-col items-center gap-3 rounded-lg p-2 shadow-lg shadow-gray-400 bg-white">
                  <img src={profile} alt="Instructor Profile Image" className="w-full h-auto rounded-lg" />
                  <div className="flex items-center justify-center gap-3">
                      <h1 className="flex items-center gap-1 text-yellow-500">
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStarHalfAlt></FaStarHalfAlt>
                      </h1>
                      <h2>4.5/5.0</h2>
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaFacebook></FaFacebook></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaInstagram></FaInstagram></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaTwitter></FaTwitter></span>
                      <span className="p-2 rounded text-xs text-[var(--color-secondary)] bg-[var(--color-primary)]"><FaLinkedin></FaLinkedin></span>
                  </div>
                    </div>
              </div>
          </div>
      </div>
  );
}
export default InstructorProfile;
