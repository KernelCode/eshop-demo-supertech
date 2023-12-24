/**
 * Badge Component
 *
 * A badge component used to display small pieces of information or labels.
 *
 * Props:
 * - className: Additional CSS class names to be applied to the badge (default: "").
 * - children: Content to be displayed inside the badge.
 * - size: Determines the size of the badge. Accepts "m" or "s" (default: "s").
 * - selected: Determines if the badge is in a selected state (default: false).
 * - disabled: Determines if the badge is disabled (default: false).
 */
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
