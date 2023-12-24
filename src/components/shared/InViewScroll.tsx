"use client";
/**
 * InViewScroll Component
 *
 * A component that allows tracking the visibility of its children based on scrolling.
 *
 * Props:
 * - children: The content to be rendered inside the component.
 * - classNameInView: CSS class name applied when the component is in view.
 * - classNameNotInView: CSS class name applied when the component is not in view.
 * - delay: Optional delay (in milliseconds) before updating the visibility state (default: 300).
 */

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
