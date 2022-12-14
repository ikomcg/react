import React from 'react'
import ContactForm from './contactform'
import {hr} from '../projects/projects'
function Contact() {
    return (
        <div className='contact-home flex flex-row justify-between px-8 mb-40'>
            <div className="left-form w-1/2 flex flex-col pr-10">
                {hr}
                <h4 className='font-black my-10 '>
                let’s talk about your thoughts
                </h4>
                <p className='fonts-medium'>
                This is my contacts and you can reach me out in many ways. You can  direct message me if you want, book a meeting so we can talk about your thoughts
                </p>
            </div>
            <div className="right-form w-1/2 rounded-xl shadow-2md p-10">
                <ContactForm/>
            </div>
        </div>
    )
}

export default Contact
