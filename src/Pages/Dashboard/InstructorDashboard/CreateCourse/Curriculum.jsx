import { AiFillPlusCircle } from "react-icons/ai";
const Curriculum = () => {
    return (
        <div className="w-full h-full flex">
            <div className="w-[30%] border-r border-gray-100/50 flex flex-col gap-4 p-4">
                <h1 className="text-3xl font-semibold text-primary">Curriculum</h1>
                <div className="create-course w-full h-full border overflow-y-scroll">

                </div>
                <button className="flex gap-2 items-center justify-center w-full py-3 border border-primary rounded text-primary"><AiFillPlusCircle></AiFillPlusCircle> <span>New Section</span></button>
            </div>
            <div></div>
        </div>
    );
};

export default Curriculum;