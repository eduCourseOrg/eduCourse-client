import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import SortableItem from '../SortableItem';
import { Outlet } from 'react-router-dom';


const Curriculum = () => {
    const [lessons, setLessons] = useState([]);
    const [clickedLecture, setClickedLecture] = useState();
    
    const handleButtonClick = () => {
        const newSection = { isOpen:true, id: Date.now(), name: `Lesson ${lessons.length + 1}`, lectures: [] };
        setLessons([...lessons, newSection]);
    }

    const handleLectureClicked = (value) => {
        setClickedLecture(value)
    }

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return; // No valid drop target

        const oldIndex = lessons.findIndex(lesson => lesson.id === active.id);
        const newIndex = lessons.findIndex(lesson => lesson.id === over.id);

        if (oldIndex !== newIndex) {
            setLessons(arrayMove(lessons, oldIndex, newIndex)); // Reorder array
        }
    };

    return (
        <div className="w-full h-full flex">
            {/* leftSidebar */}
            <div className="w-[30%] border-r border-green-500/50 flex flex-col gap-4 p-4">
                <h1 className="text-3xl font-semibold text-primary">Curriculum</h1>
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={lessons.map(lesson => lesson.id)} strategy={verticalListSortingStrategy}>
                    <ul className="create-course w-full h-full overflow-auto flex flex-col gap-2">
                    {
                        lessons.map((lesson, idx) => (
                            <SortableItem key={idx} id={lesson.id} lesson={lesson} setLessons={setLessons} lessons={lessons} lectureClicked={handleLectureClicked} activeLecture={clickedLecture}></SortableItem>
                        ))
                    }
                    </ul>
                    </SortableContext>
                </DndContext>
                <button onClick={handleButtonClick} className="flex gap-2 items-center justify-center w-full py-3 border border-primary rounded text-primary cursor-pointer hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)]"><AiFillPlusCircle></AiFillPlusCircle> <span>New Section</span></button>
            </div>
            {/* RightSideContent */}
            <div className="grow p-4 h-full overflow-y-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Curriculum;
