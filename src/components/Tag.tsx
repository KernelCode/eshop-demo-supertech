export default function Tag({
  children,
  onClick,
  className = "",
}: {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className={`hover:text-white hover:bg-black  flex gap-1 leading-3 items-center justify-center border-[1px] border-gray-700 text-gray-900 rounded-full px-2 py-[2px] w-fit text-[11px] ${className}`}
    >
      <span>{children}</span>

      <i onClick={onClick} className="fi fi-rr-cross-small cursor-pointer text-[12px]"></i>
    </div>
  );
}
