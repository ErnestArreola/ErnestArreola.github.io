import React, {useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Transition } from '@headlessui/react'

//components
import Modal from './Modal';

function ContactForm() {
    
  const [state, handleSubmit] = useForm("xzbodker");
  const [isShowing, setIsShowing] = useState(false);

  if (state.succeeded) {
     setTimeout(function () {window.location.reload();}, 7000); 
      return  <Modal/>;
  }
  return (
    <form onSubmit={handleSubmit}>
            <div className = "space-y-12">
        <div>
            <label className = "text-black block mb-6 text-md font-bold"> Name </label>
            <input className = "w-full border border-input-border rounded-md mbg-input px-3 py-3"></input>
        </div>
        <div>
        <label htmlFor="email" className = "text-black block mb-6 text-md font-bold"> Email</label>
        <input
            id="email"
            type="email" 
            name="email"
            className = "className = w-full border border-input-border rounded-md mbg-input px-3 py-3"
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        </div>
        <div>
        <label className = "text-black block mb-6 text-md font-bold"> Message </label>
        <textarea
            rows = "5"
            id = "message"
            name = "message"
            className = "w-full border border-input-border bg-input px-3 py-4 h-56 resize-none rounded-md"
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <div className = "pt-8">
            <ReCAPTCHA
            sitekey = "6Ld4hSgeAAAAAArefWpKMtixmnenuG7ZBaV1e1G4"
            />
        </div>
        </div>
            <button 
                className ="px-10 py-3 bg-black text-white font-bold rounded-md hover: bg-slate-900"
                type="submit" 
                disabled={state.submitting}>
                Submit
            </button>
            </div>
    </form>

  );
}

export default ContactForm;
