"use client";
/**
 * MouseTracker Component
 *
 * A component that tracks the mouse position and renders a custom cursor based on the state value from the GlobalContext.
 * It uses the state.mouse value to determine the cursor behavior and position.
 */

import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@/Providers/context/Global.context";

export const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { state } = useContext(GlobalContext);

  const handleMouseMove = (event: MouseEvent) => {
    const { pageX, pageY } = event;
    setMousePosition({ x: pageX, y: pageY });
  };

  useEffect(() => {
    if (state.mouse === "hide") {
      document.body.style.cursor = "none";
      return;
    }
    if (state.mouse === null) {
      document.body.style.cursor = "auto";
      return () => {
        document.body.removeEventListener("mousemove", handleMouseMove);
      };
    }
    document.body.style.cursor = "none";
    document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, [state.mouse]);

  useEffect(() => {
    if (state.mouse === null || state.mouse === "hide") return;
    // if the mouse state is on then we make a custom cursor and replace the normal cursor
    const element = document.getElementById("custom-cursor");
    if (element) {
      element.style.left = `${mousePosition.x - 50}px`;
      element.style.top = `${mousePosition.y - 50}px`;
    }
  }, [mousePosition, state.mouse]);

  if (state.mouse === null || state.mouse === "hide") return;
  // this is the cursor in hero section
  // we can make as many custom cursors as we want and show them by the state.mouse value
  if (state.mouse === "hero")
    return (
      <div id="custom-cursor">
        <div className="center-icon">
          <i className=" fi fi-ss-play"></i>
        </div>

        <div className="svg">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              id="circlePath"
              fill="none"
              d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        "
            />
            <text id="text" fontFamily="lufga" fontSize="16">
              <textPath href="#circlePath">EXPLORE MORE COLLECTION</textPath>
            </text>
          </svg>
        </div>
      </div>
    );
  return <div id="custom-cursor">normal</div>;
};
