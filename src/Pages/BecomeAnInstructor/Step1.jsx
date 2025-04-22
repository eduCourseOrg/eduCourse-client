import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
const Step1 = () => {
    const [instructorInfo, setInstructorInfo] = useOutletContext();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log('form', data);

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] mx-auto flex flex-col gap-4">
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-sm font-semibold">Your Full Name</label>
                <input id="name" type="text" {...register("name", { required: true })} className="borderw-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="gender" className="text-sm font-semibold"> Gender</label>
                <select id="gender" {...register("gender", { required: true })} className="borderw-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="phone" className="text-sm font-semibold">Your Phone Number</label>
                <input id="phone" type="number" {...register("phone", { required: true })} className="borderw-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
            </div>
            <div className="flex gap-2 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="degree" className="text-sm font-semibold">Degree</label>
                    <input id="degree" type="text" {...register("degree", { required: true })} className="borderw-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="institute" className="text-sm font-semibold">Institute</label>
                    <input id="institute" type="text" {...register("institute", { required: true })} className="borderw-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="address" className="text-sm font-semibold">Address</label>
                <input id="address" type="text" {...register("address", { required: true })} className="borderw-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="bio" className="text-sm font-semibold">About Yourself</label>
                <textarea id="bio" rows={5} {...register("bio", { required: true })} className="borderw-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"/>
            </div>
            <input type="submit" value="Next" className="py-1 px-3 border rounded-md bg-primary text-secondary"/>
        </form>
    );
};

export default Step1;