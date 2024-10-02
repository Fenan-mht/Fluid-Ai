import background from "../../assets/Pictures/Phone1bg.png";
import navImg from "../../assets/Pictures/NavBar.png";
import video from "../../assets/Vid/Vid.mp4";
import leftImg from "../../assets/Pictures/icon + bg.png";
import centerImg from "../../assets/Pictures/AI.png";
import rightImg from "../../assets/Pictures/icon + bg2.png";

const MobileCon1 = () => {
  return (
    <div
      className="relative w-full h-full flex flex-col justify-between"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maxWidth: "500px",
      }}
    >
      <div className="flex flex-col gap-1 py-2">
        <div className="px-4 flex flex-row justify-between">
          <p className="font-medium text-xs">9:41</p>
          <div className="flex flex-row gap-2"></div>
        </div>
        <div>
          <img src={navImg} alt="Navigation" />
        </div>
      </div>

      <div className="flex justify-center items-center text-center">
        <p className="text-xl">
          Hi! Can you find me top <br /> rated restaurants with a <br />
          <span className="text-gray-500">nice view</span>
        </p>
      </div>

      <div className="relative h-32 overflow-hidden">
        {" "}
        <video
          className="absolute top-3/4 left-1/2 bg-none min-w-full min-h-full w-auto h-auto opacity-50 transform -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
          src={video}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-row items-center justify-between h-full text-white">
          <img src={leftImg} alt="" />
          <img src={centerImg} alt="" />
          <img src={rightImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileCon1;
