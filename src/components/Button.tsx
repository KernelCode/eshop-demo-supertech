export default function Button({
  children,
  size = "large",
  className = "",
  type = "outline",
  rounded = "rounded-md",
  active = false,
  icon = null,
  onClick,
}: {
  size?: "large" | "small";
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  type?: "fill" | "outline" | "icon" | "fill-white" | "icon-fill";
  rounded?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  if (type === "icon") {
    return (
      <div
        onClick={onClick}
        className={`${
          active
            ? "hover:bg-white hover:text-black border border-white bg-black text-white"
            : "hover:bg-black hover:text-white border border-black bg-white"
        } cursor-pointer  inline-block w-8 h-8  rounded-full  text-center text-[9px] leading-8 ${className}`}
      >
        {children}
      </div>
    );
  }
  if (type === "icon-fill") {
    return (
      <div
        onClick={onClick}
        className={
          " cursor-pointer bg-black  hover:bg-white  hover:text-black  text-white inline-block w-12 h-12  rounded-full  text-center text-[28px] leading-[3.5rem] " +
          className
        }
      >
        {children}
      </div>
    );
  }

  if (type === "fill-white") {
    if (size === "small")
      return (
        <button
          onClick={onClick}
          className={`transition ease-in-out border border-black  bg-white text-xs ${
            rounded || "rounded-3xl"
          } py-1 px-4 w-fit hover:bg-black  hover:text-white ${className}`}
        >
          {children}
        </button>
      );

    return (
      <button
        onClick={onClick}
        className={`transition ease-in-out border border-black  bg-white text-sm ${
          rounded || "rounded-xl"
        }  py-2 px-6 w-fit hover:bg-black  hover:text-white ${className}`}
      >
        {children}
      </button>
    );
  }
  if (type === "outline") {
    if (size === "small")
      return (
        <button
          onClick={onClick}
          className={`transition ease-in-out border border-black text-black text-xs ${
            rounded || "rounded-md"
          }  py-2 px-4 w-fit hover:bg-black  hover:text-white ${className}  `}
        >
          {icon} {children}
        </button>
      );

    return (
      <button
        onClick={onClick}
        className={`transition ease-in-out border border-black text-black text-xs ${
          rounded || "rounded-md"
        } py-2 px-6 w-fit hover:bg-yellow-200 hover:text-black  border border-black hover:border-yellow-200 ${className} flex items-center  gap-2 justify-center text-center `}
      >
        {icon} {children}
      </button>
    );
  }

  if (size === "small")
    return (
      <button
        onClick={onClick}
        className={`transition ease-in-out bg-black text-white text-xs ${
          rounded || "rounded-md"
        } py-2 px-4 w-fit hover:bg-yellow-200 hover:text-black  border border-black hover:border-yellow-200 ${className} `}
      >
        {icon} {children}
      </button>
    );

  return (
    <button
      onClick={onClick}
      className={`transition ease-in-out bg-black text-white text-xs ${
        rounded || "rounded-md"
      } py-2 px-6 w-fit hover:bg-yellow-200 hover:text-black   hover:border-yellow-200 ${className} `}
    >
      {icon} {children}
    </button>
  );
}
