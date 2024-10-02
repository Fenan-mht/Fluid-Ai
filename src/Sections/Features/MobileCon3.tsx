import background from "../../assets/Pictures/_Calendar_73.png";
import navImg from "../../assets/Pictures/Top2.png";
import secondDiv from "../../assets/Pictures/Messages chats.png";
import Search from "../../assets/Pictures/Input.png";
import longPic from "../../assets/Pictures/Frame 1000011304.png";
import bottomNav from "../../assets/Pictures/Group 1171275340.png";

const MobileCon3 = () => {
  return (
    <div
      className="relative w-full h-full flex flex-col gap-2"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maxWidth: "500px",
      }}
    >
      <div className="flex flex-col gap-1 py-2">
        <div className="px-4 sticky flex flex-row justify-between">
          <p className="font-medium text-xs">9:41</p>
          <div className="flex flex-row gap-2"></div>
        </div>
        <div className="mt-3 overflow-y-scroll flex flex-col gap-2 h-[60vh] ">
          <div>
            <img src={navImg} alt="Navigation" />
          </div>
          <div>
            <img src={Search} alt="" />
          </div>
          <div>
            <img src={secondDiv} alt="" />
          </div>

          <div>
            <img src={longPic} alt="" />
          </div>
        </div>
        <div>
          <img src={bottomNav} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileCon3;
