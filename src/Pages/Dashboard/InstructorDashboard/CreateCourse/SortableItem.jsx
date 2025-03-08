/* eslint-disable react/prop-types */

import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RxDragHandleDots2 } from "react-icons/rx";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdSearch } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdEdit, MdOutlineAssignment } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiSolidVideos } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import SortableLecture from "./SortableLecture";
import { closestCenter, DndContext } from "@dnd-kit/core";
import Modal from "../../../../Components/Modal/Modal";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function SortableItem({ id, lesson, setLessons, lessons, activeLecture, lectureClicked }) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClick = () => {
    const data = [...lessons];
    const filterData = data.find(lesson => lesson.id === id);
    const index = data.findIndex(lesson => lesson.id === id);
    filterData.isOpen = filterData.isOpen ? false : true;
    data.splice(index,1,filterData)
    setLessons(data)
  }

  const handleAddLessonClick = () => {
    setIsModalOpen(true)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const lessonIndex = lessons.findIndex(lesson => lesson.id === id);
    if (lessonIndex === -1) return;

    const oldIndex = lessons[lessonIndex].lectures.findIndex(lecture => lecture.lessonId === active.id);
    const newIndex = lessons[lessonIndex].lectures.findIndex(lecture => lecture.lessonId === over.id);
    if (oldIndex !== -1 && newIndex !== -1) {
      const updatedLessons = [...lessons];
      updatedLessons[lessonIndex].lectures = arrayMove(updatedLessons[lessonIndex].lectures, oldIndex, newIndex);
      setLessons(updatedLessons);
    };
  }

  const handleAddLesson = (value) => {
    const data = [...lessons];
    const filterData = data.find(lesson => lesson.id === id);
    const index = data.findIndex(lesson => lesson.id === id);
    const newLesson = {
      lessonId: Date.now(),
      lessonType: value,
      title: `Your ${value} title here`
    };
    filterData.lectures.push(newLesson);
    data.splice(index,1,filterData)
    setLessons(data)
    setIsModalOpen(false)
  }


  
    return (
      <div className="w-full bg-white rounded">
        <li id={id} ref={setNodeRef} style={style} className='w-full bg-white p-4 flex items-center justify-between gap-2 rounded group'>
        <div className="flex items-center gap-2"><RxDragHandleDots2 className='cursor-move text-xl text-gray-400 focus:outline-0' {...listeners} {...attributes}></RxDragHandleDots2>{lesson?.name} <MdEdit className="text-xl opacity-0 group-hover:opacity-100 cursor-pointer"></MdEdit></div>
        <h1 className="flex items-center gap-2">
          <FaTrashAlt className="opacity-0 group-hover:opacity-100 hover:text-red-400 cursor-pointer"></FaTrashAlt>
          <span onClick={handleClick} className="flex items-center justify-center text-lg text-gray-600 w-[25px] h-[25px] rounded-full bg-secondary cursor-pointer">
          {
            lesson?.isOpen? <IoMdArrowDropup></IoMdArrowDropup>:<IoMdArrowDropdown></IoMdArrowDropdown>
          }
        </span>
        </h1>
        </li>
        
        {/* Dropdown for lesson */}
        <div className={`${!lesson?.isOpen && 'hidden'} w-full`}>
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={lesson?.lectures?.map(lesson => lesson.lessonId)} strategy={verticalListSortingStrategy}>
          <ul className="w-full h-auto p-2 bg-white border-t border-primary">
              {
                lesson?.lectures?.map((lecture, idx) => (
                  <SortableLecture key={idx} lecture={lecture} id={lecture?.lessonId} clicked={lectureClicked} activeLecture={activeLecture}></SortableLecture>
                ))
            }
          </ul>
          </SortableContext>
          </DndContext>
            {/* Buttons for Add and Search items */}
        <div className="flex items-center w-full justify-between px-4 pb-4 font-semibold">
          <button onClick={handleAddLessonClick} className="flex items-center gap-2 text-primary py-2 px-4 rounded bg-green-100/80 cursor-pointer"><AiFillPlusCircle></AiFillPlusCircle> Add a Lesson</button>
          <button className="flex items-center gap-2 py-2 px-4 rounded bg-gray-200/50 cursor-pointer"><IoMdSearch className="text-lg"></IoMdSearch> Search Materials</button>
        </div>
        </div>

         {/* Modal for lesson add */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div>
            <h2 className="text-2xl font-semibold text-primary pb-1">Select Lesson Type</h2>
            <p className="text-sm text-gray-500 font-semibold">Select Material type to continue</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-600 text-sm">LEARNING CONTENT</h3>
            <div className="flex justify-between gap-5">

              <div onClick={()=>handleAddLesson("Text")} className="flex flex-col items-center justify-center gap-2 w-full h-28 rounded border border-secondary cursor-pointer">
                <IoDocumentTextOutline className="text-5xl text-primary"></IoDocumentTextOutline>
                <h1 className="text-lg text-gray-700">Text Lesson</h1>
              </div>

              <div onClick={()=>handleAddLesson("Video")} className="flex flex-col items-center justify-center gap-2 w-full h-28 rounded border border-secondary cursor-pointer">
                <BiSolidVideos className="text-5xl text-primary"></BiSolidVideos>
                <h1 className="text-lg text-gray-700">Video Lesson</h1>
              </div>

              <div onClick={()=>handleAddLesson("Stream")} className="flex flex-col items-center justify-center gap-2 w-full h-28 rounded border border-secondary cursor-pointer">
                <CiStreamOn className="text-5xl text-primary"></CiStreamOn>
                <h1 className="text-lg text-gray-700">Stream Lesson</h1>
              </div>

              <div onClick={()=>handleAddLesson("Zoom")} className="flex flex-col items-center justify-center gap-2 w-full h-28 rounded border border-secondary cursor-pointer">
                <HiOutlineVideoCamera className="text-5xl text-primary"></HiOutlineVideoCamera>
                <h1 className="text-lg text-gray-700">Zoom Lesson</h1>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-600 text-sm">EXAM CONTENT</h3>
            <div className="flex gap-5">

              <div onClick={()=>handleAddLesson("quiz")} className="flex flex-col items-center justify-center gap-2 w-28 h-28 rounded border border-secondary cursor-pointer">
                <IoDocumentTextOutline className="text-5xl text-primary"></IoDocumentTextOutline>
                <h1 className="text-lg text-gray-700">Quiz</h1>
              </div>

              <div onClick={()=>handleAddLesson("assignment")} className="flex flex-col items-center justify-center gap-2 w-28 h-28 rounded border border-secondary cursor-pointer">
                <MdOutlineAssignment className="text-5xl text-primary"></MdOutlineAssignment>
                <h1 className="text-lg text-gray-700">Assignment</h1>
              </div>

            </div>
          </div>
        </Modal>
          
      </div>
  );
}