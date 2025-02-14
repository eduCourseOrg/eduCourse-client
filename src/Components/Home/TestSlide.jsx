import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { PiQuotesFill } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";

const TestSlide = () => {
    const [id, setId] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (id === 4) {
                setId(0)
            } else {
                setId(prevCount => prevCount + 1); 
            }
        }, 4000);
        return () => {
            clearInterval(intervalId);
        };
    }, [id]); 
    return (
        <div className="w-full h-[80vh] flex items-center justify-center bg-secondary">
            <div className="w-[90%] h-[80%] flex items-center justify-center relative">
                <div id="0" className={`${id == 0 ? 'animate-[reviewZ_1s_forwards] shadow-2xl shadow-gray-500' : (id == 0 + 1) ? ' animate-[reviewPlus_1s_forwards]' : (id == 0 - 1) ? 'animate-[reviewBefore_1s_forwards]' : '-scale-0'} w-[35%] h-full bg-white  absolute p-4 flex flex-col gap-6 rounded-lg`}>
                <h1 className="text-6xl font-bold text-primary"><PiQuotesFill ></PiQuotesFill></h1>
                <h2 className="font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat amet quas reiciendis, sapiente suscipit distinctio! Repellendus fugit similique error impedit iste, deserunt dolores. Ea provident laborum vero pariatur ab?</h2>
                <div className="flex items-center">
                    <FaStar className="text-yellow-400"></FaStar>
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <h2 className="ml-2"> 4.5 ratings</h2>
                </div>
                <hr />
                <div className="grow flex items-center gap-2">
                    {/* <img src="" alt="avatar image" className="w-[60px] h-[60px] rounded-[100%]"/> */}
                    <FaCircleUser className="w-[50px] h-[50px] rounded-[100%]"></FaCircleUser>
                    <h1 className="flex flex-col gap-0 items-start">
                        <span className="font-bold text-lg">Some text</span>
                        <span className="text-sm">Some text 2</span>
                    </h1>
                </div>
            </div>
            
           <div id="1" className={`${id == 1 ? 'animate-[reviewZ_1s_forwards] shadow-2xl shadow-gray-500' : (id == 1 + 1) ? ' animate-[reviewPlus_1s_forwards]' : (id == 1 - 1) ? 'animate-[reviewBefore_1s_forwards]' : '-scale-0'} w-[35%] h-full bg-white  absolute p-4 flex flex-col gap-6 rounded-lg`}>
                <h1 className="text-6xl font-bold text-primary"><PiQuotesFill ></PiQuotesFill></h1>
                <h2 className="font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat amet quas reiciendis, sapiente suscipit distinctio! Repellendus fugit similique error impedit iste, deserunt dolores. Ea provident laborum vero pariatur ab?</h2>
                <div className="flex items-center">
                    <FaStar className="text-yellow-400"></FaStar>
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <h2 className="ml-2"> 4.5 ratings</h2>
                </div>
                <hr />
                <div className="grow flex items-center gap-2">
                    {/* <img src="" alt="avatar image" className="w-[60px] h-[60px] rounded-[100%]"/> */}
                    <FaCircleUser className="w-[50px] h-[50px] rounded-[100%]"></FaCircleUser>
                    <h1 className="flex flex-col gap-0 items-start">
                        <span className="font-bold text-lg">Some text</span>
                        <span className="text-sm">Some text 2</span>
                    </h1>
                </div>
            </div>
            
           <div id="2" className={`${id == 2 ? 'animate-[reviewZ_1s_forwards] shadow-2xl shadow-gray-500' : (id == 2 + 1) ? ' animate-[reviewPlus_1s_forwards]' : (id == 2 - 1) ? 'animate-[reviewBefore_1s_forwards]' : '-scale-0'} w-[35%] h-full bg-white  absolute p-4 flex flex-col gap-6 rounded-lg`}>
                <h1 className="text-6xl font-bold text-primary"><PiQuotesFill ></PiQuotesFill></h1>
                <h2 className="font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat amet quas reiciendis, sapiente suscipit distinctio! Repellendus fugit similique error impedit iste, deserunt dolores. Ea provident laborum vero pariatur ab?</h2>
                <div className="flex items-center">
                    <FaStar className="text-yellow-400"></FaStar>
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <h2 className="ml-2"> 4.5 ratings</h2>
                </div>
                <hr />
                <div className="grow flex items-center gap-2">
                    {/* <img src="" alt="avatar image" className="w-[60px] h-[60px] rounded-[100%]"/> */}
                    <FaCircleUser className="w-[50px] h-[50px] rounded-[100%]"></FaCircleUser>
                    <h1 className="flex flex-col gap-0 items-start">
                        <span className="font-bold text-lg">Some text</span>
                        <span className="text-sm">Some text 2</span>
                    </h1>
                </div>
            </div>
            
           <div id="3" className={`${id == 3 ? 'animate-[reviewZ_1s_forwards] shadow-2xl shadow-gray-500' : (id == 3 + 1) ? ' animate-[reviewPlus_1s_forwards]' : (id == 3 - 1) ? 'animate-[reviewBefore_1s_forwards]' : '-scale-0'} w-[35%] h-full bg-white  absolute p-4 flex flex-col gap-6 rounded-lg`}>
                <h1 className="text-6xl font-bold text-primary"><PiQuotesFill ></PiQuotesFill></h1>
                <h2 className="font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat amet quas reiciendis, sapiente suscipit distinctio! Repellendus fugit similique error impedit iste, deserunt dolores. Ea provident laborum vero pariatur ab?</h2>
                <div className="flex items-center">
                    <FaStar className="text-yellow-400"></FaStar>
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <h2 className="ml-2"> 4.5 ratings</h2>
                </div>
                <hr />
                <div className="grow flex items-center gap-2">
                    {/* <img src="" alt="avatar image" className="w-[60px] h-[60px] rounded-[100%]"/> */}
                    <FaCircleUser className="w-[50px] h-[50px] rounded-[100%]"></FaCircleUser>
                    <h1 className="flex flex-col gap-0 items-start">
                        <span className="font-bold text-lg">Some text</span>
                        <span className="text-sm">Some text 2</span>
                    </h1>
                </div>
            </div>
            
           <div id="4" className={`${id == 4 ? 'animate-[reviewZ_1s_forwards] shadow-2xl shadow-gray-500' : (id == 4 + 1) ? ' animate-[reviewPlus_1s_forwards]' : (id == 4 - 1) ? 'animate-[reviewBefore_1s_forwards]' : '-scale-0'} w-[35%] h-full bg-white  absolute p-4 flex flex-col gap-6 rounded-lg`}>
                <h1 className="text-6xl font-bold text-primary"><PiQuotesFill ></PiQuotesFill></h1>
                <h2 className="font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat amet quas reiciendis, sapiente suscipit distinctio! Repellendus fugit similique error impedit iste, deserunt dolores. Ea provident laborum vero pariatur ab?</h2>
                <div className="flex items-center">
                    <FaStar className="text-yellow-400"></FaStar>
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <FaStar className="text-yellow-400"></FaStar> 
                    <h2 className="ml-2"> 4.5 ratings</h2>
                </div>
                <hr />
                <div className="grow flex items-center gap-2">
                    {/* <img src="" alt="avatar image" className="w-[60px] h-[60px] rounded-[100%]"/> */}
                    <FaCircleUser className="w-[50px] h-[50px] rounded-[100%]"></FaCircleUser>
                    <h1 className="flex flex-col gap-0 items-start">
                        <span className="font-bold text-lg">Some text</span>
                        <span className="text-sm">Some text 2</span>
                    </h1>
                </div>
            </div>
             </div>
        </div>
    );
};

export default TestSlide;