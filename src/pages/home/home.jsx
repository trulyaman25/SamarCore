import React, { useEffect, useRef } from 'react';
import HomeBackground from '../../components/homeBackground';
import MatrixBackground from '../../components/matrixBackground';
import OrbBackground from '../../components/orbsBackground';
import LandingSection from './homeComponents/landingSection';
import ImageSection from './homeComponents/ImageSection';

function Home() {
    return (
        <>
            <HomeBackground />
            <MatrixBackground />
            {/* <OrbBackground /> */}
            <LandingSection />
            <ImageSection />
        </>
    );
}

export default Home;