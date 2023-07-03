import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ParticleBackground from 'react-particle-backgrounds'




const MainLayout = () => {
    const settings = {
        canvas: {
            canvasFillSpace: true,
            width: 200,
            height: 200,
            useBouncyWalls: false
        },
        particle: {
            particleCount: 60,
            color: '#DDE6ED',
            minSize: 2,
            maxSize: 5
        },
        velocity: {
            directionAngle: 0,
            directionAngleVariance: 360,
            minSpeed: 1,
            maxSpeed: 3
        },
        opacity: {
            minOpacity: 0,
            maxOpacity: 0.5,
            opacityTransitionTime: 3000
        }
    }
    return (
        <div className="">
            <div className="">
                <div className="w-full h-screen mainBg fixed">
                    <ParticleBackground className="" settings={settings} />
                </div>
            </div>
            <div className="md:flex absolute top-0 left-0 w-full h-full">
                <div className="md:w-[10%] md:order-2 flex justify-end items-center">
                    <NavBar></NavBar>
                </div>
                <div className="md:w-[90%] md:order-1">
                    <Outlet></Outlet>
                </div>

            </div>

        </div>
    );
};

export default MainLayout;