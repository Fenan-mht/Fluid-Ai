import CommonLayout from "./CommonLayout";
import MobileCon1 from "./MobileCon1";
import MobileCon2 from "./MobileCon2";
import MobileCon3 from "./MobileCon3";
import MobileCon4 from "./MobileCon4";

const Features = () => {
  return (
    <div className="flex flex-col gap-10 mt-36">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="font-medium text-gray-500 text-xl">Our Features</p>

        <p className="font-medium text-6xl text-center">
          Fluid AI was born out of a <br /> desire to simplify and <br />{" "}
          streamline modern life
        </p>
      </div>
      <CommonLayout left pageNumber="1/4">
        <MobileCon1 />
      </CommonLayout>
      <CommonLayout left={false} pageNumber="2/4">
        <MobileCon2 />
      </CommonLayout>
      <CommonLayout left pageNumber="3/4">
        <MobileCon3 />
      </CommonLayout>
      <CommonLayout left={false} pageNumber="4/4">
        <MobileCon4 />
      </CommonLayout>
    </div>
  );
};

export default Features;
