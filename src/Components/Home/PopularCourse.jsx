
const PopularCourse = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div>
                <h1 className="">Online Learning</h1>
                <div className="flex col-span-2 justify-between items-center">
                    <h1 className="text-2xl font-bold">Popular Courses</h1>
                    <div className="flex justify-between gap-4">
                        <h1>All</h1>
                        <h1>Business</h1>
                        <h1>Marketing</h1>
                        <h1>Development</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mx-auto items-center text-center">
                <div>
                    <h1>Course 1</h1>
                </div>
                <div>
                    <h1>Course 2</h1>
                </div>
                <div>
                    <h1>Course 3</h1>
                </div>
                <div>
                    <h1>Course 4</h1>
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;