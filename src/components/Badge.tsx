export default function Badge({
  children,
  size = "s",
  selected = false,
  disabled = false,
  className = "",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "m" | "s";
  selected?: boolean;
  disabled?: boolean;
}) {
  return (
    <span
      className={`${
        size === "m" ? "text-[11px] h-[27px] w-[27px] min-w-[27px] " : "text-[10px] h-[23px] w-[23px] min-w-[23px] "
      } ${selected ? " text-white bg-black " : " text-black bg-transparent"} ${
        !disabled ? "cursor-pointer hover:text-white hover:bg-black" : ""
      } inline-flex items-center justify-center border-gray-900 border-[1px]  font-medium rounded-full leading-none ${className} `}
    >
      {children}
    </span>
  );
}
