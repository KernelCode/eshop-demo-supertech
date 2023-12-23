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
