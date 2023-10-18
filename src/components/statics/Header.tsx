import { FaUsers } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { PiChatsCircleFill } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <div className="w-full h-[70px] fixed flex justify-between items-center px-2 bg-emerald-100">
        <p className="font-bold smartPhone:text-[20px] text-[40px]">
          <span className="text-emerald-500">socio</span>Lify
        </p>
        <div className="flex">
          <Link to={`/`}>
            <nav className="flex items-center smartPhone:bg-transparent smartPhone:mx-0 smartPhone:text- tablet:p-3 tablet:rounded-full px-10 py-2 bg-white rounded text-emerald-600 capitalize cursor-pointer hover:text-emerald-800 transition-all duration-300 mx-2">
              <FaUsers />
              <span className="ml-2 tablet:hidden">pool</span>
            </nav>
          </Link>
          {/* <Link to={`/request`}>
            <nav className="flex items-center tablet:p-3 tablet:rounded-full smartPhone:bg-transparent smartPhone:mx-0 px-10 py-2 bg-white rounded text-emerald-600 capitalize cursor-pointer hover:text-emerald-800 transition-all duration-300 mx-2">
              <PiGitPullRequestLight />
              <span className="ml-2 tablet:hidden">request</span>
            </nav>
          </Link> */}
          <Link to={`/search`}>
            <nav className="flex items-center tablet:p-3 smartPhone:bg-transparent smartPhone:mx-0 tablet:rounded-full px-10 py-2 bg-white rounded text-emerald-600 capitalize cursor-pointer hover:text-emerald-800 transition-all duration-300 mx-2">
              <MdTravelExplore />
              <span className="ml-2 tablet:hidden">explore</span>
            </nav>
          </Link>
          <Link to={`/join`}>
            <nav className="flex items-center smartPhone:bg-transparent smartPhone:mx-0 tablet:p-3 tablet:rounded-full px-10 py-2 bg-white rounded text-emerald-600 capitalize cursor-pointer hover:text-emerald-800 transition-all duration-300 mx-2">
              <PiChatsCircleFill />
              <span className="ml-2 tablet:hidden">join</span>
            </nav>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
