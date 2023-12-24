/**
 * Marquee Component
 *
 * A component that creates a rotating marquee effect for its content.
 *
 * Props:
 * - className: Additional CSS class names to be applied to the marquee wrapper (default: "").
 * - children: Content to be displayed inside the marquee.
 */

export default function Marquee({
  children,

  className = "",
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`wrapper transform -rotate-2 mt-35 ${className}`}>
      <div className="marquee">
        <p>{children}</p>
        <p>{children}</p>
      </div>
    </div>
  );
}
