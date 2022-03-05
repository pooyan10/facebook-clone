function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex ml-2 items-center cursor-pointer md:px-6 sm:px-2 sm:h-14 hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 hover:text-blue-500 ">
      <Icon
        className={`h-5 text-gray-500 text-center sm:h-7 mx-auto flex-shrink ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
