import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Footer = () => {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const addContact = async (e) => {
    e.preventDefault();

    try {
      const data = {fullname, email, message};
      const docRef = await addDoc(collection(db, 'contacts'), {
        contact: data
      })
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", e);
    }

  }

  return (
    <div className='footer w-full h-full text-white md:flex md:flex-col
      md:items-center bg-contact-formbgmobile md:bg-contact-formbg pt-12
      bg-no-repeat bg-right md:bg-center bg-contain bg-[#6070FF]'>
      <h3 className='font-bold text-2xl md:text-xl text-center md:w-1/2 md:mx-auto'>Contact me</h3>
      <p className="font-normal text-base text-center text-[#EBEBFF] my-4 w-9/12 md:w-1/3 mx-auto">
        If you have an application you are interested in developing, 
        a feature that you need built or a project that needs coding. 
        I’d love to help with it!
      </p>

      <form onSubmit={addContact} className="contact-form w-9/12 md:w-1/3 mx-auto">
        <div className='w-full'>
          <label htmlFor="fullname"></label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder='Jane Doe'
            className='w-full p-3 mb-6 rounded-md md:rounded-[2px] placeholder:text-[#B3BAC5] 
              placeholder:text-base focus:outline-none text-primary focus:shadow-md focus:shadow-primary'
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className='w-full'>
          <label htmlFor="email"></label>
          <input
            type="email" 
            name="email" 
            id="email" 
            placeholder='janedoe@gmail.com' 
            className='w-full p-3 mb-6 rounded-md md:rounded-[2px] placeholder:text-[#B3BAC5]
              placeholder:text-base focus:outline-none text-primary'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='w-full'>
          <label htmlFor="message"></label>
          <textarea
            type="text"
            name="message" 
            id="message" 
            placeholder='Write your message here'
            className='w-full rounded-md md:rounded-[2px] placeholder:text-[#B3BAC5] placeholder:text-base 
              text-primary px-3 focus:ring md:h-auto py-5 focus:outline-none focus:shadow focus:shadow-[#B3BAC5]'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            
          ></textarea>

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