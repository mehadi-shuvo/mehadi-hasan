
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import bg1 from '../../assets/1.png'
import bg2 from '../../assets/2.png'
import bg3 from '../../assets/3.png'
import './home.css'

const Home = () => {
    const onButtonClick = () => {
        fetch('resumeOfMehadiHasan.pdf')
        .then(res=> {
            res.blob().then(blob=>{
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resumeOfMehadiHasan.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className="md:flex md:pl-12 items-center justify-center">
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
                                <img className="imgHover rounded-lg" src={bg2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[400px] overflow-hidden rounded-lg">
                                <img className="imgHover rounded-lg" src={bg3} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
            <div className="md:w-3/5 md:ml-8">
                <div className="text-white">
                    <h2 className="text-6xl font-black ">Hello !</h2>
                    <h4 className="text-5xl font-extrabold mt-3">I'am Mehadi Hasan</h4>
                </div>
                <div>
                    <p className="text-lg font-light text-slate-100 mt-4">I'm a web developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>

                    <button onClick={onButtonClick} className="glass-button mt-3">My Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Home;