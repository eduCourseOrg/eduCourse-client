import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import { EduCourseContexts } from "../../Contexts/AuthProvider";
const Step1 = () => {
  const { createAccount, user } = useContext(EduCourseContexts);
  const [instructorInfo, setInstructorInfo] = useOutletContext();
  const [image, setImage] = useState();
  const [resume, setResume] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const todayDate = new Date().toISOString().split("T")[0];
  console.log("date = ", todayDate);
  const onSubmit = async (data) => {
    console.log("form", data);
    console.log("form.pdf", data.resume);
    console.log("form.pdf[0]", data.resume[0]);
    const pdfFile = data.resume[0];
    const pdfUnit8Array = await pdfFile.arrayBuffer();
    // console.log("pdfUnit8Array",pdfUnit8Array)
    const pdfArray = new Uint8Array(pdfUnit8Array);
    const pdfBlob = new Blob([pdfArray], { type: "image/*" });
    const outputPdfUrl = URL.createObjectURL(pdfBlob);

    const file = data.image[0];
    const uint8Array = await file.arrayBuffer();
    const imageArray = new Uint8Array(uint8Array);
    const imageBlob = new Blob([imageArray], { type: "image/*" });
    const outputImageUrl = URL.createObjectURL(imageBlob);
    console.log("blob step 1", imageBlob);
    console.log("outputImageUrl blob", outputImageUrl);
    const personalInfo = {
      name: data.name,
      gender: data.gender,
      phoneNumber: data.phoneNumber,
      dob: data.dob,

      bio: data.bio,
      address: data.address,
      image: imageBlob,
      resume: outputPdfUrl,
    };
    console.log("object", personalInfo);
    setInstructorInfo((pre) => ({
      ...pre,
      ...personalInfo,
      step1Completed: true,
    }));
    navigate("/instructorReg/step2");
  };
  console.log("instructor in out of range", instructorInfo);
  // console.log("instructor in name", instructorInfo.personalInfo.name);
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imagePreview = URL.createObjectURL(selectedFile);
      setImage(imagePreview);
      console.log("image Pre", image);
    }
  };
  const deleteImage = () => {
    setImage(null);
  };
  const handlePdf = (e) => {
    const pdfFile = e.target.files[0];
    if (pdfFile) {
      const pdfPreview = URL.createObjectURL(pdfFile);
      setResume(pdfPreview);
    }
  };
  const deletePdf = () => {
    setResume(null);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[80%] mx-auto flex flex-col gap-5 mt-20"
    >
      <div className="flex flex-row gap-10">
        <label htmlFor="date" className="wq-label-text">
          Date : {todayDate}
        </label>
        <input
          className="hidden border rounded-sm border-gray-300"
          type="text"
          name="date"
          id="date"
          readOnly
          {...register("date")}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="name" className="wq-label-text">
          Your Full Name
        </label>
        <input
          id="name"
          defaultValue={instructorInfo?.name}
          type="text"
          {...register("name", { required: true })}
          className="wq-input"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="dob" className="wq-label-text">
          Date of Birth
        </label>
        <input
          id="dob"
          type="date"
          defaultValue={instructorInfo?.dob}
          {...register("dob", { required: true })}
          className="wq-input"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="gender" className="wq-label-text">
          {" "}
          Gender
        </label>
        <select
          id="gender"
          defaultValue={instructorInfo?.gender}
          {...register("gender", { required: true })}
          className="wq-input"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="w-1/2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder={user ? user.email : "email"}
          defaultValue={user ? user.email : "email@mail.com"}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="address" className="wq-label-text">
          Home Address
        </label>
        <input
          id="address"
          defaultValue={instructorInfo?.address}
          type="text"
          {...register("address", { required: true })}
          className="wq-input"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="phoneNumber" className="wq-label-text">
          Your Phone Number
        </label>
        <input
          id="phoneNumber"
          defaultValue={instructorInfo?.phoneNumber}
          type="number"
          {...register("phoneNumber", { required: true })}
          className="wq-input"
        />
      </div>
      {/* <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="degree" className="text-sm font-semibold">
            Degree
          </label>
          <input
            id="degree"
            type="text"
            {...register("degree", { required: true })}
            className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="institute" className="text-sm font-semibold">
            Institute
          </label>
          <input
            id="institute"
            type="text"
            {...register("institute", { required: true })}
            className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"
          />
        </div>
      </div> */}

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="bio" className="wq-label-text">
          Write some words about yourself
        </label>
        <textarea
          id="bio"
          defaultValue={instructorInfo?.bio}
          rows={5}
          {...register("bio", { required: true })}
          className="wq-input"
        />
      </div>
      <div>
        <p className="wq-label-text mb-5">Upload your profile image here:</p>
        <div className="w-[50%] h-auto flex flex-col items-center gap-2 justify-center border-dashed border-1 rounded py-4">
          {image ? (
            <div className="w-full h-full relative group">
              <img src={image} alt="Preview Image" className="w-full h-full" />
              <div className="w-full h-full hidden items-center justify-center absolute top-0 left-0 group-hover:flex bg-gray-100/40">
                <button
                  onClick={deleteImage}
                  className="px-4 py-2 rounded bg-primary text-secondary cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3>Browse image from your Local machine</h3>
              <label
                htmlFor="Image"
                className="bg-primary text-secondary rounded px-5 py-1 cursor-pointer"
              >
                Upload image
              </label>
              <input
                className="hidden"
                type="file"
                id="Image"
                // defaultValue={instructorInfo?.image}
                accept="image/*"
                {...register("image", {
                  required: true,
                  onChange: (event) => handleImageChange(event),
                })}
              />
            </>
          )}
        </div>
      </div>
      <div>
        <p className="wq-label-text mb-5">Upload your Resume here:</p>
        <div className="w-[50%] h-auto flex flex-col items-center gap-2 justify-center border-dashed border-1 rounded py-4">
          {resume ? (
            <div className="w-full h-full relative group">
              <img src={resume} alt="Preview pdf" className="w-full h-full" />
              <div className="w-full h-full hidden items-center justify-center absolute top-0 left-0 group-hover:flex bg-gray-100/40">
                <button
                  onClick={deletePdf}
                  className="px-4 py-2 rounded bg-primary text-secondary cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3>Browse your resume</h3>
              <label
                htmlFor="resume"
                className="bg-primary text-secondary rounded px-5 py-1 cursor-pointer"
              >
                Upload Resume
              </label>
              <input
                className="hidden"
                type="file"
                id="resume"
                // defaultValue={instructorInfo?.resume}
                accept="application/pdf"
                {...register("resume", {
                  required: true,
                  onChange: (event) => handlePdf(event),
                })}
              />
            </>
          )}
        </div>
      </div>
      {/* <div>
        <input
          type="file"
          name="pdf"
          id="pdf"
          accept="application/pdf"
          {...register("pdf")}
        />
      </div> */}
      <input
        type="submit"
        value="Next"
        className="py-1 px-3 border rounded-md bg-primary text-secondary w-fit"
      />
    </form>
  );
};

export default Step1;
