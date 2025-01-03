import HomeBackground from '../../components/homeBackground.jsx';
import MatrixBackground from '../../components/matrixBackground.jsx';
import LandingSection from './homeComponents/landingSection.jsx';
import ImageGallery from './homeComponents/imageGallery.jsx';
import Sponsors from './homeComponents/sponsors.jsx';
import Timeline from './homeComponents/timeline.jsx';


function Home() {

    return (
        <>
            <div className="homepage">
                <HomeBackground />
                <MatrixBackground />
                <LandingSection />
                <ImageGallery />
                <Timeline />
                <Sponsors />
            </div>
        </>
    );
}

export default Home;
