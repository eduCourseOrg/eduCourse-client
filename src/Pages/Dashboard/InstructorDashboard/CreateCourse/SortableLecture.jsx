/* eslint-disable react/prop-types */

import { useSortable } from "@dnd-kit/sortable";
import { RxDragHandleDots2 } from "react-icons/rx";
import { CSS } from "@dnd-kit/utilities";
import { FaTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SortableLecture = ({ lecture, id, clicked, activeLecture }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    
    return (
        <NavLink to={`/create-course/${lecture?.lessonType}`}>
            <li onClick={()=> clicked(id)} id={id} ref={setNodeRef} style={style} className={`w-full p-2 hover:bg-[var(--color-secondary)] flex items-center justify-between gap-2 rounded cursor-pointer group ${activeLecture === id ? 'border': ""}`}>
                <span className="flex items-center gap-2">
                    <RxDragHandleDots2 className='cursor-move text-xl text-gray-400 focus:outline-0' {...listeners} {...attributes}></RxDragHandleDots2>{lecture?.title}
                </span>
                <FaTrashAlt className="text-gray-500 opacity-0 group-hover:opacity-100 hover:text-red-500"></FaTrashAlt>
            </li>
        </NavLink>
    );
};

export default SortableLecture;