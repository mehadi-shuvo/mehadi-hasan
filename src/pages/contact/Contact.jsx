import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f5aesx6', 'template_ng48csn', form.current, 'zInhojYR_Sygqoi7J')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='flex items-center justify-center mt-36'>
            <form
                className='glassBg p-10 rounded-lg w-4/5 mx-auto'
                ref={form} onSubmit={sendEmail}>
                <h5 className='text-2xl text-center font-bold text-white mb-6'>Send Your Message</h5>
                <div className='grid md:grid-cols-2 gap-7'>
                    <div>
                        <label className='text-xl font-light tracking-wider text-white'>Name</label><br></br>
                        <input className='w-full py-2 px-3 rounded-md' type="text" placeholder='your full name' name="user_name" />
                    </div>
                    <div>
                        <label className='text-xl font-light tracking-wider text-white'>Email</label> <br />
                        <input className='w-full py-2 px-3 rounded-md' type="email" placeholder='your email' name="user_email" />
                    </div>
                </div>
                <div className='my-5'>
                    <label className='text-xl font-light tracking-wider text-white'>Message</label> <br />
                    <textarea className='w-full py-2 px-3 rounded-md h-24' placeholder='type your message' name="message" />
                </div>
                <div className='flex justify-center'>
                <input className='glass-button w-80 flex justify-center' type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Contact;