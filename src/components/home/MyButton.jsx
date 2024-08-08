const MyButton = ({ title, icon, bgColor, color }) => {
  return (
    <button
      className={`${bgColor} ${color} h-12 px-4 md:px-8 transition rounded-md hover:opacity-80 flex items-center justify-center font-semibold text-sm md:text-lg`}
    >
      {title}
      <span className="ml-2 transition hover:translate-x-2">{icon}</span>
    </button>
  );
};

export default MyButton;
