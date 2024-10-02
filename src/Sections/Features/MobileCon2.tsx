import background from "../../assets/Pictures/_Calendar_73.png";
import navImg from "../../assets/Pictures/image_2024-10-01_22-50-19.png";
import secondDiv from "../../assets/Pictures/Frame 1171275477.png";
import thirdDiv from "../../assets/Pictures/Calendar.png";
import fourthDiv from "../../assets/Pictures/Frame 1171275478.png";
import Search from "../../assets/Pictures/Input.png";
import longPic from "../../assets/Pictures/Frame 1171275342.png";
import bottomNav from "../../assets/Pictures/Group 1171275340.png";
const MobileCon2 = () => {
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
            <img src={secondDiv} alt="" />
          </div>
          <div>
            <img src={thirdDiv} alt="" />
          </div>
          <div>
            <img src={fourthDiv} alt="" />
          </div>
          <div>
            <img src={Search} alt="" />
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

export default MobileCon2;
