import { useState } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
const Step1 = () => {
    const [instructorInfo, setInstructorInfo] = useOutletContext();
    const [image, setImage] = useState();
    const { register, handleSubmit } = useForm();

    const onSubmit = async(data) => {
        console.log('form', data);
        const file = data.image[0];
        const uint8Array = await file.arrayBuffer();
        const imageArray = new Uint8Array(uint8Array);
        const personalInfo = {
            name: data.name,
            gender: data.gender, 
            phoneNumber: data.phone,
            dob: data.dob,
            education: {
                degree: data.degree,
                institute: data.institute
            },
            bio: data.bio, 
            address: data.address,
            image: imageArray
        }
        console.log('object', personalInfo)
    }
    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const imagePreview = URL.createObjectURL(selectedFile);
            setImage(imagePreview);
        }
    };
    const deleteImage = () => {
        setImage();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] mx-auto flex flex-col gap-4">
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-sm font-semibold">Your Full Name</label>
                <input id="name" type="text" {...register("name", { required: true })} className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="gender" className="text-sm font-semibold"> Gender</label>
                <select id="gender" {...register("gender", { required: true })} className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="phone" className="text-sm font-semibold">Your Phone Number</label>
                <input id="phone" type="number" {...register("phone", { required: true })} className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
            </div>
            <div className="flex gap-2 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="degree" className="text-sm font-semibold">Degree</label>
                    <input id="degree" type="text" {...register("degree", { required: true })} className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="institute" className="text-sm font-semibold">Institute</label>
                    <input id="institute" type="text" {...register("institute", { required: true })} className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="dob" className="text-sm font-semibold">Date of Birth</label>
                <input id="dob" type="date" {...register("dob", { required: true })} className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="address" className="text-sm font-semibold">Address</label>
                <input id="address" type="text" {...register("address", { required: true })} className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="bio" className="text-sm font-semibold">About Yourself</label>
                <textarea id="bio" rows={5} {...register("bio", { required: true })} className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
            </div>
            <div className="w-[50%] h-auto flex flex-col items-center gap-2 justify-center border-dashed border-1 rounded py-4">
                {image ?
                    <div className="w-full h-full relative group">
                        <img src={image} alt="Preview Image" className="w-full h-full" />
                        <div className="w-full h-full hidden items-center justify-center absolute top-0 left-0 group-hover:flex bg-gray-100/40">
                            <button onClick={deleteImage} className="px-4 py-2 rounded bg-primary text-secondary cursor-pointer">Remove</button>
                        </div>
                    </div>
                    :
                    <><h3>Browse image from your Local machine</h3>
                    <label htmlFor="Image" className="bg-primary text-secondary rounded px-5 py-1 cursor-pointer">Upload image</label>
                    <input className="hidden" type="file" id="Image" accept="image/*" {...register("image", { required: true, onChange: (event) => handleImageChange(event) })}/></>}
            </div>
            <input type="submit" value="Next" className="py-1 px-3 border rounded-md bg-primary text-secondary w-fit"/>
        </form>
    );
};

export default Step1;