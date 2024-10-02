import { Plus } from "lucide-react";

const FAQq = ({ text }: { text: string }) => (
  <div className="flex flex-row pb-2 justify-between font-medium border-b border-b-gray-500">
    <p>{text}</p>
    <Plus />
  </div>
);

const text = [
  "Does Fluid AI increase wellbeing and meaning in life?",
  "What can curiosity, wonder, and awe do for you?",
  "Does Fluid AI increase wellbeing and meaning in life?",
  "What can curiosity, wonder, and awe do for you?",
  "Does Fluid AI increase wellbeing and meaning in life?",
  "What can curiosity, wonder, and awe do for you?",
  "Does Fluid AI increase wellbeing and meaning in life?",
  "What can curiosity, wonder, and awe do for you?",
];

const FAQ = () => {
  return (
    <div className="h-[100vh] px-10 flex flex-row justify-between">
      <div className="h-full w-1/2 flex flex-col  justify-center gap-4">
        <p className="text-6xl max-w-[65%] ">
          What can curiosity, wonder, and awe do for you?
        </p>
        <p className="text-base max-w-[50%] text-gray-500">
          Research shows that experiencing curiosity and awe can immensely
          benefit our mental, physical, and professional health. Here’s a brief
          overview of what curiosity and awe can do for you.
        </p>
      </div>
      <div className="h-full w-1/2 flex flex-col gap-5 justify-center">
        {text.map((item, index) => (
          <FAQq key={index} text={item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
