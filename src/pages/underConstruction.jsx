import { NavLink } from "react-router-dom"; // Import NavLink from React Router
import SUCBG from "../assets/customIllustration/SUCIllustration.png"; // Import the illustration image
import HoverAudio from '../assets/audio/buttonHoverGTA.mp3';
import { useRef } from "react";

function SUC() {
  const hoverAudioRef = useRef(new Audio(HoverAudio));

  const handleHover = () => {
    hoverAudioRef.current.play();
  };

  return (
    <>
      <div className="relative flex flex-col-reverse xl:flex-row items-center justify-evenly min-h-screen px-6 md:px-12 xl:px-20 gap-10">
        <div className="flex flex-col items-baseline w-40% xl:w-[40%] max-w-screen-lg ">
          <h1 className="text-2xl sm:text-4xl font-vermin text-black mb-4 drop-shadow-lg">
            ⚠️ Under Construction
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-speedPixel text-black mb-6 mt-4 w-full max-w-[500px] drop-shadow-lg">
            We are working hard to bring you the best experience. Please check back later.
          </p>

          <p className="text-sm sm:text-lg md:text-xl font-speedPixel text-black mb-8 max-w-[500px] drop-shadow-lg">
            Our team is currently upgrading the site to introduce new features that will improve your experience. We appreciate your patience during this process and assure you that the site will be back online shortly.
          </p>

          <NavLink
            to="/merchandise"
            onMouseEnter={handleHover}
            className="px-6 py-3 w-fit text-xs md:text-lg font-crossFly italic border-2 border-white text-white bg-rose-500 hover:bg-rose-600 rounded-lg drop-shadow-lg rounded-tl-3xl rounded-br-3xl hover:rounded-lg hover:scale-[.97] transition-transform duration-150"
          >
            Buy Our Merchandise
          </NavLink>
        </div>

        <div className="w-[80%] max-w-[500px] flex justify-center mt-[80px]">
          <img
            src={SUCBG}
            alt="Under Construction Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div
        className="absolute inset-0 w-full h-full -z-40 overflow-hidden"
        style={{
          background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='%23ffd700' fill-opacity='1' d='M0,160L26.7,144C53.3,128,107,96,160,101.3C213.3,107,267,149,320,144C373.3,139,427,85,480,74.7C533.3,64,587,96,640,90.7C693.3,85,747,43,800,48C853.3,53,907,107,960,128C1013.3,149,1067,139,1120,128C1173.3,117,1227,107,1280,85.3C1333.3,64,1387,32,1413,16L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'></path></svg>") no-repeat center center/cover`,
          backgroundPosition: "center 200px",
        }}
      ></div>
    </>
  );
}

export default SUC;
