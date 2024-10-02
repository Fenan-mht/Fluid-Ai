import logo from "../assets/Logo/logo (2).png";

const navs = [
  {
    name: "Our Features",
    path: "#features",
  },
  {
    name: "Areas",
    path: "#areas",
  },
  {
    name: "FAQs",
    path: "#faq",
  },
  {
    name: "The Waitlist",
    path: "#Waitlist",
  },
  {
    name: "Conatct Us",
    path: "#contact-us",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-row justify-between py-16 w-full h-[50vh]">
      <div className="h-full w-1/2 px-10 flex flex-col gap-4">
        <img className=" w-36 h-auto" src={logo} alt="" />
        <p className="text-gray-500">2024 Fluid AI </p>
      </div>
      <div className="h-full w-1/2 flex gap-24 justify-end px-10 ">
        <div className="flex flex-col gap-3">
          {navs.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className="text-gray-500 hover:underline"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-500">Terms of Service</p>
          <p className="text-gray-500">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
