const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary">This is Blog Page</h1>
      <div className="grid mt-2 grid-cols-3">
        <div className=" border-2 border-slate-200 mr-0.5 grid-col-1">
          <div className="bg-gray-100 border-2 border-slate-200 mr-0.5 flex items-center justify-center">
            <div className="w-full max-w-xl p-4">
              <div className="flex flex-col  sm:flex-row">
                {/* Left: Input Field */}
                <input
                  type="text"
                  placeholder="Enter search term..."
                  className="flex-1 px-4 py-2 border rounded-l-sm border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Right: Search Button */}
                <button className="px-6 py-2 bg-blue-600 rounded-r-sm text-white hover:bg-blue-700 transition duration-200 shadow-md">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 border-2 border-slate-200  ">
            <h2 className="text-2xl ml-3 font-semibold text-gray-800 border-b-2 border-gray-300 inline-block pb-1">
              Category List
            </h2>

            <div className="w-full max-w-xl p-4 flex flex-col sm:flex-row gap-2">
              {/* Left: Category wise filter */}

              <h1>Category Name</h1>

              <div className="rounded-full ">
                <span className="inline-block ml-5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold">
                  12
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-700 col-span-2">
          <p>Right Side</p>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {};

export default Blog;
