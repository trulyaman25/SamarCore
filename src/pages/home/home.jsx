import MatrixBackground from '../../components/matrixBackground';

import BackgroundFall from '../../assets/illustration/BackgroundFall.png';
import Soldier from '../../assets/illustration/soldier.png';

function Home() {
    return (
        <>
            <MatrixBackground />
            <main className="w-full h-screen absolute flex flex-row justify-center items-center">
                <section className="w-[80%] h-screen relative">
                    <img src={BackgroundFall} alt="Background Fall" className="h-full object-cover absolute"/>
                    <img src={Soldier} alt="Soldier" className="absolute bottom-0"/>
                </section>
            </main>
        </>
    );
}

export default Home;