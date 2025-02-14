import { FaBook, FaCreditCard, FaFile, FaSearch } from "react-icons/fa";

const OurProcess = () => {
    return (
        <div className="w-full p-4">
            <h1 className="text-center text-2xl font-bold mb-8 text-[var(--color-primary)]">OUR PROCESS</h1>
            <div className="relative">
                {/* Center Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-3 border-[var(--color-primary)]"></div>

                <div className="flex flex-col items-center space-y-8">
                    {/* Content-1 */}
                    <div className="flex items-center w-full">
                        {/* text content */}
                        <div className="w-1/2 text-right pr-8">
                            <h2 className="text-[var(--color-primary)] font-bold text-lg">Step 01</h2>
                            <p className="font-semibold">Search for your course</p>
                            <p className="text-sm text-[var(--color-primary)]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni nesciunt.</p>
                        </div>
                        <div className="relative">
                            {/* Step Mark */}
                            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-[var(--color-secondary)]">
                                <FaSearch className=" z-10"></FaSearch>
                            </div>
                        </div>
                        {/* Blank div for right side. there is no content */}
                        <div className="w-1/2"></div>
                    </div>

                    {/* Content-2 */}
                    <div className="flex items-center w-full">
                        {/* Blank div for left side content. there has no content */}
                        <div className="w-1/2"></div>
                        {/* Step Mark */}
                        <div className="relative">
                            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-[var(--color-secondary)]">
                                <FaBook className="z-10"></FaBook>
                            </div>
                        </div>
                        {/* Text Content */}
                        <div className="w-1/2 pl-8">
                            <h2 className="text-[var(--color-primary)] font-bold text-lg">Step 02</h2>
                            <p className="font-semibold">Take a Sample Lesson</p>
                            <p className="text-sm text-[var(--color-primary)]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni nesciunt.</p>
                        </div>
                    </div>

                    {/* Content-3 */}
                    <div className="flex items-center w-full">
                        {/* Text Content */}
                        <div className="w-1/2 text-right pr-8">
                            <h2 className="text-[var(--color-primary)] font-bold text-lg">Step 03</h2>
                            <p className="font-semibold">Preview the Syllabus</p>
                            <p className="text-sm text-[var(--color-primary)]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni nesciunt.</p>
                        </div>
                        {/* Step Mark */}
                        <div className="relative">
                            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-[var(--color-secondary)]">
                                <FaFile className="z-10"></FaFile>
                            </div>
                        </div>
                        {/* Blank div for right side content */}
                        <div className="w-1/2"></div>
                    </div>

                    {/* Content-4 */}
                    <div className="flex items-center w-full">
                        {/* Black div for left side content */}
                        <div className="w-1/2"></div>
                        {/* step Mark */}
                        <div className="relative">
                            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-[var(--color-secondary)]">
                                <FaCreditCard className="z-10"></FaCreditCard>
                            </div>
                        </div>
                        {/* Text content */}
                        <div className="w-1/2 pl-8">
                            <h2 className="text-[var(--color-primary)] font-bold text-lg">Step 04</h2>
                            <p className="font-semibold">Purchase the Course</p>
                            <p className="text-sm text-[var(--color-primary)]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni nesciunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default OurProcess;