import { IoMdPerson } from "react-icons/io";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaBook } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { RxHome } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="f-cen g24">
      {[
        { text: "من اكون", icon: <IoMdPerson />, to: "/about" },
        {
          text: "معرض الأعمال",
          icon: <TbDeviceDesktopAnalytics />,
          to: "/gallery",
        },
        { text: "كتب", icon: <FaBook />, to: "/books" },
        { text: "كورسات", icon: <FaCode />, to: "/courses" },
        { text: "الرئيسية", to: "/", icon: <RxHome /> },
      ].map((item, index) => (
        <Link to={item.to} key={index} className="f-cen g8 relative group">
          <p>{item.text}</p>
          {item.icon}
            <span className="absolute right-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
}
