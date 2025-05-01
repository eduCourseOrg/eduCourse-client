import { BsClipboard2Data } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import {
  MdArrowForward,
  MdDriveFileRenameOutline,
  MdUpdate,
} from "react-icons/md";

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary">This is Blog Page</h1>
      {/* <div className="fixed top-0 left-0 w-full z-50">
        <div className="relative h-60 w-full">
     
          <img
            src="https://i.ibb.co.com/35NQpxR8/learn-banner-3.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />

     
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div> */}
      <div className="grid mt-2 grid-cols-1  lg:grid-cols-3 gap-4">
        <div className="  mr-2 sm:m-auto order-2 lg:order-1 grid-cols-1">
          {/* Content for search box start */}
          <div className="bg-gray-100 border-2 w-full max-w-xl p-4 border-slate-200 mr-2 mb-2">
            <h2 className="text-2xl ml-3 font-semibold my-2 text-gray-800 border-b-2 border-gray-300 inline-block pb-1">
              Search
            </h2>
            <div className="flex flex-col  md:flex-row">
              {/* Left: Input Field */}
              <input
                type="text"
                placeholder="Enter search term..."
                className="flex-1 px-4 py-2 border rounded-l-sm border-gray-300 shadow-sm focus:outline-none focus:bg-slate-200 focus:ring-primary focus:border-transparent"
              />

              {/* Right: Search Button */}
              <button className="px-6 py-2 hover:ring-2 hover:ring-green-800 bg-primary rounded-r-sm text-white hover:bg-green-900 transition duration-200 shadow-md">
                Search
              </button>
            </div>
          </div>

          {/* Content for Search box end */}

          {/* Content for categories start */}
          <div className="bg-gray-100 border-2 w-full max-w-xl p-4 border-slate-200 mr-2 mb-2 ">
            <h2 className="text-2xl ml-3 font-semibold text-gray-800 border-b-2 border-gray-300 inline-block pb-1">
              Category List
            </h2>

            <div className="w-full max-w-xl p-4 flex justify-between flex-col sm:flex-row">
              {/* Left: Category wise filter */}
              <div className="flex items-center gap-2">
                <BsClipboard2Data />
                <h1>Web Development</h1>
              </div>

              <div className="rounded-full ">
                <span className="inline-block ml-5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold">
                  12
                </span>
              </div>
            </div>
            <div className="w-full max-w-xl p-4 flex justify-between flex-col sm:flex-row">
              {/* Left: Category wise filter */}
              <div className="flex items-center gap-2">
                <BsClipboard2Data />
                <h1>Networking</h1>
              </div>

              <div className="rounded-full ">
                <span className="inline-block ml-5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold">
                  15
                </span>
              </div>
            </div>
          </div>

          {/* Content for categories end*/}
          {/* Content for Recent post start */}
          <div className="bg-gray-100 border-2 w-full max-w-xl p-4 border-slate-200 mr-2 mb-2 ">
            <h2 className="text-2xl ml-3 font-semibold text-gray-800 border-b-2 border-gray-300 inline-block pb-1">
              Recent Posts
            </h2>

            <div className="my-2">
              {" "}
              <article className="flex bg-white transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25">
                <div className=" sm:block sm:basis-56">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10">
                    <a href="#">
                      <h3 className="font-bold text-gray-900 uppercase dark:text-white">
                        Finding the right guitar for your style - 5 tips
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae dolores, possimus pariatur animi temporibus
                      nesciunt praesentium
                    </p>
                  </div>
                  <dl className="mt-6 m-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    {/* Published Date on the Left */}
                    <div className="flex items-center gap-2">
                      <dt className="text-gray-700">
                        <span className="sr-only">Published on</span>
                        <MdUpdate className="text-gray-700 size-5" />
                      </dt>
                      <dd className="text-xs text-gray-700">31/06/2025</dd>
                    </div>

                    {/* Author Name on the Right */}
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <MdDriveFileRenameOutline className="text-gray-700 size-5" />
                      <strong>By:</strong> John Doe
                    </div>
                  </dl>
                </div>
              </article>
            </div>
            <div className="my-2">
              {" "}
              <article className="flex bg-white transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25">
                <div className="hidden sm:block sm:basis-56">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10">
                    <a href="#">
                      <h3 className="font-bold text-gray-900 uppercase dark:text-white">
                        Finding the right guitar for your style - 5 tips
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae dolores, possimus pariatur animi temporibus
                      nesciunt praesentium
                    </p>
                  </div>
                  <dl className="mt-6 flex m-2 flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    {/* Published Date on the Left */}
                    <div className="flex items-center gap-2">
                      <dt className="text-gray-700">
                        <span className="sr-only">Published on</span>
                        <MdUpdate className="text-gray-700 size-5" />
                      </dt>
                      <dd className="text-xs text-gray-700">31/06/2025</dd>
                    </div>

                    {/* Author Name on the Right */}
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <MdDriveFileRenameOutline className="text-gray-700 size-5" />
                      <strong>By:</strong> John Doe
                    </div>
                  </dl>
                </div>
              </article>
            </div>
          </div>
          {/* Content for Recent post end */}
          {/* Content for Archives start */}
          <div className="bg-gray-100 border-2 w-full max-w-xl p-4 border-slate-200 mr-2 mb-2 ">
            <h2 className="text-2xl ml-3 font-semibold text-gray-800 border-b-2 border-gray-300 inline-block pb-1">
              Archives
            </h2>

            <div className="w-full max-w-xl p-4 flex justify-between flex-col  gap-2">
              {/* Left: Category wise filter */}
              <div className="flex items-center gap-2">
                <CgCalendarDates className=" text-xl text-primary" />
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  10th Oct 2022{" "}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <CgCalendarDates className=" text-xl text-primary" />
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  5th February 2025{" "}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <CgCalendarDates className=" text-xl text-primary" />
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  13th December 2024{" "}
                </time>
              </div>
            </div>
          </div>

          {/* Content for archives end*/}

          {/* Content for Gallery start */}
          <div className="bg-gray-100 border-2 w-full max-w-xl p-4 border-slate-200 mr-2 mb-2 ">
            <h2 className="text-2xl ml-3 font-semibold text-gray-800 border-b-2 border-gray-300 inline-block pb-1">
              Gallery
            </h2>

            <div className="w-full max-w-xl p-4 grid grid-cols-3 gap-2">
              {/* Left: Category wise filter */}
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-34 w-full object-cover"
              />
              <img
                alt=""
                src="https://i.ibb.co.com/6RGBq1Rz/course-banner-1.jpg"
                className="h-34 w-full object-cover"
              />
              <img
                alt=""
                src="https://i.ibb.co.com/sv2r5c3g/course-banner-2.jpg"
                className="h-34 w-full object-cover"
              />
              <img
                alt=""
                src="https://i.ibb.co.com/t6pVb05/course-banner-4.jpg"
                className="h-34 w-full object-cover"
              />
              <img
                alt=""
                src="https://i.ibb.co.com/Xkr2PwjG/course-banner-6.jpg"
                className="h-34 w-full object-cover"
              />
              <img
                alt=""
                src="https://i.ibb.co.com/KjrrPTSt/course-banner-8.jpg"
                className="h-34 w-full object-cover"
              />
            </div>
          </div>

          {/* Content for Gallery end*/}
        </div>

        {/* content for right side column start */}
        <div className=" order-1 lg:order-2 lg:col-span-2">
          <div className="w-3/4 mx-auto">
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
              <img
                alt=""
                src="https://i.ibb.co.com/HLpT8SwC/banner-5.jpg"
                className="h-76 w-full object-cover"
              />

              <div className=" p-4 sm:p-6">
                <div className="border-b-3 pb-2 border-slate-200">
                  <div className="flex items-center gap-2 text-xs  text-gray-500">
                    <div className="flex items-center justify-center gap-1 text-gray-500">
                      <FaUser className="text-xl text-primary" />{" "}
                      <span className="text-md font-semibold"> Admin</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-500">
                      {" "}
                      <CgCalendarDates className=" text-xl text-primary" />
                      <time
                        dateTime="2022-10-10"
                        className="block text-xs text-gray-500"
                      >
                        {" "}
                        10th Oct 2022{" "}
                      </time>
                    </div>
                  </div>
                </div>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
              <div className="m-5">
                {" "}
                <a
                  href="#"
                  className="group inline-flex items-center justify-between gap-4 rounded-lg border border-primary px-5 py-3 text-primary transition-colors duration-300 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <span className="font-medium transition-colors group-hover:text-white">
                    Find out more
                  </span>

                  <span className="inline-flex items-center justify-center rounded-full border border-primary bg-white p-2 shadow-sm group-hover:bg-green-700 group-hover:border-white">
                    <MdArrowForward className="size-5 text-bg-green-600 group-hover:text-white transition-transform rtl:rotate-180" />
                  </span>
                </a>
              </div>
            </article>
          </div>

          <div className="w-3/4 mx-auto">
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
              <img
                alt=""
                src="https://i.ibb.co.com/yFLZRw9c/course-banner-7.jpg"
                className="h-76 w-full object-cover"
              />

              <div className=" p-4 sm:p-6">
                <div className="border-b-3 pb-2 border-slate-200">
                  <div className="flex items-center gap-2 text-xs  text-gray-500">
                    <div className="flex items-center justify-center gap-1 text-gray-500">
                      <FaUser className="text-xl text-primary" />{" "}
                      <span className="text-md font-semibold"> Admin</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-500">
                      {" "}
                      <CgCalendarDates className=" text-xl text-primary" />
                      <time
                        dateTime="2022-10-10"
                        className="block text-xs text-gray-500"
                      >
                        {" "}
                        10th Oct 2022{" "}
                      </time>
                    </div>
                  </div>
                </div>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
              <div className="m-5">
                {" "}
                <a
                  href="#"
                  className="group inline-flex items-center justify-between gap-4 rounded-lg border border-primary px-5 py-3 text-primary transition-colors duration-300 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <span className="font-medium transition-colors group-hover:text-white">
                    Find out more
                  </span>

                  <span className="inline-flex items-center justify-center rounded-full border border-primary bg-white p-2 shadow-sm group-hover:bg-green-700 group-hover:border-white">
                    <MdArrowForward className="size-5 text-bg-green-600 group-hover:text-white transition-transform rtl:rotate-180" />
                  </span>
                </a>
              </div>
            </article>
          </div>
          <div className="w-3/4 mx-auto">
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
              <img
                alt=""
                src="https://i.ibb.co.com/KjrrPTSt/course-banner-8.jpg"
                className="h-76 w-full object-cover"
              />

              <div className=" p-4 sm:p-6">
                <div className="border-b-3 pb-2 border-slate-200">
                  <div className="flex items-center gap-2 text-xs  text-gray-500">
                    <div className="flex items-center justify-center gap-1 text-gray-500">
                      <FaUser className="text-xl text-primary" />{" "}
                      <span className="text-md font-semibold"> Admin</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-500">
                      {" "}
                      <CgCalendarDates className=" text-xl text-primary" />
                      <time
                        dateTime="2022-10-10"
                        className="block text-xs text-gray-500"
                      >
                        {" "}
                        10th Oct 2022{" "}
                      </time>
                    </div>
                  </div>
                </div>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
              <div className="m-5">
                {" "}
                <a
                  href="#"
                  className="group inline-flex items-center justify-between gap-4 rounded-lg border border-primary px-5 py-3 text-primary transition-colors duration-300 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <span className="font-medium transition-colors group-hover:text-white">
                    Find out more
                  </span>

                  <span className="inline-flex items-center justify-center rounded-full border border-primary bg-white p-2 shadow-sm group-hover:bg-green-700 group-hover:border-white">
                    <MdArrowForward className="size-5 text-bg-green-600 group-hover:text-white transition-transform rtl:rotate-180" />
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>

        {/* content for right side column end */}
      </div>
    </div>
  );
};

Blog.propTypes = {};

export default Blog;
