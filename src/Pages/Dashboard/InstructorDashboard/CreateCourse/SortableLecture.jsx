/* eslint-disable react/prop-types */

import { useSortable } from "@dnd-kit/sortable";
import { RxDragHandleDots2 } from "react-icons/rx";
import { CSS } from "@dnd-kit/utilities";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { memo } from "react";

const SortableLecture = ({ lecture, id, clicked, activeLecture }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const handleClick = (e) => {
        if (isDragging) {
            e.preventDefault();
            return;
        }
        clicked(id);
    };

    return (
        <li
            id={id}
            ref={setNodeRef}
            style={style}
            onClick={handleClick}
            className={`w-full p-2 hover:bg-[var(--color-secondary)] flex items-center justify-between gap-2 rounded cursor-pointer group ${
                activeLecture === id ? 'border' : ''
            }`}
        >
            <span className="flex items-center gap-2">
                <span
                    {...attributes}
                    {...listeners}
                    onClick={(e) => e.stopPropagation()}
                    className="cursor-move"
                >
                    <RxDragHandleDots2 className="text-xl text-gray-400 focus:outline-0" />
                </span>
                <Link
                    to={`/create-course/${lecture?.lessonType}/${id}`}
                    onClick={(e) => isDragging && e.preventDefault()}
                >
                    {lecture?.title}
                </Link>
            </span>
            <FaTrashAlt className="text-gray-500 opacity-0 group-hover:opacity-100 hover:text-red-500" />
        </li>
    );
};


export default memo(SortableLecture);