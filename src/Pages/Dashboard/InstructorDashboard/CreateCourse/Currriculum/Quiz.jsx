/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrFormEdit } from "react-icons/gr";
import { RiImageAddFill } from "react-icons/ri";
import { RxSquare } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import ReactQuill from "react-quill";

const Quiz = () => {
    const [activeButton, setActiveButton] = useState("questions");
    const [description1, setDescription1] = useState('');
    const [description2, setDescription2] = useState('');
    const [select, setSelect] = useState("single-choice");
    const [selectPosition, setSelectPosition] = useState('');
    const [data, setData] = useState([]);

    // const handleContentChange1 = (value) => {
    //     console.log('typed', value);
    //     setDescription1(value);
    // };
    // const handleContentChange2 = (value) => {
    //     console.log('typed', value);
    //     setDescription2(value);
    // };


    const toolbarOptions = [
        // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        // [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'font': [] }, { 'header': 1 }, { 'header': 2 }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'align': [] }],
        ['clean']       
    ];

    const modules = {
        toolbar: toolbarOptions,
    };

    const handleQuestionAdd = (e) => {
        if (e.key === "Enter") {
            const question = {
                title: description1,
                type: select,
                answere: [e.target.value]
            }
            setData(prevData => ([...prevData, question]));
        }
    };

    const CreateComponent = () => {
        return (
            <div className="w-full border-2 border-dashed border-gray-300 py-5 flex items-center justify-center bg-white rounded">
                <select name="questionSelect" id="" className="w-[20%] px-2 py-1 border rounded">
                    <option value="single-choice">Single Choice</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-false">True-False</option>
                </select>
            </div>)
    }

    const Quiz = ({ idx, data }) => {
        return (
            <div className="w-full flex flex-col gap-2">
                {
                    selectPosition === `top+${idx}` && <CreateComponent></CreateComponent>
                }
                <div className="w-full h-auto bg-secondary rounded flex flex-col gap-4 pb-5 relative group/btn">
                    {/* Hover Button start*/}
                    <div onClick={()=> setSelectPosition(`top+${idx}`)} className="w-8 h-8 p-1 rounded-full bg-white absolute -top-5 left-[50%] hidden group-hover/btn:block cursor-pointer z-40">
                        <span className="w-full h-full rounded-full flex items-center justify-center bg-primary text-secondary"><GoPlus></GoPlus></span>
                    </div>
                    {/* Hover Button End */}
                    <div className="w-full flex gap-5 p-4">
                        {/* image selector */}
                        <div className="w-[9%] h-[70px] rounded bg-white">
                            <label htmlFor="selectImage" className="w-full h-full flex items-center justify-center text-4xl text-primary"><RiImageAddFill></RiImageAddFill></label>
                            <input className="hidden" type="file" name="quizImage" id="selectImage" accept="image/*" />
                        </div>
                        {/* Question content */}
                        <div className="w-[88%] flex flex-col gap-2">
                            <h2 className="text-sm font-semibold">Enter Your Question</h2>
                            <ReactQuill  
                                key={`Quiz-${idx}`}    
                                theme="snow" 
                                value={data?.title}
                                modules={modules}
                                onBlur={(range, source, editor) => {
                                    const value = editor.getHTML();
                                    setDescription2(value);
                                }} 
                                placeholder="Write your Question ..." 
                                className="bg-white w-full h-40 flex flex-col"
                            />
                            <select onChange={(e)=>setSelect(e.target.value)} name="questionType" id="" className="w-[30%] bg-white p-2 rounded">
                                <option value="single-choice">Single Choice</option>
                                <option value="multiple-choice">Multiple Choice</option>
                                <option value="true-false">True-False</option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <hr className="border-t border-gray-500/50 h-[1px]" />
                    {
                        select === "single-choice" &&
                        <div className="w-full flex flex-col gap-3 px-4">
                            <h2 className="text-sm font-semibold">Answeres</h2>
                            {
                                data?.answere?.map((ans, idx)=> (
                                    <div key={idx} className="w-full px-4 py-3 flex items-center justify-between bg-white rounded group">
                                        <h1 className="flex items-center gap-3">
                                            <RxSquare></RxSquare> 
                                            <span className="font-semibold">{ans}</span>
                                            <GrFormEdit className="text-xl hidden group-hover:block cursor-pointer"></GrFormEdit>
                                        </h1>
                                        <h2 className="flex items-center gap-2">
                                            <span className="font-semibold">Correct</span> 
                                            <input
                                            type="radio"
                                            name="option"
                                            className="appearance-none h-4 w-4 p-1 rounded-full border-2 border-gray-500 text-primary checked:bg-[var(--color-primary)] hover:border-green-500 cursor-pointer"
                                        />
                                        </h2>
                                    </div>
                                ))
                            }
                            <input type="text" name="answereText" placeholder="Add an answere" id="" className="w-full p-3 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200 bg-white font-semibold"/>
                        </div>
                    }
                    {/* Hover Button start*/}
                    <div onClick={()=> setSelectPosition(`bottom+${idx}`)} className="w-8 h-8 p-1 rounded-full bg-white absolute -bottom-5 left-[50%] hidden group-hover/btn:block cursor-pointer z-40">
                        <span className="w-full h-full rounded-full flex items-center justify-center bg-primary text-secondary"><GoPlus></GoPlus></span>
                    </div>
                    {/* Hover Button End */}
                </div>
                {
                    selectPosition === `bottom+${idx}` && <CreateComponent></CreateComponent>
                }
            </div>
        )
    }

    const BlankQuiz = () => {
        return (
            <div className="w-full flex flex-col gap-2">
                <div className="w-full h-auto bg-secondary rounded flex flex-col gap-4 pb-5 group/btn">
                    
                    <div className="w-full flex gap-5 p-4">
                        {/* image selector */}
                        <div className="w-[9%] h-[70px] rounded bg-white">
                            <label htmlFor="selectImage" className="w-full h-full flex items-center justify-center text-4xl text-primary"><RiImageAddFill></RiImageAddFill></label>
                            <input className="hidden" type="file" name="quizImage" id="selectImage" accept="image/*" />
                        </div>
                        {/* Question content */}
                        <div className="w-[88%] flex flex-col gap-2">
                            <h2 className="text-sm font-semibold">Enter Your Question</h2>
                            <ReactQuill
                                key="quiz-quill"   
                                theme="snow" 
                                value={description1}
                                modules={modules}
                                onBlur={(range, source, editor) => {
                                    const value = editor.getHTML();
                                    setDescription1(value);
                                }} 
                                placeholder="Write your Question ..." 
                                className="bg-white w-full h-40 flex flex-col"
                            />
                            <select onChange={(e)=>setSelect(e.target.value)} name="questionType" id="" className="w-[30%] bg-white p-2 rounded">
                                <option value="single-choice">Single Choice</option>
                                <option value="multiple-choice">Multiple Choice</option>
                                <option value="true-false">True-False</option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <hr className="border-t border-gray-500/50 h-[1px]" />
                    {
                        select === "single-choice" &&
                        <div className="w-full flex flex-col gap-3 px-4">
                            <h2 className="text-sm font-semibold">Answeres</h2>
                            <div className="w-full px-4 py-3 flex items-center justify-between bg-white rounded group">
                                <h1 className="flex items-center gap-3">
                                    <RxSquare></RxSquare> 
                                    <span className="font-semibold">Answere one of one</span>
                                    <GrFormEdit className="text-xl hidden group-hover:block cursor-pointer"></GrFormEdit>
                                </h1>
                                <h2 className="flex items-center gap-2">
                                    <span className="font-semibold">Correct</span> 
                                    <input
                                    type="radio"
                                    name="option"
                                    className="appearance-none h-4 w-4 p-1 rounded-full border-2 border-gray-500 text-primary checked:bg-[var(--color-primary)] hover:border-green-500 cursor-pointer"
                                />
                                </h2>
                            </div>
                            
                            <input onKeyDown={handleQuestionAdd} type="text" name="answereText" placeholder="Add an answere" id="" className="w-full p-3 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200 bg-white font-semibold"/>
                        </div>
                    }
                </div>
            </div>
        )
    }

console.log('data', data)
    return (
        <div className="h-full flex flex-col w-full">
            {/* Main Content */}
            <div className="w-full h-[88%] rounded overflow-y-scroll bg-white">
                <div className="w-full h-full py-3 rounded bg-white">
                {/* Quiz title */}
                <div className="flex items-center gap-2 h-10 w-full px-4 mb-3">
                    <div className="flex items-center h-full w-full">
                        <button className="flex items-center gap-2 h-full w-41 bg-secondary text-primary p-2 rounded rounded-r-none">
                            <AiOutlineQuestionCircle className="text-xl" />
                            <span>Quiz Lesson</span>
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
                <hr className="border-t border-gray-500/50 h-[1px]" />
                {/* Quiz Tab */}
                <div className="w-full px-4 py-3">
                    <div className="bg-secondary h-10 p-1 w-fit rounded flex items-center">
                        <button onClick={()=>{setActiveButton("questions")}} className={`${activeButton === "questions" && "bg-white text-primary"} h-full px-18 rounded cursor-pointer`}>Questions</button>
                        <button onClick={()=>{setActiveButton("settings")}} className={`${activeButton === "settings" && "bg-white text-primary"} h-full px-18 rounded cursor-pointer`}>Settings</button>
                        <button onClick={()=>{setActiveButton("Q&A")}} className={`${activeButton === "Q&A" && "bg-white text-primary"} h-full px-18 rounded cursor-pointer`}>Q&A</button>
                    </div>
                </div>
                {/* Quiz Content */}
                {
                    activeButton === "questions" && 
                    <div className="w-full px-4 pt-3 pb-5 flex flex-col gap-2">
                        {
                            data.length === 0 ? 
                            <BlankQuiz></BlankQuiz>
                            :
                            <>
                                {
                                    data?.map((item,idx) => (
                                        <Quiz key={idx} idx={idx} data={item}></Quiz>
                                    ))
                                }
                            </>
                        }
                    </div>
                }
            </div>
            </div>
        
            {/* Fixed Bottom Button */}
            <div className="w-full h-[12%] flex justify-end px-5 py-2 bg-white">
                <button disabled className="h-full px-5 rounded bg-primary text-secondary disabled:bg-gray-600/50">Save</button>
            </div>
        </div>
    );
};

export default Quiz;