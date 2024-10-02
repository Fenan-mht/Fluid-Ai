import { useState } from "react";
import background from "../../assets/Pictures/Join Waitlist.png";
import { ChevronDown } from "lucide-react";
import background2 from "../../assets/Pictures/Mask group.png";

interface InputsProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  type: string;
}
const Inputs = ({ value, setValue, placeholder, type }: InputsProps) => (
  <div className="relative w-1/2 border-b  border-gray-500">
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder=" "
      className="w-full h-12 focus:outline-none bg-inherit"
    />
    <label
      className={`absolute left-1 transition-all duration-200 ${
        value ? "top-[-10px] text-gray-500" : "top-2 text-gray-400"
      }`}
    >
      {placeholder}
    </label>
  </div>
);

interface SelectDropdownProps {
  options: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

const SelectDropdown = ({
  options,
  selectedValue,
  setSelectedValue,
}: SelectDropdownProps) => {
  return (
    <div className="relative w-1/2 py-2 border-b border-gray-500">
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className="w-full bg-transparent text-white appearance-none focus:outline-none"
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className="bg-[#232323] text-white px-2"
          >
            {option}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <ChevronDown />
      </div>
    </div>
  );
};

const Waitlist = () => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
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

        <div className="relative z-10 flex flex-row justify-between items-center h-full p-4">
          <div className="h-full w-1/2 flex flex-col px-10 justify-center gap-4">
            <p className="text-6xl max-w-[61%]">
              Join the Fluid AI Waitlist Today!
            </p>
            <div className="flex flex-col gap-5">
              <Inputs
                placeholder="Name"
                value={value}
                setValue={(value) => setValue(value)}
                type="text"
              />
              <Inputs
                placeholder="Email"
                value={email}
                setValue={(value) => setEmail(value)}
                type="email"
              />
              <SelectDropdown
                options={["Option 1", "Option 2", "Option 3"]}
                selectedValue={""}
                setSelectedValue={function (value: string): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </div>

          <div className="w-1/2 h-full ">
            <img
              src={background2}
              alt="Background"
              className="absolute left-[400px]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
