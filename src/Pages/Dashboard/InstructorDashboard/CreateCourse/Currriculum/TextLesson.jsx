import { useParams } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useState } from "react";
import ReactQuill from "react-quill";


const TextLesson = () => {
    const [activeButton, setActiveButton] = useState(true);
    const [description, setDescription] = useState("");
    console.log('description', description)

    const handleContentChange = (value) => {
        setDescription(value);
    };

    const toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        // [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'font': [] }, { 'header': 1 }, { 'header': 2 }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        ['link', 'image', 'formula'], 
        ['blockquote', 'code-block'],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'align': [] }],
        ['clean']       
    ];

    const modules = {
        toolbar: toolbarOptions,
    };

    return (
        <div className="min-h-full flex flex-col w-full bg-white">
        {/* Main Content */}
            <div className="w-full py-2 px-5 rounded bg-white flex-grow overflow-y-auto">
                <div className="w-full flex flex-col gap-4">
                    {/* Lesson title */}
                    <div className="flex items-center gap-2 h-10 w-full">
                        <div className="flex items-center h-full w-full">
                            <button className="flex items-center gap-2 h-full w-40 bg-secondary text-primary p-2 rounded rounded-r-none">
                                <IoDocumentTextOutline className="text-xl" />
                                <span>Text Lesson</span>
                            </button>
                            <input 
                                placeholder="Enter Lesson Name" 
                                type="text" 
                                name="lessonTitle" 
                                className="h-full w-full px-3 py-2 border border-secondary rounded rounded-l-none focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200" 
                            />
                        </div>
                        <button disabled className="h-full px-3 rounded bg-primary text-secondary disabled:bg-gray-600/50">Save</button>
                    </div>
                    {/* Tab */}
                    <div className="bg-secondary h-10 p-1 w-fit rounded flex items-center">
                        <button onClick={()=>{setActiveButton(true)}} className={`${activeButton&& "bg-white text-primary"} h-full px-18 rounded`}>Lesson</button>
                        <button  onClick={()=>{setActiveButton(false)}} className={`${!activeButton && "bg-white text-primary"} h-full px-18 rounded`}>Q&A</button>
                    </div>
                    {/* Lesson Content */}
                    
                    <div className="w-full flex flex-col gap-4">
                        {/* Duration */}
                        <div className=" flex flex-col gap-1 w-1/2">
                            <h2 className="text-sm font-semibold">Lesson Duration</h2>
                            <input 
                                placeholder="Lesson Duration" 
                                type="text" 
                                name="duration" 
                                className="h-full w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200" 
                            />
                        </div>
                        {/* Short Description */}
                        <div className=" flex flex-col gap-1 w-full">
                            <h2 className="text-sm font-semibold">Description of the lesson</h2>
                            <ReactQuill 
                                theme="snow" 
                                value={description}
                                modules={modules}
                                onChange={handleContentChange} 
                                placeholder="Write your lesson description here..." 
                                className="bg-white w-full"
                            />
                        </div>
                        {/* Lesson Materials */}
                        <div className=" flex flex-col gap-1 w-full h-50">
                            <h2 className="text-sm font-semibold">Lesson Materials</h2>
                            <div className="w-full h-full flex items-center justify-center border-dashed rounded bg-secondary">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* Fixed Bottom Button */}
            <div className="w-full h-15 border flex justify-end px-5 py-2 bg-white">
                <button disabled className="h-full px-5 rounded bg-primary text-secondary disabled:bg-gray-600/50">Save</button>
            </div>
        </div>
        
    );
};

export default TextLesson;