// import React from 'react'
import axios from "axios";
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
        const user = {
            name: data.name,
            email: data.email,
            message: data.message
        };
        try {
            await axios.post("https://getform.io/f/zazkmnjb", user);
            // alert("Your message has been sent");
            toast.success("Your message has been sent.");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.");
        }
      }
  return (
    <div name="Contact" className="max-w-screen-2xl container p-2 px-4 md:px-20 my-16">
        <h1 className="font-bold text-3xl mb-5">Contact Me</h1>
        <span className="text-lg">Please fill out all the details to contact me</span>
        <div className="flex flex-col items-center justify-center mt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 w-96 px-8 py-6 rounded-xl shadow-xl">
                <h1 className="text-xl font-semibold m-4">Send your message</h1>
                <div className="flex flex-col mb-4">
                    <label htmlFor="" className="block mx-4 text-lg font-medium">Full Name</label>
                    <input id="name" name="name" type="text" className="mx-4 mb-2 rounded-md h-8 p-2" placeholder="Enter your full name" {...register("name", { required: true })} />
                    {errors.name && <span className="text-red-500 mx-4">This field is required</span>}
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="" className="block mx-4 text-lg font-medium">Email Address</label>
                    <input id="email" name="email" type="text" className="mx-4 mb-2 rounded-md h-8 p-2" placeholder="Enter your email address" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500 mx-4">This field is required</span>}
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="" className="block mx-4 text-lg font-medium">Message</label>
                    <textarea id="message" name="message" type="text" className="mx-4 mb-2 rounded-md p-2" placeholder="Enter your message here" {...register("message", { required: true })} />
                    {errors.message && <span className="text-red-500 mx-4">This field is required</span>}
                </div>
                <div className="flex justify-center">
                    <button className="bg-black text-white py-2 px-3 rounded-lg shadow-lg hover:scale-105 duration-200">Send</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact