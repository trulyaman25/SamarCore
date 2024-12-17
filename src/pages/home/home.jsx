import HomeBackground from '../../components/homeBackground.jsx';
import MatrixBackground from '../../components/matrixBackground.jsx';
import LandingSection from './homeComponents/landingSection.jsx';
import ImageGallery from './homeComponents/imageGallery.jsx';

function Home() {
    return (
        <>
            <HomeBackground />
            <MatrixBackground />
            <LandingSection />
            <ImageGallery />
        </>
    );
}

export default Home;