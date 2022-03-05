import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  ShoppingBagIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 shadow-md">
      {/* left */}

      <div className="flex  justify-start items-center">
        <Image
          src="https://worldsummit.ai/wp-content/uploads/sites/4/2021/07/Facebook-logo-650x406.png"
          height={40}
          width={65}
          layout="fixed"
        />
        <div className="flex ml-1 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="ml-1 hidden md:inline-flex placeholder-gray-500 outline-none bg-transparent"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow  ">
        <div className="flex space-x-6 md:space-x-1">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingBagIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <p>pooyan hamidi</p>
        <BellIcon className="icon" />
        <ChatIcon className="icon" />
        <ViewGridIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
