function SidebarRow({ Icon, title }) {
  return (
    <div className="flex items-center space-x-2 hover:bg-gray-200 rounded-md cursor-pointer">
      <Icon className="h-8 w-8 text-blue-500" />
      <p className="hidden md:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
