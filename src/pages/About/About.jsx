import { useEffect, useState } from 'react';
import myImg from '../../assets/me.png';
const About = () => {
    const [skills, setSkills]=useState([])
    useEffect(()=>{
        fetch('skills.json')
        .then(res => res.json())
        .then(data => setSkills(data))
    },[])
    return (
        <div>
           <div className='flex justify-around gap-8 glassBg w-[90%] mx-auto p-6 mt-12 rounded-lg'>
                <div className="">
                    <img className="w-36 h-36" src={myImg} alt="" />
                </div>
                <div className="grid grid-cols-2 text-white text-lg font-light tracking-wide">
                    <p>Name: Mehadi Hasan</p>
                    <p>Email: mehadihasanshuvo88@gmail.com</p>
                    <p>Phone: +880 1723 263304</p>
                    <p>Phone: +880 1723 263304</p>
                    <p>Data of Berth: 22/11/1999</p>
                    <p>Country: Bangladesh</p>
                    <p>Country: Bangladesh</p>
                    <p>Language: Bangla, English, Hindi</p>
                </div>
           </div>
           <div className="w-[90%] glassBg mx-auto mt-12 rounded-lg p-12">
            <h4 className='text-3xl text-white font-bold text-center'>Development Skills</h4>
            <hr className='border-sky-400' />
            <div className='grid grid-cols-4 gap-5 justify-center mt-12'>
                {
                    skills.map(skill=> <div key={skill.id}
                    className=''
                    >
                        <img className='mx-auto'  src={skill.img} alt="" />
                        <p className='text-center text-white font-semibold text-xl'>{skill.name}</p>
                    </div>)
                }
            </div>
           </div>

           <div  className="w-[90%] glassBg mx-auto mt-12 rounded-lg p-12 mb-12">
           <h4 className='text-3xl text-white font-bold text-center'>Education and Course</h4>
            <hr className='border-sky-400' />
            <div className='grid md:grid-cols-2 gap-5 mt-12'>
                <div className='glassBg rounded-lg p-6 text-white font-bold'>
                    <h4 className='flex items-center justify-between'>B.Sc in CSE <span className='flex justify-end font-light capitalize'>2022 to present</span></h4>
                    <p className='font-light capitalize tracking-wider'>Green University of Bangladesh</p>
                </div>
                <div className='glassBg rounded-lg p-6 text-white font-bold'>
                    <h4 className='flex items-center justify-between'>Web Development Course<span className='flex justify-end font-light capitalize'>jan 2023 to jun 2023</span></h4>
                    <p className='font-light capitalize tracking-wider'>programming Hero</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default About;