import { ReactNode } from "react";

interface SectionProps {
  background: string;
  topContent: ReactNode;
  middleContent: ReactNode;
  bottomContent: ReactNode;
}
const Section = ({
  background,
  topContent,
  middleContent,
  bottomContent,
}: SectionProps) => {
  return (
    <div className="h-screen w-screen flex-shrink-0 snap-start">
      <div
        className="relative w-full h-full flex flex-col justify-between overflow-hidden"
        style={{
          minWidth: "100%",
        }}
      >
        <img
          src={background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-5"></div>

        <div className="relative z-10 flex flex-col justify-between items-center h-full p-4">
          <div>{topContent}</div>
          <div className="w-full items-center flex justify-center">
            {middleContent}
          </div>
          <div>{bottomContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
