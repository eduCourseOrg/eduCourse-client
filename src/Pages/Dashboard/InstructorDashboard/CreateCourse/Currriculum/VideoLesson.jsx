import { MdOutlineVideoLibrary } from "react-icons/md";
import { useState } from "react";
import ReactQuill from "react-quill";
import { RxAvatar } from "react-icons/rx";
import { FaTrashAlt } from "react-icons/fa";
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';


const VideoLesson = () => {
    const [activeButton, setActiveButton] = useState(true);
    const [description, setDescription] = useState("");
    const [source, setSource] = useState('');
    const [fileData, setFileData] = useState({});
    const [loading, setLoading] = useState(false);

    const ffmpeg = new FFmpeg();

    const compressAndConvertToBinary = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        setLoading(true);

        try {
            if (!ffmpeg.loaded) await ffmpeg.load()
            ffmpeg.writeFile("videoFile.mp4", await fetchFile(file));
            
            await ffmpeg.exec([
                '-i', 'videoFile.mp4',
                '-c:v', 'libx264',
                '-crf', '28', 
                '-preset', 'veryfast', // Compression speed (veryfast, fast, medium, slow, etc.)
                'output.mp4'
            ]);

            const compressedData = await ffmpeg.readFile("output.mp4");
            // Convert binary data to a binary string
            const blob = new Blob([compressedData.buffer], { type: "text/plain" });
            const outputUrl = URL.createObjectURL(blob);
            setFileData((prev)=> ({...prev, video: outputUrl}))
        } catch (error) {
            console.error("Error during compression/conversion:", error);
        } finally {
            setLoading(false);
        }
    };


    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const imagePreview = URL.createObjectURL(selectedFile);
            setFileData((prev)=> ({...prev, image: imagePreview}));
        }
    };

    const deleteImage = () => {
        setFileData((prev)=> ({...prev, image: ""}))
    }

    const deleteVideo = () => {
        setFileData((prev)=> ({...prev, video: ""}))
    }

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

    const handleSourceSelect = (e) => {
        const value = e.target.value;
        setSource(value)
    }

    return (
        <div className="h-full flex flex-col w-full bg-white">
        {/* Main Content */}
            <div className="w-full h-full py-2 px-5 rounded bg-white flex-grow overflow-y-auto">
                <div className="w-full flex flex-col gap-4">
                    {/* Lesson title */}
                    <div className="flex items-center gap-2 h-10 w-full">
                        <div className="flex items-center h-full w-full">
                            <button className="flex items-center gap-2 h-full w-41 bg-secondary text-primary p-2 rounded rounded-r-none">
                                <MdOutlineVideoLibrary className="text-xl" />
                                <span>Video Lesson</span>
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
                        <button onClick={()=>{setActiveButton(true)}} className={`${activeButton&& "bg-white text-primary"} h-full px-18 rounded cursor-pointer`}>Lesson</button>
                        <button  onClick={()=>{setActiveButton(false)}} className={`${!activeButton && "bg-white text-primary"} h-full px-18 rounded cursor-pointer`}>Q&A</button>
                    </div>

                    {/* Lesson Content */}
                    {
                        activeButton ?
                            <div className="w-full flex flex-col gap-4">
                                {/* Source type */}
                                <div className=" flex flex-col gap-1 w-1/2">
                                    <h2 className="text-sm font-semibold">Source Type</h2>
                                    <select onChange={handleSourceSelect} name="sourceType" id="" className="h-full w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200 cursor-pointer">
                                        <option selected disabled>-- Select Source --</option>
                                        <option value="mp4">HTML(MP4)</option>
                                        <option value="youtube">Youtube</option>
                                        <option value="embed">Embeded Link</option>
                                    </select>
                                </div>
                                {/* Conditional Rendering */}
                                {
                                    source === "mp4" &&
                                    <div className="flex flex-col gap-8">
                                        <div className=" flex flex-col gap-1 w-full h-60">
                                            <h2 className="text-sm font-semibold">Lesson video poster</h2>
                                            <div className="w-[60%] h-full flex flex-col items-center gap-2 justify-center border-dashed border-1 rounded ">
                                                {
                                                        fileData?.image ?
                                                            <div className="w-full h-full relative group">
                                                                <img src={fileData?.image} alt="Preview Image" className="w-full h-full" />
                                                                <div className="w-full h-full hidden items-center justify-center absolute top-0 left-0 group-hover:flex bg-gray-100/40">
                                                                    <button onClick={deleteImage} className="px-4 py-2 rounded bg-primary text-secondary cursor-pointer">Remove</button>
                                                                </div>
                                                            </div>
                                                            :
                                                            <><h3>Browse image from your computer</h3>
                                                            <label htmlFor="browseImage" className="bg-primary text-secondary rounded px-5 py-2 cursor-pointer">Upload an image</label>
                                                            <input onChange={handleImageChange} className="hidden" type="file" name="browseImage" id="browseImage" /></>
                                                }
                                            </div>
                                        </div>
                                            {/* lesson Video */}
                                        <div className=" flex flex-col gap-1 w-full h-60">
                                            <h2 className="text-sm font-semibold">Lesson video</h2>
                                                <div className="w-[60%] h-full flex flex-col items-center gap-2 justify-center border-dashed border-1 rounded overflow-hidden">
                                                {
                                                    fileData?.video ?
                                                        <div className="w-full h-full relative group">
                                                            <video
                                                            controls
                                                            className="w-full h-full"
                                                            >
                                                            <source src={fileData?.video} type={'video/mp4'} />
                                                            Your browser does not support the video tag.
                                                            </video>
                                                            <button onClick={deleteVideo} className="px-4 py-2 rounded bg-primary text-secondary cursor-pointer absolute top-3 right-3 hidden group-hover:block">Remove</button>    
                                                        </div>
                                                        :
                                                        loading ? 
                                                            <p className="text-xl">Loading....</p>
                                                            :
                                                            <><h3>Browse mp4 type video file from your computer</h3>
                                                            <label htmlFor="browseVideo" className="bg-primary text-secondary rounded px-5 py-2 cursor-pointer">Browse Video</label>
                                                            <input onChange={compressAndConvertToBinary} className="hidden" type="file" name="browseVideo" id="browseVideo" accept="video/mp4" /></>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    source === "embed" &&
                                    <div className="flex flex-col gap-1 w-[60%]">
                                        <h2 className="text-sm font-semibold">Embed iframe content</h2>
                                        <textarea rows={3} name="embedContent" id="" className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200">Enter Embeded Code</textarea>
                                    </div>
                                }
                                {
                                    source === "youtube" &&
                                    <div className=" flex flex-col gap-1 w-[60%] h-12 mb-3">
                                        <h2 className="text-sm font-semibold">Youtube video URL</h2>
                                        <input 
                                            placeholder="Enter Youtube Video URL" 
                                            type="text" 
                                            name="lessonTitle" 
                                            className="h-full w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200" 
                                        />
                                    </div>
                                }
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
                                        className="bg-white w-full h-50 flex flex-col"
                                    />
                                </div>

                                {/* Lesson Materials */}
                                <div className=" flex flex-col gap-1 w-full h-60">
                                    <h2 className="text-sm font-semibold">Lesson Materials</h2>
                                    <div className="w-full h-full flex flex-col items-center gap-1 justify-center border-dashed border-1 rounded bg-secondary">
                                        <h3>Browse files from your computer</h3>
                                        <label htmlFor="browsefile" className="bg-primary text-secondary rounded px-5 py-2 cursor-pointer">Browse Files</label>
                                        <input className="hidden" type="file" name="browse" id="browsefile" />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="w-full flex flex-col gap-4 border-t border-gray-200/90 py-4">
                                {/* Question Section */}
                                <div className="w-full flex flex-col gap-2 pb-3">
                                    <h2 className="font-bold text-lg">New Question</h2>
                                    <textarea name="question" id="" rows={3} className="border border-secondary focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200 rounded px-3 py-2" >Enter Your Question</textarea>
                                    <button type="submit" className="rounded p-2 bg-primary text-secondary w-24 cursor-pointer">Submit</button>
                                </div>

                                {/* Reply Section */}
                                <div className="w-full border-t border-secondary flex flex-col gap-16 py-3">
                                    <div className="w-full flex flex-col gap-10">
                                        <div className="w-full h-10 flex items-center justify-between ">
                                        {/* User Section */}
                                        <div className="w-full h-full flex items-center gap-2">
                                            <RxAvatar className="text-5xl"></RxAvatar>
                                            <span className="">
                                                <h1 className="font-bold text-lg">User Name</h1>
                                                <h3 className="text-sm font-semibold text-gray-500">Address@gmail.com</h3>
                                            </span>
                                        </div>
                                        {/* Editing Section */}
                                        <div className="w-full h-full flex items-center justify-end gap-2">
                                            <button className="rounded bg-primary text-secondary w-20 h-full cursor-pointer">Reply</button>
                                            <span className="h-full flex items-center justify-center px-3 bg-secondary text-primary">
                                                <FaTrashAlt></FaTrashAlt>
                                            </span>
                                        </div>
                                        </div>

                                        <h1 className="text-gray-700 text-md">How to do it using React?</h1>
                                    </div>

                                    <div className="w-full flex flex-col gap-1">
                                        <h4 className="font-bold text-md">1 Replies</h4>
                                        <div className="bg-secondary w-full p-4 flex flex-col gap-8">
                                            <div className="w-full h-10 flex items-center justify-between ">
                                        {/* User Section */}
                                        <div className="w-full h-full flex items-center gap-2">
                                            <RxAvatar className="text-5xl"></RxAvatar>
                                            <span className="">
                                                <h1 className="font-bold text-lg">User Name</h1>
                                                <h3 className="text-sm font-semibold text-gray-500">Address@gmail.com</h3>
                                            </span>
                                        </div>
                                        {/* Editing Section */}
                                        <div className="w-full h-full flex items-center justify-end gap-2">
                                            <button className="rounded bg-primary text-secondary w-20 h-full cursor-pointer">Edit</button>
                                            <span className="h-full flex items-center justify-center px-3 bg-secondary text-primary">
                                                <FaTrashAlt></FaTrashAlt>
                                            </span>
                                        </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium temporibus repellat quidem quis quia possimus officiis, accusantium blanditiis minus dolorem quas! Architecto ex molestias neque recusandae reprehenderit, nisi corrupti aliquid laudantium laborum fugit quo quibusdam dolores quam amet error doloribus obcaecati nulla necessitatibus accusantium, exercitationem fuga, perferendis veritatis? Alias cumque minus nemo recusandae similique repellat atque, nulla pariatur tempora. Minus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>

        {/* Fixed Bottom Button */}
            <div className="w-full h-15 flex justify-end px-5 py-2 bg-white">
                <button disabled className="h-full px-5 rounded bg-primary text-secondary disabled:bg-gray-600/50">Save</button>
            </div>
        </div>
        
    );
};

export default VideoLesson;