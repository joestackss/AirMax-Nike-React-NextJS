const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  border,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-4 border-2 font-spaceGrotesk
  
  text-lg leading-none ${
    backgroundColor
      ? ` ${backgroundColor} ${textColor} ${borderColor} ${border}`
      : "bg-black text-white"
  } ${fullWidth && "w-full"}
  `}
    >
      {label}
    </button>
  );
};

export default Button;
