import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Footer = () => {

  const { register, handleSubmit, watch, formState: { errors, isSubmitted, isSubmitting } } = useForm();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);



  const resetForm = () => {
    setFullname('');
    setEmail('');
    setMessage('');
  }

  const addContact = async () => {

    try {
      const data = {fullname, email, message};
      const docRef = await addDoc(collection(db, 'contacts'), {
        contact: data
      });
      resetForm();
      setSuccess(true);
    } catch (error) {
      setError(true);
    }

  }

  return (
    <div id="contactMe" className='footer w-full h-full text-white md:flex md:flex-col
      md:items-center bg-contact-formbgmobile md:bg-contact-formbg pt-12
      bg-no-repeat bg-right md:bg-center bg-contain bg-[#6070FF]'>

      {error && <p className="w-9/12 md:w-1/3 mx-auto p-2 border border-red-500 mb-6 rounded-md md:rounded-[2px]">
        Form not submitted, please try again.</p>}

      {success && <p className=" p-2 border w-9/12 md:w-1/3 mx-auto mb-6 rounded-md md:rounded-[2px]
        bg-lightGrey text-lightBlue">
        Thank you for contacting me. Will get back to you ASAP!</p>}
        
      <h3 className='font-bold text-2xl md:text-xl text-center md:w-1/2 md:mx-auto'>Contact me</h3>
      <p className="font-normal text-base text-center text-[#EBEBFF] my-4 w-9/12 md:w-1/3 mx-auto">
        If you have an application you are interested in developing, 
        a feature that you need built or a project that needs coding. 
        I’d love to help with it!
      </p>

      <form onSubmit={handleSubmit(addContact)} className="contact-form w-9/12 md:w-1/3 mx-auto">
        <div className='w-full'>
          <label htmlFor="fullname"></label>
          <input
            type="text"
            {...register("fullname", { required: true})}
            disabled={isSubmitting}
            id="fullname"
            placeholder='Your Name'
            className='w-full p-3 mb-6 rounded-md md:rounded-[2px] placeholder:text-[#B3BAC5] 
              placeholder:text-base focus:outline-none text-primary focus:shadow-md focus:shadow-primary'
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          {errors.fullname?.type === 'required' && <p className="w-full p-2 border border-red-500 mb-6 rounded-md md:rounded-[2px]">First name is required</p>}
        </div>

        <div className='w-full'>
          <label htmlFor="email"></label>
          <input
            type="email" 
            {...register("email", { required: true})}
            disabled={isSubmitting}
            id="email" 
            placeholder='youremail@gmail.com' 
            className='w-full p-3 mb-6 rounded-md md:rounded-[2px] placeholder:text-[#B3BAC5]
              placeholder:text-base focus:outline-none text-primary focus:shadow-md focus:shadow-primary'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email?.type === 'required' && <p className="w-full p-2 border border-red-500 mb-6 rounded-md md:rounded-[2px]">Email is required</p>}
        </div>

        <div className='w-full'>
          <label htmlFor="message"></label>
          <textarea
            type="text"
            {...register("message", { required: true})}
            disabled={isSubmitting}
            id="message" 
            placeholder='Write your message here'
            className='w-full rounded-md md:rounded-[2px] placeholder:text-[#B3BAC5] placeholder:text-base 
              text-primary px-3 focus:ring md:h-auto py-5 focus:outline-none focus:shadow focus:shadow-[#B3BAC5]'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            
          ></textarea>
          {errors.message?.type === 'required' && <p className="w-full p-2 border border-red-500 mb-6 rounded-md md:rounded-[2px]">Message is required</p>}

          <button type='submit' className='text-[#6070FF] py-2 px-5 md:mx-32 rounded-md border
           my-3 bg-white border-transparent text-sm md:w-36' 
          >
            Get in touch
          </button>
        </div>
      </form>
    </div>
  )
}

export default Footer