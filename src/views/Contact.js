import React from 'react'
import {FormspreeProvider} from '@formspree/react';

//components
import ContactForm from '../components/Contact/ContactForm';

//assets 
import office from '../assests/img/office-2.jpg';

export const Contact = () => {
    return (
      <div id = "Contact" className="section relative flex flex-col py-10 lg:pt-0 lg:flex-col lg:pb-0 grid-cols-5">
        <div className="flex flex-col items-start justify-start w-full max-w-xl px-4 mx-auto sm:order-last md: order-1  px-5 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              {/* <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  New Colaboration
                </p>
              </div> */}
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Let's work together
                {/* <br className="hidden md:block" />
                jumps over{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  a lazy dog
                </span> */}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Contact me and I will try to get back to you as soon as possible.
              </p>
            </div>
            {/* This is different */}
            <ContactForm/>
            {/* <div className = "space-y-8">
            <div>
                <label className = "text-black block mb-6 text-md font-bold"> Name </label>
                <input className = "w-full border border-input-border rounded-md mbg-input px-3 py-3"></input>
            </div>
            <div>
                <label className = "text-black block mb-6 text-md font-bold"> Email </label>
                <input type = "email" className = "w-full border border-input-border bg-input px-3 py-3 rounded-md"></input>
            </div>
            <div>
                <label className = "text-black block mb-6 text-md font-bold"> Message </label>
                <textarea className = "w-full border border-input-border bg-input px-3 py-4 h-56 resize-none rounded-md"></textarea>
            </div>
            </div> */}

            {/* This is different */}
          </div>
        </div>
        <div className="col-span-4 inset-y-0 right-0 w-full  px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 sm:w-full md:w-full md: pb-10 sm: pb-10">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src = {office}
            alt=""
          />
        </div>
      </div>
    );
  };