import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w-[600px] lg:min-w-[300px]">
      <SidebarRow Icon={UsersIcon} title="friends" />
      <SidebarRow Icon={ShoppingBagIcon} title="marketplace" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="memories" />
      <SidebarRow Icon={DesktopComputerIcon} title="watch" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
