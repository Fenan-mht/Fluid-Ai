import { ArrowLeft, ArrowRight } from "lucide-react";

interface CenterConProps {
  arrowLeft: () => void;
  arrowRight: () => void;
  content: {
    text: string;
    title: string;
  };
}

const CenterCon = ({ arrowLeft, arrowRight, content }: CenterConProps) => {
  return (
    <div className="flex flex-row w-full justify-center items-center gap-10 h-[55vh]">
      <div className="h-full items-center justify-center flex">
        <button
          onClick={arrowLeft}
          className="w-12 h-12 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <ArrowLeft />
        </button>
      </div>
      <div
        className="w-[29%] py-10 px-10 h-full rounded-xl flex flex-col justify-between"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <p className="text-base max-w-[50%]">{content.text}</p>
        <p className="text-4xl font-bold">{content.title}</p>
      </div>
      <div className="h-full items-center justify-center flex">
        <button
          onClick={arrowRight}
          className="w-12 h-12 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CenterCon;
