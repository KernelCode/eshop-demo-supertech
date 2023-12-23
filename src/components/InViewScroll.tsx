"use client";
import { useInView } from "react-intersection-observer";

export default function InViewScroll({
  children,
  classNameInView,
  classNameNotInView,
  delay,
}: {
  children: React.ReactNode;
  classNameInView: string;
  classNameNotInView: string;
  delay?: number;
}) {
  const { ref, inView } = useInView({ initialInView: true, trackVisibility: true, delay: delay ?? 300 });
  return (
    <div ref={ref} className={inView ? classNameInView : classNameNotInView}>
      {children}
    </div>
  );
}
