import { ReactNode } from "react";
import phoneFrame from "../..//assets/Pictures/image_2024-10-01_12-09-44-removebg-preview-removebg-preview.png";

interface CommonLayoutProps {
  pageNumber: string;
  left: boolean;
  children: ReactNode;
}

export const divStyles = "flex flex-col justify-between py-20  w-1/3 ";

const TextMod = ({ pageNumber }: { pageNumber: string }) => (
  <>
    <div />
    <div className="flex flex-col gap-10">
      <p className="font-medium text-3xl">
        Fluid AI: Simplify, Organize, <br /> and Achieve More
      </p>
      <p className="font-bold text-gray-500">
        In a world where daily tasks, communication, and <br />
        goals often become overwhelming, Fluid AI offers <br />
        an innovative solution. Combining advanced AI <br />
        technology with a user-friendly interface, it brings <br />
        together to-do lists, chats, saved items, and bucket <br />
        lists into one seamless platform.
      </p>
    </div>
    <div className="text-sm font-light text-gray-500">{pageNumber}</div>
  </>
);

const CommonLayout = ({ pageNumber, left, children }: CommonLayoutProps) => {
  return (
    <div className="h-[100vh] px-14 flex flex-row justify-between">
      <div className={`${divStyles}`}>
        {left ? <TextMod pageNumber={pageNumber} /> : <div />}
      </div>
      <div className="w-2/3 flex items-center justify-center ">
        <div
          className="relative w-full h-auto px-12 py-12 "
          style={{
            backgroundImage: `url(${phoneFrame})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "49%",
            aspectRatio: "9/16",
            maxWidth: "400px",
          }}
        >
          {children}
        </div>
      </div>
      <div className={`${divStyles}`}>
        {left ? "" : <TextMod pageNumber={pageNumber} />}
      </div>
    </div>
  );
};

export default CommonLayout;
