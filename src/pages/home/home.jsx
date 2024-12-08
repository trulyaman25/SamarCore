import { NavLink } from 'react-router-dom';

import MatrixBackground from '../../components/matrixBackground';
import OrbBackground from '../../components/orbsBackground';
import BackgroundFall from '../../assets/illustration/BackgroundFall.png';
import Soldier from '../../assets/illustration/soldier.png';
import SamarLogo from '../../assets/logo/SamarLogoWhite.png';
import Year25 from '../../assets/customIllustration/year25.png';
import DownArrow from '../../assets/animation/downArrow.json';

function Home() {
    return (
        <>
            <MatrixBackground />
            <OrbBackground />
            <main className="w-full h-screen absolute flex flex-row justify-center items-center overflow-x-hidden">
                <section className="w-[80%] h-screen max-h-screen flex flex-row justify-between items-center overflow-y-hidden">
                    <div className='h-screen'>
                        <img src={BackgroundFall} alt="Background Fall" className="h-full object-cover absolute"/>
                        <img src={Soldier} alt="Soldier" className="absolute bottom-0"/>
                    </div>

                    <div className='text-white w-[700px] h-screen flex flex-col justify-center items-center'>
                        <div className='flex flex-row justify-center items-center'>
                            <img src={SamarLogo} alt="Samar Logo" className='w-[100px]' />
                            <h1 className='font-knightWarrior text-7xl glow-text'>2025</h1>
                        </div>
        
                        <h1 className="font-vermin text-9xl text-[#ff882d] glow-text">
                            <span className="glowing-border">SAMAR</span>
                        </h1>
        
                        <p className='w-[600px] mt-8 font-fastLines text-3xl text-center tracking-widest'>
                            A Flagship Sport's Event Organized by <a className='text-rose-500 hover:cursor-pointer hover:text-rose-700 transition-all ease-in-out' href="https://shaurya-nitrr.netlify.app/" target="_blank">Shaurya Sports Committee</a>, NITRR
                        </p>
        
                        <NavLink to="/register" className='mt-8 border-2 px-16 py-4 text-xl italic border-rose-500 text-rose-100 font-crossFly rounded-tl-3xl rounded-br-3xl hover:bg-rose-500 hover:backdrop-blur-md hover:rounded-lg hover:text-white hover:scale-[.97] transition-all ease-in-out backdrop-blur-md'>
                            REGISTER
                        </NavLink>
        
                        <div className='flex flex-col justify-center items-center mt-12'>
                            <h1 className='text-5xl font-fastLines'>explore</h1>
                        </div>

                        <img src={Year25} alt="Year 2025" className='w-[1000px] absolute z-[-1] bottom-0 -right-20 ' />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;