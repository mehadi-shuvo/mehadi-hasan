
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import bg1 from '../../assets/1.png'
import bg2 from '../../assets/2.png'
import bg3 from '../../assets/3.png'
import prs1 from '../../assets/prs1.png'
import prs2 from '../../assets/prs2.png'
import prs3 from '../../assets/prs3.png'
import prs4 from '../../assets/prs4.png'
import prt1 from '../../assets/prt1.png'
import prt2 from '../../assets/prt2.png'
import prt3 from '../../assets/prt3.png'
import prr1 from '../../assets/prr1.png'
import prr2 from '../../assets/prr2.png'
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <div className="md:flex md:pl-12 items-center">
                <div className="md:w-2/5 mt-24">
                    <div className="w-4/5 mx-auto">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg ">
                                    <img className="imgHover rounded-lg" src={bg1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg">
                                    <img className="imgHover rounded-lg" src={prs1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg">
                                    <img className="imgHover rounded-lg" src={prs2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg">
                                    <img className="imgHover rounded-lg" src={prs3} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg">
                                    <img className="imgHover rounded-lg" src={prs4} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
                <div className="md:w-3/5 md:ml-8 mt-24">
                    <div className="glassBg rounded-lg p-6">
                        <h4 className="text-4xl text-center font-bold text-white">Summer Sport Camp</h4>
                        <p className="text-xl text-center font-light tracking-wider text-white">Educational Website</p>
                        <hr className='border-sky-400' />
                        <div>
                            <h5 className="text-xl font-bold text-white underline my-4">Features</h5>
                            <ul className="list-decimal ml-4 text-white font-light tracking-wide">
                                <li>Dynamic 3 types of dashboard (student, instructor, admin). Every type of route is protected by JWT.</li>
                                <li>Payment system is available. There is a Stripe payment system for students. They can pay by card.</li>
                                <li>Users can select courses after login. Instructor and admin can’t select the course.
                                </li>
                            </ul>
                            <h5 className="text-xl font-bold text-white underline my-4">Technologies</h5>
                            <ul className="list-decimal ml-4 text-white font-light tracking-wide">
                                <li>For the front-end, I used HTML, CSS, React Js, Tailwind, Daisy UI and some React packages</li>
                                <li>
                                    For storing data and Back-end technology, I used MongoDB, Express Js, Node Js, Firebase, JWT, Stripe
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-5 justify-center mt-5">
                            <Link target="_blank" className="glass-button " to='https://sports-summer-camp-18386.web.app/'>SSCamp</Link>
                            <Link target="_blank" className="glass-button " to='https://github.com/mehadi-shuvo/summer-sports-camp-client'>Client Code</Link>
                            <Link target="_blank" className="glass-button " to='https://github.com/mehadi-shuvo/summer-sports-camp-server'>Server Code</Link>
                        </div>
                    </div>


                </div>
            </div>

            <div className="md:flex md:pl-12 items-center">
                <div className="md:w-2/5 mt-24">
                    <div className="w-4/5 mx-auto">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg ">
                                    <img className="imgHover rounded-lg" src={bg2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg">
                                    <img className="imgHover rounded-lg" src={prt1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg">
                                    <img className="imgHover rounded-lg" src={prt2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg">
                                    <img className="imgHover rounded-lg" src={prt3} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
                <div className="md:w-3/5 md:ml-8 mt-24">
                    <div className="glassBg rounded-lg p-6">
                        <h4 className="text-4xl text-center font-bold text-white">Toy Cars</h4>
                        <p className="text-xl text-center font-light tracking-wider text-white">E-commerce Website</p>
                        <hr className='border-sky-400' />
                        <div>
                            <h5 className="text-xl font-bold text-white underline my-4">Features</h5>
                            <ul className="list-decimal ml-4 text-white font-light tracking-wide">
                                <li>Sellers can add, delete and update their products very easily on this website for this seller must be logged</li>
                                <li>User experience is very good. Users can see product by category and search products. The site is responsive.</li>
                                <li>This website has an authentication system, without a login user can not see the product details.
                                </li>
                            </ul>
                            <h5 className="text-xl font-bold text-white underline my-4">Technologies</h5>
                            <ul className="list-decimal ml-4 text-white font-light tracking-wide">
                                <li>For the front-end, I used HTML, CSS, React Js, Tailwind, Daisy UI and some React packages</li>
                                <li>
                                For storing data and Back-end technology, I used MongoDB, Express Js, Node Js, Firebase.

                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-5 justify-center mt-5">
                            <Link className="glass-button " to='https://toycars-3b671.web.app/' target="_blank">ToyCars</Link>
                            <Link className="glass-button " to='https://github.com/mehadi-shuvo/toy-cars-client' target="_blank">Client Code</Link>
                            <Link className="glass-button " to='https://github.com/mehadi-shuvo/toy-cars-server' target="_blank">Server Code</Link>
                        </div>
                    </div>


                </div>
            </div>


            <div className="md:flex md:pl-12 items-center mb-10">
                <div className="md:w-2/5 mt-24">
                    <div className="w-4/5 mx-auto">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg ">
                                    <img className="imgHover rounded-lg" src={bg3} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg">
                                    <img className="imgHover rounded-lg" src={prr1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[400px] overflow-hidden rounded-lg">
                                    <img className="imgHover rounded-lg" src={prr2} alt="" />
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>
                <div className="md:w-3/5 md:ml-8 mt-24">
                    <div className="glassBg rounded-lg p-6">
                        <h4 className="text-4xl text-center font-bold text-white">Bengali Chefs</h4>
                        <p className="text-xl text-center font-light tracking-wider text-white">Restaurant Website</p>
                        <hr className='border-sky-400' />
                        <div>
                            <h5 className="text-xl font-bold text-white underline my-4">Features</h5>
                            <ul className="list-decimal ml-4 text-white font-light tracking-wide">
                                <li>User experience is very good. Users can see chef details and chef’s special recipes. The site is responsive</li>
                                <li>Users can add as their favorite recipe and they can see recipe ingredients and cooking methods.</li>
                                <li>This website has an authentication system, without a login user can not see chef details.</li>
                            </ul>
                            <h5 className="text-xl font-bold text-white underline my-4">Technologies</h5>
                            <ul className="list-decimal ml-4 text-white font-light tracking-wide">
                                <li>For the front-end, I used HTML, CSS, React Js, Tailwind, Daisy UI and some React packages</li>
                                <li>
                                For storing data and Back-end technology, I used MongoDB, Express Js, Node Js, Firebase.

                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-5 justify-center mt-5">
                            <Link className="glass-button " to='https://bengali-chefs.web.app/' target="_blank">BengaliChefs</Link>
                            <Link className="glass-button " to='https://github.com/mehadi-shuvo/bengali-chefs-client' target="_blank">Client Code</Link>
                            <Link className="glass-button " to='https://github.com/mehadi-shuvo/bengali-chefs-server' target="_blank">Server Code</Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Projects;